import { singleton, injectable } from "tsyringe";
import IAccountRepository from "../IAccountRepository";
import { IAccountSignUpDTO } from "../../entity";
import AccountModel from "./MongoSchema";

@singleton()
@injectable()
class MongoRepository implements IAccountRepository {
  private accounts = AccountModel;
  constructor() {}

  FindAccountByEmail = async (email: string) => {
    try {
      const Account = await this.accounts.find({ email: email });
      return Account.length > 0 ? Account[0] : null;
    } catch (error) {
      throw error;
    }
  };

  FindAllAccounts = async () => {
    try {
      const Acoounts = await this.accounts.find();
      return Acoounts;
    } catch (error) {
      throw error;
    }
  };

  FindAccountById = async (_id: string) => {
    try {
      const Acoount = await this.accounts.findById(_id);
      return Acoount;
    } catch (error) {
      throw error;
    }
  };

  AddAccount = async (DTO: IAccountSignUpDTO) => {
    try {
      let newUser = await new this.accounts({
        name: DTO.name,
        lastName: DTO.lastName,
        email: DTO.email,
        password: DTO.password,
      });
      let addedUser = await newUser.save();
      return addedUser;
    } catch (error) {
      throw error;
    }
  };

  UpdateAccount = async (accountID: string, DTO: any) => {
    try {
      let id = { _id: accountID };
      let change = { $set: DTO };
      let options = { upsert: true, new: true };
      let result;
      result = await this.accounts.findOneAndUpdate(id, change, options).exec();
      return result;
    } catch (error) {
      throw error;
    }
  };

  DeleteAccount = async (accountID: string) => {
    try {
      let customer = await this.accounts.findByIdAndDelete(accountID);
      if (customer) {
        return true;
      } else return false;
    } catch (error) {
      throw error;
    }
  };
}
export default MongoRepository;
