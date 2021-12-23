import "reflect-metadata";
import { container } from "tsyringe";
import { Router } from "express";
import SecurityTools from "../../../utils/security/SecurityTools";
import AccountController from "../controller/AccountController";

const controller = container.resolve(AccountController);

const AccountsRouter: Router = Router();

AccountsRouter.post("/signup", controller.POST_SIGNUP);
AccountsRouter.post("/signin", controller.POST_SIGNIN);
AccountsRouter.post("/pw/reset", SecurityTools.AUTH, controller.POST_PASSWORD_RESSET);
AccountsRouter.get("/signout", controller.GET_SIGNOUT);

export default AccountsRouter;
