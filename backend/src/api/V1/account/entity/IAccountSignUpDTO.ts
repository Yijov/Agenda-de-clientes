import IAccount from "./IAccount";
export default interface IAccountSignUpDTO extends IAccount {
  confirmPassword: string;
}
