import { Router } from "express";
import AcountRoutes from "../account/_routes_/AccountRouter";

const V1router: Router = Router();
//authentication  api/v1/auth
V1router.use("/account", AcountRoutes);

//routine management  api/v1/routine
V1router.use("/routine", AcountRoutes);

export default V1router;
