import { Request, Response } from "express";
import Genre from "models/movie/Genre";
import Movie from "models/movie/Movie";
import { Sport } from "models/sports/Sport";
import { SportsEvents } from "models/sports/SportsEvents";
import { Tournament } from "models/sports/Tournaments";
import Channel from "models/tv/Channels";
import TvGenre from "models/tv/TvGenre";
import TvShow from "models/tv/TvShow";
import TvShowSeason from "models/tv/TvShowSeason";
const search = async (req: Request, res: Response) => {
  try {
    const search = req.params.search;
    const regEx = new RegExp(search, "i");

    const genre = await Genre.find({ genre: regEx });
    const movie = await Movie.find({
      $or: [
        { movieName: regEx },
        { releaseYear: regEx },
        { description: regEx },
        { genre: { $in: genre } },
        { language: regEx },
      ],
    });
    const sport = await Sport.find({ sport: regEx });
    const tournament = await Tournament.find({ tournament: regEx });
    const sportEvent = await SportsEvents.find({
      $or: [
        { sport: { $in: sport } },
        { team: regEx },
        { teams: regEx },
        { tournament: { $in: tournament } },
        { year: regEx },
        { title: regEx },
        { description: regEx },
        { event: regEx },
      ],
    });
    const channel = await Channel.find({ channelName: regEx });

    const tvGenre = await TvGenre.find({ genre: regEx });
    const tvShowSeason = await TvShowSeason.find({ season: regEx });
    const tvShow = await TvShow.find({
      $or: [
        { tvShowName: regEx },
        { language: regEx },
        { releaseYear: regEx },
        { tvGenre: { $in: tvGenre } },
        { showDescription: regEx },
        { seasons: { $in: tvShowSeason } },
      ],
    });

    return res.json({
      message: [movie, sportEvent],
    });
  } catch (error) {
    return res.json({
      message: "error occured",
    });
  }
};
export default {
  search,
};
