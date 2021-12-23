import { ICustomer } from "../entity";
import { Document } from "mongoose";
import { IInteraction } from "../entity";
import IUpdateCustomerDTO from "../entity/IUpdateCustomerDTO";
export default interface ICustomerRepository {
  FindAll(): Promise<ICustomer[]>;
  FindAllFromUser(userid: string): Promise<ICustomer[]>;
  FindbyID(customerid: string): Promise<Document<ICustomer>>;
  AddOne(customer: ICustomer): Promise<ICustomer>;
  updateOne(DTO: IUpdateCustomerDTO): Promise<ICustomer>;
  DeletebyID(customerid: string): Promise<boolean>;
  AddInteraction(customerID: string, interaction: IInteraction): Promise<ICustomer>;
  DeleteInteraction(customerID: string, interactionId: string): Promise<boolean>;
}
