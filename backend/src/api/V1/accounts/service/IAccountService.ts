import { Response } from "express";
import {
  IPasswordResetDTO,
  IAccountSignInDTO,
  IAccountUpdateDTO,
  IAccountSignUpDTO,
} from "../entity";
import IAccount from "../entity/IAccount";

export default interface IAccountService {
  SinUp(DTO: IAccountSignUpDTO): Promise<IAccount>;

  SinIn(credentials: IAccountSignInDTO, res: Response): Promise<void>;

  SinOut(res: Response): Promise<boolean>;

  ResetPassword(AccountId: string, DTO: IPasswordResetDTO, res: Response): Promise<boolean>;

  update(token: string, AccountData: IAccountUpdateDTO): Promise<IAccount>;
}
