import { useState, useEffect } from "react";
import ICustomer from "../../../interfaces/ICustomer";

export default function useFilter(CUSTOMERS: ICustomer[]) {
  const [FilteredCustomers, setFilteredCustomers] = useState<ICustomer[]>(CUSTOMERS);

  const filterFunction = (e: any) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = CUSTOMERS.filter((cust) => {
        return cust.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFilteredCustomers(results);
    } else {
      setFilteredCustomers(CUSTOMERS);
      // If the text field is empty, show all users
    }
  };

  useEffect(() => {
    setFilteredCustomers(CUSTOMERS);
  }, [CUSTOMERS]);

  return [FilteredCustomers, filterFunction];
}
