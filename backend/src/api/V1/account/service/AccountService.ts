import { Response } from "express";
import { inject, injectable, singleton } from "tsyringe";
import IAccountSignInDTO from "../entity/IAccountSignInDTO";
import IAuthSignUpDTO from "../entity/IAccountSignUpDTO";
import IAccountUpdateDTO from "../entity/IAccountUpdateDTO";
import PasswordResetDTO from "../entity/PasswordResetDTO";
import IAccountService from "./IAccountService";
import IAccountRepository from "../repository/IAccountRepository";

@injectable()
export default class AccountService implements IAccountService {
  constructor(@inject("AccountRepository") private repo?: IAccountRepository) {}

  async ResetPassword(DTO: PasswordResetDTO, res: Response): Promise<boolean> {
    return true;
  }
  async update(AccountData: IAccountUpdateDTO): Promise<boolean> {
    return true;
  }

  async SinUp(DTO: IAuthSignUpDTO): Promise<boolean> {
    return true;
  }

  async SinIn(credentials: IAccountSignInDTO, res: Response): Promise<boolean> {
    return true;
  }

  async SinOut(res: Response): Promise<boolean> {
    return true;
  }
}
