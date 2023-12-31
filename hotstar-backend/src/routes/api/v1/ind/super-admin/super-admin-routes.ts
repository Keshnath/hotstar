import { addMovie } from "controllers/v1/movie/movie-controller";
import tournamentsController from "controllers/v1/sports/tournaments-controller";
import sportsController from "controllers/v1/sports/sports-controller";
import sportsEventsController from "controllers/v1/sports/sports-events-controller";
import tvShowsControllers from "controllers/v1/tv/tv-shows-controllers";
import channelController from "controllers/v1/tv/channel-controller";
import {
  channelValidation,
  tvGenreValidation,
} from "validations/tv-validation";
import {
  sportValidation,
  sportEventValidation,
  tournamentValidation,
} from "validations/sport-validation";
import {
  adminLogIn,
  adminRegister,
} from "controllers/v1/super-admin/super-admin-controllers";
import { Router, raw } from "express";
import upload from "middlewares/multer";
import { adminValidation } from "validations/user-validations";
import multer from "multer";
import tvGenreController from "controllers/v1/tv/tv-genre-controller";
import { webhook } from "configs/checkout";
const superAdminRoutes = Router();

superAdminRoutes.post("/register", adminValidation, adminRegister);
superAdminRoutes.post("/log-in", adminLogIn);
superAdminRoutes.post(
  "/add-movie",
  upload.fields([
    { name: "movie", maxCount: 1 },
    { name: "trailer", maxCount: 1 },
    { name: "moviePoster", maxCount: 1 },
    { name: "movieLogo", maxCount: 1 },
  ]),
  addMovie
);
superAdminRoutes.post(
  "/add-tournament",
  upload.single("tournamentPoster"),
  tournamentValidation,
  tournamentsController.addTournament
);
superAdminRoutes.post("/add-show");
superAdminRoutes.post(
  "/add-sport",
  upload.single("sportPoster"),
  sportValidation,
  sportsController.addSport
);
superAdminRoutes.post(
  "/add-sport-event",
  upload.fields([{ name: "video" }, { name: "eventPoster" }]),
  sportEventValidation,
  sportsEventsController.addSportEvent
);
superAdminRoutes.post(
  "/add-channel",
  upload.single("channelPoster"),
  channelValidation,
  channelController.addChannel
);
superAdminRoutes.post(
  "/add-tv-show-episode",
  upload.fields([{ name: "episodePoster" }, { name: "episodeVideo" }]),
  tvShowsControllers.addTvShowEpisode
);
superAdminRoutes.post(
  "/add-tv-genre",
  tvGenreValidation,
  tvGenreController.addTvGenre
);
superAdminRoutes.post(
  "/add-seasons-and-episode",
  tvShowsControllers.addSeasonAndEpisodes
);
superAdminRoutes.post(
  "/add-tv-show",
  upload.fields([{ name: "tvShowtrailer" }, { name: "tvShowPoster" }]),
  tvShowsControllers.addTvShow
);
superAdminRoutes.post("/webhook", raw({ type: "application/json" }), webhook);

export default superAdminRoutes;
