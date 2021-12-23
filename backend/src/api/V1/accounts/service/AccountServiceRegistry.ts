// register all the dependency injection clases  of the AccountService class

import MongoRepository from "../repository/mongodb_repository/MongoRepository";
const accountServiceRegistry = [{ token: "AccountRepository", useClass: MongoRepository }];

export default accountServiceRegistry;
