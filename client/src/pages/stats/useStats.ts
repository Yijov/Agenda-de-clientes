import { useContext } from "react";
import ICustomer from "../../interfaces/ICustomer";
import ICustomerInteraction from "../../interfaces/ICustomerInteraction";
import { State } from "../../state/State";
import FilterByDates from "../../utils/FilterByDates";
import InteractionType from "../../enums/InteractionType";

export default function useStats() {
  const { CUSTOMERS_LIST_CONTEXT } = useContext(State);
  const Customers = CUSTOMERS_LIST_CONTEXT.STATE.Customers;
  const [Contacted, Added, ThisWeek, ThisMonth] = ["updatedAt", "createdAt", 7, 30];

  //Stats
  const MonthlySales = FilterByDates(getAllSales(Customers), Contacted, ThisMonth);

  const TotalCustomers = Customers.length;
  const ContactedThisWeek = FilterByDates(Customers, Contacted, ThisWeek);
  const AddedThisWeek = FilterByDates(Customers, Added, ThisWeek);
  const contactedThisMonth = FilterByDates(Customers, Contacted, ThisMonth);
  const AddedThisMonth = FilterByDates(Customers, Added, ThisMonth);
  const MonthlyReach = Math.round((contactedThisMonth / TotalCustomers) * 100);
  const MonthlyGrouth = Math.round((AddedThisMonth / TotalCustomers) * 100);
  const MonthlyConvertion = Math.round((MonthlySales / contactedThisMonth) * 100);

  const Stats = {
    TotalCustomers,
    AddedThisWeek,
    ContactedThisWeek,
    MonthlyReach,
    MonthlyGrouth,
    MonthlyConvertion,
  };
  return Stats;
}

const getAllSales = (Customers: ICustomer[]) => {
  const allInteractions = Customers.map((cust) => cust?.interactions);
  let sales: ICustomerInteraction[] = [];
  allInteractions.forEach((element) => {
    sales = [...sales, ...element];
  });

  return sales.filter((sale) => sale.type === InteractionType.Sale);
};
