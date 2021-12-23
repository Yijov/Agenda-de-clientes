import "reflect-metadata";
import { container } from "tsyringe";
import App from "../app/App";

//setting up the server
const application = container.resolve(App);

export default application;
