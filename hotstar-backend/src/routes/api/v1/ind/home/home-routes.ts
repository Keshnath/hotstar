import { Router } from "express";
const homeRoutes = Router();

homeRoutes.get("/", (req, res, next) => {
  console.log("home");
});

export default homeRoutes;
