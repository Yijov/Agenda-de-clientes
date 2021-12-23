import { Response } from "express";
import SecurityTools from "../../../utils/security/SecurityTools";
import IAccountService from "./IAccountService";
import IAccountRepository from "../repository/IAccountRepository";
import { inject, injectable, registry } from "tsyringe";
import accountServiceRegistry from "./AccountServiceRegistry";
import { BadRequest, NotFound } from "../../../../errors/custom_errors";
import {
  IAccountSignInDTO,
  IAccountSignUpDTO,
  IAccountUpdateDTO,
  IPasswordResetDTO,
  IAccount,
} from "../entity";

@injectable()
@registry(accountServiceRegistry) // register all the injection dependencies of this class
export default class AccountService implements IAccountService {
  constructor(
    private authTools: SecurityTools,
    @inject("AccountRepository") private repo?: IAccountRepository
  ) {}

  ResetPassword = async (
    AccountId: string,
    DTO: IPasswordResetDTO,
    res: Response
  ): Promise<boolean> => {
    //validate user Exists
    const accountExists = await this.repo?.FindAccountById(AccountId);
    if (accountExists) {
      //create new hashed password
      const hashedPword = await this.authTools.EncriptPasword(DTO.newPassword);
      await this.repo?.UpdateAccount(AccountId, {
        password: hashedPword,
      });
      //log out the customer so that it can sign in again
      this.authTools.removeCredentials(res);
      return true;
    } else {
      throw new NotFound("this account does not exist");
    }
  };

  async update(token: string, DTO: IAccountUpdateDTO): Promise<IAccount> {
    const accountId: string = await this.authTools.ExtractInfoFromToken(token).toString();
    const accountExists = await this.repo?.FindAccountById(accountId);
    if (accountExists) {
      const result = await this.repo?.UpdateAccount(accountId, DTO);
      return result!!;
    } else {
      throw new BadRequest("Account does not exist");
    }
  }

  async SinUp(DTO: IAccountSignUpDTO): Promise<IAccount> {
    //verify account does not exist already

    const accountExists = await this.repo?.FindAccountByEmail(DTO.email);
    if (accountExists) {
      throw new BadRequest("There is already an account with this email address");
    } else {
      //hash tehe provided password

      const hashedPword = await this.authTools.EncriptPasword(DTO.password);
      DTO.password = hashedPword;

      // create the account in the database

      const newAccount = this.repo?.AddAccount(DTO);
      return newAccount!!;
    }
  }

  SinIn = async (credentials: IAccountSignInDTO, res: Response) => {
    //verify account existence
    const accountExists = await this.repo?.FindAccountByEmail(credentials.email);
    if (accountExists) {
      //validate password is coorect
      const authenticatedAccount = await this.authTools.validatePasswaord(
        credentials.password,
        accountExists.password
      );
      if (authenticatedAccount) {
        //add authentication cookeis to the response
        const token = await this.authTools.CreateToken({
          id: accountExists._id!!,
        });
        await this.authTools.addCredentials(res, token);
        return;
      } else {
        throw new BadRequest("user or password is incorrect");
      }
    } else {
      throw new BadRequest("user or password is incorrect");
    }
  };

  async SinOut(res: Response): Promise<boolean> {
    this.authTools.removeCredentials(res);
    return true;
  }
}
