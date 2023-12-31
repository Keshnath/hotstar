import { Router } from "express";
import sportsEventsController from "controllers/v1/sports/sports-events-controller";
import sportsController from "controllers/v1/sports/sports-controller";
import tournamentsController from "controllers/v1/sports/tournaments-controller";
const sportsRoutes = Router();

sportsRoutes.get(
  "/:sport/:tournament/watch/:sportId",
  sportsEventsController.watchSport
);
sportsRoutes.get(
  "/:sport/:tournament",
  sportsEventsController.getTournamentEvents
);
sportsRoutes.get("/all-sports", sportsController.getAllSports);
sportsRoutes.get("/all-tournaments", tournamentsController.getAllTournaments);
sportsRoutes.get("/:sport", sportsEventsController.getSport);
sportsRoutes.get(
  "/:sport/:tournament/:sportId",
  sportsEventsController.getSportEventDetails
);
export default sportsRoutes;
