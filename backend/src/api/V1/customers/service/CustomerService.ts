import { inject, injectable, registry } from "tsyringe";
import { ICustomer, IInteraction } from "../entity";
import ICustomerRepository from "../repository/ICustomerRepositoty";
import ICustomerService from "./ICustomerService";
import IUpdateCustomerDTO from "../entity/IUpdateCustomerDTO";
import { repotoken, CustomerServiceRegistry } from "./Registry";
import { Conflict } from "../../../../errors/custom_errors";

@injectable()
@registry(CustomerServiceRegistry)
export default class CustomerService implements ICustomerService {
  constructor(@inject(repotoken.MongoDB) private repo: ICustomerRepository) {}

  GetAll = async (userID: string): Promise<ICustomer[]> => {
    const customers = await this.repo.FindAllFromUser(userID);
    return customers;
  };

  AddOne = async (customer: ICustomer): Promise<ICustomer> => {
    const alreadyExist = await (
      await this.repo.FindAllFromUser(<string>customer.userAccountId)
    ).filter((cust) => cust.name === customer.name);

    if (alreadyExist.length > 0) {
      throw new Conflict(
        `A customer named "${customer.name}" already exists in your account _id: ${alreadyExist[0]._id}`
      );
    }
    const customers = await this.repo.AddOne(customer);
    return customers;
  };

  DeleteOne = async (_id: string): Promise<boolean> => {
    await this.repo.DeletebyID(_id);
    return true;
  };

  UpdateOne = async (DTO: IUpdateCustomerDTO): Promise<ICustomer> => {
    const updatedCustomer = await this.repo.updateOne(DTO);
    return updatedCustomer;
  };

  AddInteraction = async (interaction: IInteraction, CustomerID: string): Promise<ICustomer> => {
    let customer = await this.repo.AddInteraction(CustomerID, interaction);
    return customer;
  };

  DeleteInteraction = async (interactionId: string, CustomerID: string): Promise<boolean> => {
    await this.repo.DeleteInteraction(CustomerID, interactionId);
    return true;
  };
}
