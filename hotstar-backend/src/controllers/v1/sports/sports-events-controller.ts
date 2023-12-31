import { ITournament, Tournament } from "models/sports/Tournaments";
import { Sport } from "models/sports/Sport";
import { SportsEvents, ISportEvent } from "models/sports/SportsEvents";
import { Request, Response } from "express";
import fs from "fs";
const addSportEvent = async (req: Request, res: Response) => {
  try {
    const sportEventData: ISportEvent = req.body;
    const sportEvent = new SportsEvents(sportEventData);
    const tournament: ITournament | null = await Tournament.findOne({
      tournament: sportEventData.tournament,
    });
    const eventPosterPath: string[] =
      req.files && "eventPoster" in req.files
        ? req.files["eventPoster"].map((file) => file.path)
        : [];
    const videoPath: string[] =
      req.files && "video" in req.files
        ? req.files["video"].map((file) => file.path)
        : [];
    sportEvent.video = videoPath[0];
    sportEvent.eventPoster = eventPosterPath[0];
    if (tournament) {
      sportEvent.tournament = tournament._id;
      sportEvent.sport = tournament.sport;
    }
    await sportEvent.save();
    return res.json({
      message: "event created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "error occured",
    });
  }
};

const getTournamentEvents = async (req: Request, res: Response) => {
  try {
    const tournament = await Tournament.findOne({
      tournament: req.params.tournament,
    });
    const sport = await Sport.findOne({
      sport: req.params.sport,
    });

    if (!tournament) {
      return res.json({
        message: "please provide valid tournament",
      });
    } else {
      const tournamentActivities = await SportsEvents.find({
        tournament: tournament._id,
        sport: sport?._id,
      })
        .populate({ path: "tournament", select: "tournament" })
        .populate({ path: "sport", select: "sport" });
      if (tournamentActivities.length === 0)
        return res.json({ message: "not data found" });
      else
        return res.json({
          message: tournamentActivities,
        });
    }
  } catch (error) {
    return res.status(500).json({
      message: "error occured",
    });
  }
};
const getSport = async (req: Request, res: Response) => {
  try {
    const sport = await Sport.findOne({ sport: req.params.sport });
    if (!sport) {
      return res.json({
        message: "sport not exist",
      });
    } else {
      const sportData = await SportsEvents.find({ sport: sport._id });
      return res.json({
        message: sportData,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "error occured",
    });
  }
};
const watchSport = async (req: Request, res: Response) => {
  try {
    const sportId: string = req.params.sportId;

    const isSport: ISportEvent | null = await SportsEvents.findById(sportId);
    if (!isSport) {
      return res.json({
        message: "not found",
      });
    } else {
      const sportPath: string | undefined = isSport?.video;
      const videoSize: number = fs.statSync(sportPath as string).size;
      const range = req.headers.range;
      console.log(videoSize, range);
      if (!range) {
        const Header = {
          "Content-Length": videoSize,
          "Content-Type": "video/mp4",
        };
        res.writeHead(206, Header);
        const videoStream = fs.createReadStream(sportPath as string);
        videoStream.pipe(res);
      } else {
        const CHUNK_SIZE = 10000;
        const rangeData = range.replace(/bytes=/, "").split("-");
        const start = parseInt(rangeData[0], 10);
        const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
        const contentLength: number = end - start + 1;
        const Header = {
          "Content-Range": `bytes ${start}-${end} / ${videoSize}`,
          "Accept-Range": "bytes",
          "Content-Length": contentLength,
          "Content-type": "video/mp4",
        };
        res.writeHead(206, Header);
        const videoStream = fs.createReadStream(sportPath as string, {
          start,
          end,
        });
        videoStream.pipe(res);
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: "error occured",
    });
  }
};
const getSportEventDetails = async (req: Request, res: Response) => {
  try {
    const sportId: string = req.params.sportId;
    const isSport: ISportEvent | null = await SportsEvents.findById(sportId);
    if (!isSport) {
      return res.json({
        message: "not found",
      });
    } else {
      return res.json({
        sportDetail: isSport,
      });
    }
  } catch (error) {
    return res.json({
      message: "error occured",
    });
  }
};
export default {
  addSportEvent,
  getTournamentEvents,
  getSport,
  watchSport,
  getSportEventDetails,
};
