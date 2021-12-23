import IAccount from "../entity/IAccount";

export default interface IAccountRepository {
  FindAccountByEmail(email: string): Promise<IAccount | null>;
  FindAllAccounts(): Promise<IAccount[]>;
  FindAccountById(_id: string): Promise<IAccount | null>;
  AddAccount(DTO: IAccount): Promise<IAccount>;
  UpdateAccount(accountID: string, DTO: any): Promise<IAccount | null>;
  DeleteAccount(accountID: string): Promise<boolean>;
}
