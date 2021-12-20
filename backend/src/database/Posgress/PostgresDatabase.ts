import { injectable } from "tsyringe";
import IDataBase from "../IDataBase";

@injectable()
export default class PosgresDatabase implements IDataBase {
  constructor() {}
  public Connect = async () => {
    console.log("Mock Connected to Posgress ");
  };
}
