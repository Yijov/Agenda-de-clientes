import React, { useContext } from "react";
import ICustomer from "../../models/ICustomer";
import { State } from "../../state/State";
import PageHeader from "../../components/section_header/PageHeader";
import SearchBar from "../../components/search_bar/SearchBar";
import CustomerListComponent from "../../components/lists/customers_list/CustomerList";
import useFilter from "../../components/lists/customers_list/useFilter";
import { sortByRecentContact } from "../../utils";

const History: React.FC = () => {
  const { CUSTOMERS_LIST_CONTEXT } = useContext(State);
  const [FilteredCustomers, filterFunction] = useFilter(CUSTOMERS_LIST_CONTEXT.STATE.Customers);
  const customersSortedByLastContact = (FilteredCustomers as ICustomer[])
    ?.slice()
    .sort(sortByRecentContact);

  return (
    <div className="history-page page">
      <PageHeader title={"History"} />
      <SearchBar FilterFunction={filterFunction as (e: any) => void} />
      <CustomerListComponent customers={customersSortedByLastContact as ICustomer[]} />
    </div>
  );
};

export default History;
