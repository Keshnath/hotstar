import { Tournament, ITournament } from "models/sports/Tournaments";
import { Request, Response } from "express";
import { Sport } from "models/sports/Sport";
const addTournament = async (req: Request, res: Response) => {
  try {
    const tournamentData: ITournament = req.body;
    const tournament = new Tournament(tournamentData);
    const isTournament = await Tournament.findOne({
      tournament: tournamentData.tournament,
    });
    if (isTournament) {
      return res.json({
        message: "Tournament already created",
      });
    } else {
      const sport = await Sport.findOne({ sport: tournamentData.sport });
      if (sport) tournament.sport = sport._id;

      if (req.file) tournament.tournamentPoster = req.file.path;
      await tournament.save();
      return res.status(200).json({
        message: "Tournament created successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
const getAllTournaments = async (req: Request, res: Response) => {
  try {
    const allTournaments = await Tournament.find();
    return res.json({
      message: allTournaments,
    });
  } catch (error) {
    return res.status(500).json({
      message: "error occured",
    });
  }
};
export default {
  addTournament,
  getAllTournaments,
};
