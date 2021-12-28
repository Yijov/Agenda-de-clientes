import { useState } from "react";
import { toast } from "react-toastify";
import CustomersAPI from "../../../data/apis/CustomersAPI";
import sortByName from "../../../utils/SortByName";
import ICustomer from "../../../models/ICustomer";
import IUpdateCustomerDTO from "../../../models/IUpdateCustomerDTO";

const api = new CustomersAPI();

export default function useCustomerListState() {
  // customers retreaved from the database
  const [Customers, setCustomers] = useState<ICustomer[]>([]);

  //get all customers from the database
  const GET_CUSTOMERS = async () => {
    let response = await api.GET_CUSTOMERS();
    if (response.success) {
      let customers = response.payload;
      if (customers.length > 0) {
        return setCustomers(customers.sort(sortByName));
      }
    } else if (response.success === false) {
      toast.error(response.message);
    } else {
      toast.error("unable to conect to server");
    }
  };

  //Post customer to the database and update de state
  const ADD_CUSTOMER = async (newCustomer: ICustomer) => {
    let response = await api.CREATE_CUSTOMER(newCustomer);
    if (response.success) {
      toast.success("Customer Added");
      let customerAdded = response.payload;
      setCustomers([...Customers, customerAdded].sort(sortByName));
      return response.payload;
    } else if (response.success === false) {
      toast.error(response.message);
    } else {
      toast.error("unable to conect to server");
    }
  };
  // send updated to the database and update the state accordingly
  const UPDATE_CUSTOMERS = async (UpdatedCustomer: IUpdateCustomerDTO) => {
    let response = await api.UPDATE_CUSTOMER(UpdatedCustomer);
    let FilteredState = await Customers.filter((cust) => cust._id !== UpdatedCustomer._id);
    if (response.success) {
      toast.success("Customer updated");
      FilteredState.push(response.payload);
      setCustomers(FilteredState.sort(sortByName));
      return response.payload;
    } else {
      toast.error("Unable to Update Customer. Please, verify your connection");
    }
  };

  //eliminate customer from database and state
  const DELETE_CUSTOMERS = async (customerid: string) => {
    let response = await api.DELETE_CUSTOMER(customerid);
    if (response.success) {
      toast.info("Customer Deleted");
      let FilteredState = Customers.filter((cust) => cust._id !== customerid);
      setCustomers(FilteredState.sort(sortByName));
      return;
    } else {
      toast.error("Unable to Delete. Please, verify your connection");
    }
  };

  //abstracting to an object before exporting
  //the API object  contains all the methods to modify the state and the STATE contains all relavant pieces of data
  const CUSTOMERS_LIST_CONTEXT = {
    API: {
      GET_CUSTOMERS,
      DELETE_CUSTOMERS,
      UPDATE_CUSTOMERS,
      ADD_CUSTOMER,
    },
    STATE: {
      Customers,
    },
  };

  return CUSTOMERS_LIST_CONTEXT;
}
