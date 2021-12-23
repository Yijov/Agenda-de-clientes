import env from "dotenv";
env.config();
import AppConfig from "./AppConfig";
import IDataBase from "../database/IDataBase";
import { inject, registry, singleton } from "tsyringe";
import { AppRegistry, DBTokens } from "./AppRegistry";

@singleton()
@registry(AppRegistry) // register all the injection dependencies of this class
export default class App extends AppConfig {
  constructor(@inject(DBTokens.MongoDB) private database: IDataBase) {
    super();
  }

  public get App() {
    return this.app;
  }
  public start = async () => {
    await this.database.Connect();
    this.app.listen(process.env.PORT, () => {
      console.log(`Application running on port ${process.env.PORT}`);
    });
  };
}
