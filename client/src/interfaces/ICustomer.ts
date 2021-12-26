import ICustomerAddress from "./ICustomerAddress";
import ICustomerInteraction from "./ICustomerInteraction";
import customerTypes from "../enums/customerTipes";
import customerCategories from "../enums/customerCategories";
import IContactPerson from "./IContactPerson";

export default interface ICustomer {
  _id?: string;
  __type: customerTypes;
  userAccountId: {} | string;
  name: string;
  lastName?: string;
  phone: string;
  email: string;
  category: customerCategories;
  owes: number;
  isOwed: number;
  address: ICustomerAddress[];
  interactions: ICustomerInteraction[];
  RNC?: string;
  contactPerson?: IContactPerson[];
  createdAt?: string;
}
