import ICustomer from "../../../interfaces/ICustomer";
import IUpdateCustomerDTO from "../../../interfaces/IUpdateCustomerDTO";

export default interface ICustomerLisState {
  API: {
    GET_CUSTOMERS: () => Promise<void>;
    UPDATE_CUSTOMERS: (UpdatedCustomer: IUpdateCustomerDTO) => Promise<ICustomer | undefined>;
    DELETE_CUSTOMERS: (customerid: string) => Promise<void>;
    ADD_CUSTOMER: (newCustomer: ICustomer) => Promise<ICustomer | undefined>;
  };

  STATE: { Customers: ICustomer[] };
}
