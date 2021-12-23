// register all the dependency injection clases  of the App class
import MongoDatabase from "../database/MongoDB/MongoDatabase";
export enum DBTokens {
  MongoDB = "MongoDatabase",
  Posgress = "PosgressDatabase",
  MySQL = "MySQLDatabase",
}

export const AppRegistry = [{ token: DBTokens.MongoDB, useClass: MongoDatabase }];
