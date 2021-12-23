import { Request, Response, NextFunction } from "express";
import { autoInjectable, singleton } from "tsyringe";
import Responder from "../../../utils/responder/Responder";
import AccountValidator from "../validator/AccountValidator";
import AccountService from "../service/AccountService";
import SecurityTools from "../../../utils/security/SecurityTools";

import {
  IAccountSignInDTO,
  IAccountSignUpDTO,
  IAccountUpdateDTO,
  IPasswordResetDTO,
} from "../entity";

@singleton()
@autoInjectable()
export default class AccountController {
  constructor(
    private validator: AccountValidator,
    private Responder: Responder,
    private AccountSevice: AccountService,
    private authTools: SecurityTools
  ) {}

  // [POST]  /api/v1/account/signup
  public POST_SIGNUP = async (
    req: Request<{}, {}, IAccountSignUpDTO>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      //vañlidate data is complete and in the right format
      await this.validator.ValidateSignUpData(req.body);

      //create the account
      const newAccount = await this.AccountSevice.SinUp(req.body);
      //send response

      this.Responder.Created(res, newAccount, newAccount._id!, "api/v1/signin");
    } catch (error) {
      //proceed to error handleling midleware
      next(error);
    }
  };

  //  [POST] /api/v1/account/signin
  public POST_SIGNIN = async (
    req: Request<{}, {}, IAccountSignInDTO>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      //vañlidate data is complete and in the right format
      const credentials = req.body;
      await this.validator.ValidateSignInData(credentials);

      //sign in the customer
      await this.AccountSevice.SinIn(credentials, res);

      //send response
      return this.Responder.Success(res);
    } catch (error) {
      //proceed to error handleling midleware
      next(error);
    }
  };

  // [GET] /api/v1/account/signout
  public GET_SIGNOUT = async (req: Request, res: Response, next: NextFunction) => {
    try {
      //sign out the customer
      await this.AccountSevice.SinOut(res);

      //send response
      this.Responder.Success(res);
    } catch (error) {
      //proceed to error handleling midleware
      next(error);
    }
  };

  // [POST]  /api/v1/account/passwordresset
  public POST_PASSWORD_RESSET = async (
    req: Request<{}, {}, IPasswordResetDTO>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      //validate data
      await this.validator.ValidatePasswordResetData(req.body);

      const accountInfo = await this.authTools.ExtractInfoFromToken(req.cookies.AuthToken);

      //update the password
      await this.AccountSevice.ResetPassword(accountInfo.id, req.body, res);
      //send response
      this.Responder.Success(res);
    } catch (error) {
      //proceed to error handleling midleware
      next(error);
    }
  };

  //¨[PUT]  /api/v1/account/update
  public PUT_UPDATE_ACCOUNT = async (
    req: Request<{}, {}, IAccountUpdateDTO>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      //get customer token
      const token: string = req.cookies.AuthToken;
      //validate info
      await this.validator.AccountUpdateData(req.body);
      //update account
      await this.AccountSevice.update(token, req.body);
      //send response
      this.Responder.Success(res);
    } catch (error) {
      //proceed to error handleling midleware
      next(error);
    }
  };
}
