import { Sport, ISport } from "models/sports/Sport";
import { Request, Response } from "express";
const addSport = async (req: Request, res: Response) => {
  try {
    const sportData: ISport = req.body;
    const sport = new Sport(sportData);
    const isSport: ISport | null = await Sport.findOne({
      sport: sportData.sport,
    });
    if (isSport) {
      return res.json({
        message: "Sport already exist",
      });
    } else {
      if (req.file) {
        sport.sportPoster = req.file.path;
      } else {
        return res.json({
          message: "files should be provided",
        });
      }
      await sport.save();
      return res.json({
        message: "Sport added successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "error occured",
    });
  }
};
const getAllSports = async (req: Request, res: Response) => {
  try {
    const allSports = await Sport.find();
    return res.json({
      message: allSports,
    });
  } catch (error) {
    return res.status(500).json({
      message: "error occured",
    });
  }
};
export default {
  addSport,
  getAllSports,
};
