import { Router } from "express";
import AccountsRouter from "../accounts/_routes_/AccountRouter";
import CustomersRouter from "../customers/_routes_/customersRouter";
import SecurityTools from "../../utils/security/SecurityTools";

const V1router: Router = Router();
//authentication  api/v1/accounts
V1router.use("/account", AccountsRouter);

//customers  api/v1/customers
//only auth users
V1router.use("/customers", SecurityTools.AUTH, CustomersRouter);

export default V1router;
