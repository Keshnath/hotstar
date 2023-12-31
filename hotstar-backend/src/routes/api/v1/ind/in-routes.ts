import { Response, Router } from "express";
import homeRoutes from "./home/home-routes";
import userSpaceRoutes from "./user-space/user-space-routes";
import exploreRoutes from "./explore/explore-routes";
import showsRoutes from "./shows/shows-routes";
import moviesRoutes from "./movies/movies-routes";
import sportsRoutes from "./sports/sports-routes";
import superAdminRoutes from "./super-admin/super-admin-routes";
import { isAuth } from "middlewares/is-auth";
import carouselRoutes from "./carousel/carousel-routes";

const inRoutes = Router();

inRoutes.use("/my-space",userSpaceRoutes);
inRoutes.use("/explore", exploreRoutes);
inRoutes.use("/home", homeRoutes);
inRoutes.use("/tv", showsRoutes);
inRoutes.use("/movies", moviesRoutes);
inRoutes.use("/sports", sportsRoutes);
inRoutes.use("/super-admin", superAdminRoutes);
inRoutes.use("/carousel", carouselRoutes);

export default inRoutes;
