import { Router } from "express";
import apiRoutes from "./api/api-routes";

const indexRoutes: Router = Router();

indexRoutes.use("/api", apiRoutes);

export default indexRoutes;
