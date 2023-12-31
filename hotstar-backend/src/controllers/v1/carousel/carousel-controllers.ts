import { NextFunction, Request, Response } from "express";
import Movie from "models/movie/Movie";
import { Sport } from "models/sports/Sport";
import TvShow from "models/tv/TvShow";

const getTopTen = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const topTen = await Movie.find({}).populate("genre").limit(10);
    return res.status(200).json({
      topTen: topTen,
    });
  } catch (error) {
    console.log(error, "----------> error in finding top 10");
  }
};

const getTopTenSports = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const topTenSports = await Sport.find({}).limit(6);
    return res.status(200).json({
      topTen: topTenSports,
    });
  } catch (error) {
    console.log(error, "----------> error in finding top 10 sports");
  }
};
const getTopTenMovies = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const topTenSports = await Movie.find({}).populate('genre').limit(6);
    return res.status(200).json({
      topTen: topTenSports,
    });
  } catch (error) {
    console.log(error, "----------> error in finding top 10 Movie");
  }
};

const getTopTenTvShows = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const topTenSports = await TvShow.find({}).populate({
      path: "seasons",
      populate: { path: "episodes" },
    })
    .populate("tvGenre").limit(6);
    return res.status(200).json({
      topTen: topTenSports,
    });
  } catch (error) {
    console.log(error, "----------> error in finding top 10 sports");
  }
};

export default {
  getTopTen,
  getTopTenSports,
  getTopTenTvShows,
  getTopTenMovies
};
