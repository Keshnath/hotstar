import {
  getMoviesByGenre,
  getMovieDetails,
  watchMovie,
  getAllMovies,
} from "controllers/v1/movie/movie-controller";

import { Router } from "express";
import { isAuth } from "middlewares/is-auth";
const moviesRoutes = Router();

moviesRoutes.get("/", getAllMovies);
moviesRoutes.get("/:movieName/:movieId", getMovieDetails);
moviesRoutes.get("/:movieName/:movieId/watch",watchMovie);
moviesRoutes.get("/:genre",getMoviesByGenre);

export default moviesRoutes;
