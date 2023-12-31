import explore from "controllers/v1/explore/explore";
import { Router } from "express";

const exploreRoutes = Router();

exploreRoutes.get("/:search", explore.search);

export default exploreRoutes;
