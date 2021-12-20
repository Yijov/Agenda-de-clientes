export default interface IDBRepository {
  FindAll(): Promise<any>;
  FindById(_id: string): Promise<any>;
  Add(DTO: any): Promise<any>;
  Update(DTO: any): Promise<any>;
  Delete(DTO: any): Promise<any>;
}
