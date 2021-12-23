import IContactPerson from "./IContactPerson";
import ICustomerAddress from "./ICustomerAddress";

export default interface IUpdateCustomerDTO {
  __type: string;
  _id: string;
  userAccountId: {} | string;
  changes: {
    name?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    category?: string;
    owes?: number;
    isOwed?: number;
    address?: ICustomerAddress[];
    RNC?: string;
    contactPerson?: IContactPerson[];
  };
}
