import tvShowsControllers from "controllers/v1/tv/tv-shows-controllers";
import { Router } from "express";
import channelController from "controllers/v1/tv/channel-controller";
const showsRoutes = Router();

showsRoutes.get("/shows", tvShowsControllers.getTvShows);
showsRoutes.get("/all-channels", channelController.getAllChannels);
showsRoutes.get("/:showName/:showId/watch", tvShowsControllers.watchShow);
showsRoutes.get('/shows/:channelName',tvShowsControllers.getTvShowByChannel)

export default showsRoutes;
