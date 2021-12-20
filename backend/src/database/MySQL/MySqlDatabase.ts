import { injectable } from "tsyringe";
import IDataBase from "../IDataBase";

@injectable()
export default class MySQLDatabase implements IDataBase {
  constructor() {}
  public Connect = async () => {
    console.log("Mock Connected to MySQL");
  };
}
