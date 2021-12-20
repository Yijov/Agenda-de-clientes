import "reflect-metadata";
import { container } from "tsyringe";
import App from "./app/App";
import MongoDatabase from "./database/MongoDB/MongoDatabase";

//injection container set up

container.register("Database", { useClass: MongoDatabase });

//starting the server
const application = container.resolve(App);
application.start();
