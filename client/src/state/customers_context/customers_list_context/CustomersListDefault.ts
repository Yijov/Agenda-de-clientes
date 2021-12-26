import ICustomerLisState from "./ICustomerLisState";
import ICustomer from "../../../interfaces/ICustomer";
import IUpdateCustomerDTO from "../../../interfaces/IUpdateCustomerDTO";

const CustomersListDefault: ICustomerLisState = {
  API: {
    GET_CUSTOMERS: function (): Promise<void> {
      throw new Error("Function not implemented.");
    },
    UPDATE_CUSTOMERS: function (
      UpdatedCustomer: IUpdateCustomerDTO
    ): Promise<ICustomer | undefined> {
      throw new Error("Function not implemented.");
    },
    DELETE_CUSTOMERS: function (customerid: string): Promise<void> {
      throw new Error("Function not implemented.");
    },
    ADD_CUSTOMER: function (newCustomer: ICustomer): Promise<ICustomer | undefined> {
      throw new Error("Function not implemented.");
    },
  },
  STATE: {
    Customers: [],
  },
};
export default CustomersListDefault;
