import ICustomer from "./ICustomer";
import IContactPerson from "./IContactPerson";
export default interface IBusinessCustomer extends ICustomer {
  RNC: string;
  contactPerson: IContactPerson[];
}
