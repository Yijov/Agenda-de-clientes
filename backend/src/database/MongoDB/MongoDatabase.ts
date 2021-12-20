require("dotenv").config();
import { injectable, singleton } from "tsyringe";
import mongoose from "mongoose";
import IDataBase from "../IDataBase";

@injectable()
@singleton()
export default class MongoDatabase implements IDataBase {
  private Mongo_URI: string | undefined = process.env.MONGO_URI;
  constructor() {}
  public Connect = async () => {
    mongoose
      .connect(this.Mongo_URI!!!)
      .then(() => console.log("conected to mongoDB..."))
      .catch((error: Error) =>
        console.log("Failed to connect to DB..." + error.message)
      );
  };
}
