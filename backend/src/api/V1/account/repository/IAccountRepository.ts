import IAccount from "../entity/IAccount";

export default interface IAccountRepository {
  FindByEmail(email: string): Promise<IAccount>;
  FindAll(): Promise<IAccount[]>;
  FindById(_id: string): Promise<IAccount>;
  Add(DTO: IAccount): Promise<IAccount>;
  Update(DTO: IAccount): Promise<IAccount>;
  Delete(DTO: IAccount): Promise<IAccount>;
}
