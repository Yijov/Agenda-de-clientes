import { Request, Response, NextFunction } from "express";
import { injectable } from "tsyringe";
import SecurityTools from "../../../utils/security/SecurityTools";
import CustomerService from "../service/CustomerService";
import { ICustomer, IInteraction } from "../entity";
import IUpdateCustomerDTO from "../entity/IUpdateCustomerDTO";
import Responder from "../../../utils/responder/Responder";
import CustomerValidator from "../validator/customerValidator";

@injectable()
export default class CustomerComtroller {
  constructor(
    private service: CustomerService,
    private auth: SecurityTools,
    private response: Responder,
    private validator: CustomerValidator
  ) {}
  //[GET] /api/v1/customers
  public GET_CUSTOMERS = async (
    req: Request<{}, {}, ICustomer>,
    res: Response,
    next: NextFunction
  ) => {
    const accountInfo = await this.auth.ExtractInfoFromToken(req.cookies.AuthToken);
    try {
      const customers = await this.service.GetAll(accountInfo.id);
      this.response.Success(res, customers);
    } catch (error) {
      next(error);
    }
  };

  //[POST] /api/v1/customers
  public POST_CUSTOMER = async (
    req: Request<{}, {}, ICustomer>,
    res: Response,
    next: NextFunction
  ) => {
    //add owner account ID to the document body
    const accountInfo = await this.auth.ExtractInfoFromToken(req.cookies.AuthToken);
    const customerTuAdd = { ...req.body, userAccountId: accountInfo.id };
    try {
      this.validator.validateCustomerCreate(customerTuAdd);
      const customer = await this.service.AddOne(customerTuAdd);
      this.response.Success(res, customer);
    } catch (error) {
      next(error);
    }
  };

  //[DELETE] /api/v1/customers/:id
  public DELETE_CUSTOMER = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.service.DeleteOne(req.params.id);
      this.response.Success(res);
    } catch (error) {
      next(error);
    }
  };

  //[PUT] /api/v1/customers/:id
  public UPDATE_CUSTOMER = async (
    req: Request<{}, {}, IUpdateCustomerDTO>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      this.validator.ValidateCustomerUpdate(req.body);
      const customer = await this.service.UpdateOne(req.body);
      this.response.Success(res, customer);
    } catch (error) {
      next(error);
    }
  };

  //[POST] /api/v1/customers/interactions:cid
  public POST_INTERACTION = async (
    req: Request<{ cid: string }, {}, IInteraction>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      this.validator.interactionCreate(req.body);
      const customer = await this.service.AddInteraction(req.body, req.params.cid);
      this.response.Success(res, customer);
    } catch (error) {
      next(error);
    }
  };

  //[DELETE] /api/v1/customers/interactions/:cid
  public DELETE_INTERACTION = async (
    req: Request<{ cid: string }, {}, { interactionID: string }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      await this.service.DeleteInteraction(req.body.interactionID, req.params.cid);
      this.response.Success(res);
    } catch (error) {
      next(error);
    }
  };
}
