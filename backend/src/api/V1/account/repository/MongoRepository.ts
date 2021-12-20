import IAccountRepository from "./IAccountRepository";
import IAccount from "../entity/IAccount";
import { singleton, injectable } from "tsyringe";

@singleton()
@injectable()
class MongoRepository implements IAccountRepository {
  constructor() {}
  FindByEmail(email: string): Promise<IAccount> {
    throw new Error("Method not implemented.");
  }
  FindAll(): Promise<IAccount[]> {
    throw new Error("Method not implemented.");
  }
  FindById(_id: string): Promise<IAccount> {
    throw new Error("Method not implemented.");
  }
  Add(DTO: any): Promise<IAccount> {
    throw new Error("Method not implemented.");
  }
  Update(DTO: any): Promise<IAccount> {
    throw new Error("Method not implemented.");
  }
  Delete(DTO: any): Promise<IAccount> {
    throw new Error("Method not implemented.");
  }
}
export default MongoRepository;
