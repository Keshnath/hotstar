import { Request, Response } from "express";
import TvGenre, { ITvGenre } from "models/tv/TvGenre";

const addTvGenre = async (req: Request, res: Response) => {
  try {
    const { genre }: ITvGenre = req.body;
    const isGenre = await TvGenre.findOne({ genre: genre });
    if (isGenre) {
      return res.json({
        message: "Genre already exists",
      });
    } else {
      await TvGenre.create({
        genre,
      });
      return res.json({
        message: "Genre created successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "error occurred",
    });
  }
};
export default {
  addTvGenre,
};
