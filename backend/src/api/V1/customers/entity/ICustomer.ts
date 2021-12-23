import ICustomerAddress from "./ICustomerAddress";
import ICustomerInteraction from "./ICustomerInteraction";
import customerTypes from "../enums/customerTipes";
import customerCategories from "../enums/customerCategories";

export default interface ICustomer {
  _id?: string;
  __type: customerTypes;
  userAccountId: {} | string;
  name: string;
  phone: string;
  email: string;
  category: customerCategories;
  owes: number;
  isOwed: number;
  address: ICustomerAddress[];
  interactions: ICustomerInteraction[];
}
