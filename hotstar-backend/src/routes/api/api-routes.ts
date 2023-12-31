import { Router } from "express";
import v1Routes from "./v1/v1-routes";
const apiRoutes = Router();

apiRoutes.use("/v1", v1Routes);

export default apiRoutes;
