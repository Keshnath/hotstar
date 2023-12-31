import carouselControllers from "controllers/v1/carousel/carousel-controllers";
import { Router } from "express";
const carouselRoutes = Router();

carouselRoutes.get("/top-ten", carouselControllers.getTopTen);
carouselRoutes.get("/top-ten-sports", carouselControllers.getTopTenSports);
carouselRoutes.get("/top-ten-shows", carouselControllers.getTopTenTvShows);
carouselRoutes.get("/top-ten-movies", carouselControllers.getTopTenMovies);

export default carouselRoutes;
