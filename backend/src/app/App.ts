import env from "dotenv";
env.config();
import AppConfig from "./AppConfig";
import IDataBase from "../database/IDataBase";
import { inject, singleton } from "tsyringe";

@singleton()
export default class App extends AppConfig {
  constructor(@inject("Database") private database: IDataBase) {
    super();
  }

  public start = async () => {
    await this.database.Connect();
    this.app.listen(process.env.PORT, () => {
      console.log(`Application running on port ${process.env.PORT}`);
    });
  };
}
