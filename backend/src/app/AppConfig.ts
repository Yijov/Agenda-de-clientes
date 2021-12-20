import env from "dotenv";
env.config();
import express, { Express } from "express";
import MainRouter from "../api/router/MainRouter";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import ErrorHandler from "../error_handler/ErrorHandler";

export default class AppConfig {
  protected app: Express = express();
  protected corsOrigin: string = process.env.CORS_ORIGIN!!!;
  constructor() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(helmet());
    this.app.use(morgan("dev"));
    this.app.use(cors({ origin: this.corsOrigin, credentials: true }));
    this.app.use(cookieParser());
    this.app.use("/api", MainRouter);
    this.app.use("*", ErrorHandler.NotFoundRouteHandler);
    this.app.use(ErrorHandler.ExeptionHandler);
  }
}
