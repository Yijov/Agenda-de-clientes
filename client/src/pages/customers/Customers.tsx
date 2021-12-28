import React, { useContext } from "react";
import { State } from "../../state/State";
import PageHeader from "../../components/section_header/PageHeader";
import SearchBar from "../../components/search_bar/SearchBar";
import CustomerListComponent from "../../components/lists/customers_list/CustomerList";
import useFilter from "../../components/lists/customers_list/useFilter";
import ICustomer from "../../models/ICustomer";
const Customers: React.FC = () => {
  const { CUSTOMERS_LIST_CONTEXT } = useContext(State);
  const [FilteredCustomers, filterFunction] = useFilter(CUSTOMERS_LIST_CONTEXT.STATE.Customers);

  return (
    <div className="customer-page page">
      <PageHeader title={"Customers"} />
      <SearchBar FilterFunction={filterFunction as (e: any) => void} />
      <CustomerListComponent customers={FilteredCustomers as ICustomer[]} />
    </div>
  );
};

export default Customers;
