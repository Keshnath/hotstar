import { NextFunction, Request, Response, Express } from "express";
import { Iepisode, IshowSeason, ItvShow } from "./types";
import Episode from "models/tv/Episode";
import TvShowSeason from "models/tv/TvShowSeason";
import TvShow from "models/tv/TvShow";
import { ReferSip } from "twilio/lib/twiml/VoiceResponse";
import TvGenre from "models/tv/TvGenre";
import fs from "fs";
import { INDIAN_TV_CHANNELS_LIST } from "utils/constants";

const addTvShowEpisode = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const episodeData: Iepisode = req.body;
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const episodePosterPath = files["episodePoster"][0].path;
    const episodeVideoPath = files["episodeVideo"][0].path;
    episodeData.episodePoster = episodePosterPath;
    episodeData.episodeVideo = episodeVideoPath;
    const episode = await Episode.create(episodeData);
    return res.status(200).json({
      msg: "episode Added successfully !",
      episode: episode,
    });
  } catch (error) {
    console.log("error in adding episode !", error);
  }
};

const addSeasonAndEpisodes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const seasonData: IshowSeason = req.body;
    const isSeason = await TvShowSeason.findOne(seasonData);
    let season;
    if (!isSeason) {
      const episodesInthisSeason = await Episode.find(seasonData);
      if (episodesInthisSeason.length > 0) {
        seasonData.episodes = episodesInthisSeason.map((episode) =>
          episode._id.toString()
        );
        season = await TvShowSeason.create(seasonData);
      } else {
        return res.status(201).json({
          msg: "Add episodes corresponding to this season !",
        });
      }
    } else {
      const seasonId = isSeason._id;
      const episodesInthisSeason = await Episode.find(seasonData);
      // console.log(episodesInthisSeason)
      seasonData.episodes = episodesInthisSeason.map((episode) =>
        episode._id.toString()
      );
      season = await TvShowSeason.findByIdAndUpdate(seasonId, seasonData);
    }
    return res.status(200).json({
      mag: "season and episodes added !",
      season: season,
    });
  } catch (error) {
    console.log("error in adding seasons", error);
  }
};

const addTvShow = async (req: Request, res: Response, next: NextFunction) => {
  const tvShowData: ItvShow = req.body;
  const files = req.files as { [fieldName: string]: Express.Multer.File[] };
  const tvShowtrailerPath = files["tvShowtrailer"][0].path;
  const tvShowPosterPath = files["tvShowPoster"][0].path;
  const tvShowName = tvShowData.tvShowName;
  const isTvShow = await TvShow.findOne({ tvShowName });
  const seasons = await TvShowSeason.find({ tvShowName });
  if (isTvShow && seasons.length > 0) {
    const tvShowId = isTvShow._id;
    tvShowData.seasons = seasons.map((item) => item._id.toString());
    tvShowData.tvShowPoster = tvShowPosterPath;
    tvShowData.tvShowtrailer = tvShowtrailerPath;
    const tvShow = await TvShow.findByIdAndUpdate(tvShowId, tvShowData);
    return res.status(200).json({
      msg: "TV show updated !",
      tvShow: tvShow,
    });
  } else if (!isTvShow && seasons.length > 0) {
    const tvShowGenre = req.body.tvGenre.split(",");
    const genreIds = await TvGenre.find({ genre: { $in: tvShowGenre } });

    tvShowData.tvShowPoster = tvShowPosterPath;
    tvShowData.tvShowtrailer = tvShowtrailerPath;
    const {
      tvShowName,
      channel,
      tvShowtrailer,
      tvShowPoster,
      language,
      ageGroup,
      releaseYear,
      showDescription,
    } = tvShowData;
    const tvShow = await TvShow.create({
      tvShowName,
      channel,
      tvShowtrailer,
      tvShowPoster,
      language,
      ageGroup,
      releaseYear,
      showDescription,
      seasons: seasons.map((item) => item._id.toString()),
      tvGenre: genreIds.map((ids) => ids._id),
    });
    return res.status(200).json({
      msg: "TV show created !",
      tvShow: tvShow,
    });
  } else {
    return res.status(201).json({
      msg: "First add episode and then seasons and then tvShow",
    });
  }
};

const getTvShows = async (req: Request, res: Response, next: NextFunction) => {
  const data = await TvShow.find()
    .populate({
      path: "seasons",
      populate: { path: "episodes" },
    })
    .populate("tvGenre");
  const filteredData: any = {};
  data.forEach((tv) => {
    if (INDIAN_TV_CHANNELS_LIST.includes(tv.channel)) {
      if (filteredData.hasOwnProperty(tv.channel)) {
        filteredData[tv.channel].push(tv);
      } else {
        filteredData[tv.channel] = [tv];
      }
    }
  });

  return res.status(200).json({
    data: filteredData,
  });
};

export const getTvShowByChannel = async (req: Request, res: Response) => {
  try {
    //type should be given
    const channelName = req.params.channelName;
    const limit = 8;
    const page: any = req.query.page;
    const skip: number = (page - 1) * limit;
    const tvShow = await TvShow.find({ channel: channelName })
      .skip(skip)
      .limit(limit)
      .populate({
        path: "seasons",
        populate: { path: "episodes" },
      })
      .populate("tvGenre");
    return res.status(200).json({
      tvShow,
    });
  } catch (error) {
    res.status(500).json({
      message: "error occured",
    });
  }
};

const watchShow = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("here!! at watch ");
    const showId: string = req.params.showId;
    const showDetails: ItvShow | null = await TvShow.findById(showId);

    if (!showDetails) {
      return res.status(404).json({
        msg: "show not present !",
      });
    }

    const range = req.headers.range;
    const showPath: string | undefined = showDetails?.tvShowtrailer;
    const videoSize: number = fs.statSync(showPath as string).size;
    console.log(range, videoSize, req.headers);
    if (!range) {
      const Header = {
        "Content-Length": videoSize,
        "Content-type": "video/mp4",
      };
      res.writeHead(200, Header);
      const videoStream = fs.createReadStream(showPath as string);
      videoStream.pipe(res);
    } else {
      const CHUNK_SIZE = 1000000;
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
      const videoStream = fs.createReadStream(showPath as string, {
        start,
        end,
      });
      videoStream.pipe(res);
    }
  } catch (error) {
    console.log(error, "---------------> error in video preview !!");
  }
};

export default {
  addTvShowEpisode,
  addSeasonAndEpisodes,
  addTvShow,
  getTvShows,
  watchShow,
  getTvShowByChannel,
};
