import { Request, Response, NextFunction } from "express";
import { autoInjectable, singleton } from "tsyringe";
import Responder from "../../../utils/responder/Responder";
import AccountValidator from "../validator/AccountValidator";
import IAccountSignInDTO from "../entity/IAccountSignInDTO";
import IAccountSignUpDTO from "../entity/IAccountSignUpDTO";
import IAccountUpdateDTO from "../entity/IAccountUpdateDTO";
import IPasswordResetDTO from "../entity/PasswordResetDTO";
import AccountService from "../service/AccountService";

@singleton()
@autoInjectable()
export default class AccountController {
  constructor(
    private validator: AccountValidator,
    private Responder: Responder,
    private AccountSevice: AccountService
  ) {}
  // [POST]  /api/v1/account/signup
  public SignUp = async (
    req: Request<{}, {}, IAccountSignUpDTO>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      //vañlidate data is complete and in the right format
      await this.validator.ValidateSignUpData(req.body);
      //create the account
      await this.AccountSevice.SinUp(req.body);
      //send response
      this.Responder.Success(res);
    } catch (error) {
      //proceed to error handleling midleware
      next(error);
    }
  };

  //  [POST] /api/v1/account/signin
  public SignIn = async (
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
  public SignOut = async (req: Request, res: Response, next: NextFunction) => {
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
  public PasswordReset = async (
    req: Request<{}, {}, IPasswordResetDTO>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      //validate data
      this.validator.ValidatePasswordResetData(req.body);

      //update the password
      await this.AccountSevice.ResetPassword(req.body, res);
      //send response
      this.Responder.Success(res);
    } catch (error) {
      //proceed to error handleling midleware
      next(error);
    }
  };
  //¨[PUT]  /api/v1/account/update
  public Update = async (
    req: Request<{}, {}, IAccountUpdateDTO>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      //validate info
      this.validator.AccountUpdateData(req.body);
      //update account
      await this.AccountSevice.update(req.body);
      //send response
      this.Responder.Success(res);
    } catch (error) {
      //proceed to error handleling midleware
      next(error);
    }
  };
}
