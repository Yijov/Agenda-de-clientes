import { Response } from "express";
import IAuthSignUpDTO from "../entity/IAccountSignUpDTO";
import IAccountSignInDTO from "../entity/IAccountSignInDTO";
import IPasswordResetDTO from "../entity/PasswordResetDTO";
import IAccountUpdateDTO from "../entity/IAccountUpdateDTO";

export default interface IAccountService {
  SinUp(DTO: IAuthSignUpDTO): Promise<boolean>;
  SinIn(credentials: IAccountSignInDTO, res: Response): Promise<boolean>;
  SinOut(res: Response): Promise<boolean>;
  ResetPassword(DTO: IPasswordResetDTO, res: Response): Promise<boolean>;
  update(AccountData: IAccountUpdateDTO): Promise<boolean>;
}
