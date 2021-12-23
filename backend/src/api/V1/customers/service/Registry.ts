import MongoRepository from "../repository/mongodb_repository/repository/MongoCustmerRepository";

export enum repotoken {
  MongoDB = "MongoDBRepository",
}
export const CustomerServiceRegistry = [{ token: repotoken.MongoDB, useClass: MongoRepository }];
