import { Router } from "express";

import V1routes from "../V1/_router_/V1Router";

const MainRouter: Router = Router();

//using /api/v1/
MainRouter.use("/v1", V1routes);

export default MainRouter;
