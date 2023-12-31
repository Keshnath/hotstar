import { Router } from "express";
import inRoutes from "./ind/in-routes";

const v1Routes = Router();

v1Routes.use("/in", inRoutes);

export default v1Routes;
