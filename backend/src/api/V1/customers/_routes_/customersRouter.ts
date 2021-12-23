import "reflect-metadata";
import { container } from "tsyringe";
import { Router } from "express";
import CustomerComtroller from "../controller/CustomersController";

const controller = container.resolve(CustomerComtroller);

const CustomersRouter: Router = Router();
//[GET] /api/v1/customers
CustomersRouter.get("/", controller.GET_CUSTOMERS);
//[POST] /api/v1/customers
CustomersRouter.post("/", controller.POST_CUSTOMER);
//[PUT] /api/v1/customers/:id
CustomersRouter.put("/:id", controller.UPDATE_CUSTOMER);
//[DELETE] /api/v1/customers/:id
CustomersRouter.delete("/:id", controller.DELETE_CUSTOMER);
//[POST] /api/v1/customers/interactions/:cid
CustomersRouter.post("/interactions/:cid", controller.POST_INTERACTION);
//[DELETE] /api/v1/customers/interactions/:cid
CustomersRouter.delete("/interactions/:cid", controller.DELETE_INTERACTION);

export default CustomersRouter;
