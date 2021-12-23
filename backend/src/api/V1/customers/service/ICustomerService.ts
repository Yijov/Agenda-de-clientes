import ICustomerInteraction from "../entity/ICustomerInteraction";
import ICustomer from "../entity/ICustomer";
import IUpdateCustomerDTO from "../entity/IUpdateCustomerDTO";
export default interface ICustomerService {
  GetAll(userID: string): Promise<ICustomer[]>;
  AddOne(customer: ICustomer): Promise<ICustomer>;
  DeleteOne(_id: string): Promise<boolean>;
  UpdateOne(DTO: IUpdateCustomerDTO): Promise<ICustomer>;
  AddInteraction(interaction: ICustomerInteraction, CustomerID: string): Promise<ICustomer>;
  DeleteInteraction(interactionId: string, CustomerID: string): Promise<boolean>;
}
