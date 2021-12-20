import "reflect-metadata";
import { container } from "tsyringe";
import AccountController from "../controller/AccountController";
import { Router } from "express";
import MongoRepository from "../repository/MongoRepository";

container.register("AccountRepository", { useClass: MongoRepository });
const AccountRoutes = container.resolve(AccountController);

const AccountRouter: Router = Router();

AccountRouter.post("/signup", AccountRoutes.SignUp);
AccountRouter.post("/signin", AccountRoutes.SignIn);
AccountRouter.get("/signout", AccountRoutes.SignOut);

export default AccountRouter;
