import Movie from "models/movie/Movie";
import Genre from "models/movie/Genre";
import { Request, Response, NextFunction } from "express";
import { Imovie } from "./types";
import fs from "fs";
import { GENRE } from "utils/constants";

export const addMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      movieName,
      releaseYear,
      duration,
      ageGroup,
      description,
      genre,
      paid,
      views,
      language,
    }: Imovie = req.body;
    const genreDetails: string[] = genre.split(",");
    const genreIds = await Genre.find({ genre: { $in: genreDetails } });
    const languages: string[] = language.split(",");
    const movieExists = await Movie.findOne({ movieName: movieName });
    if (!movieExists) {
      //any should not be used
      //should give proper response if file is not found
      const file: any = { ...req.files };
      const moviePath = file.movie[0].path;
      const trailerPath = file.trailer[0].path;
      const moviePosterPath = file.moviePoster[0].path;
      const movieLogoPath = file.movieLogo[0].path;
      const movieDetails = await Movie.create({
        movieName,
        releaseYear,
        duration,
        ageGroup,
        description,
        genre: genreIds.map((item) => item._id),
        paid,
        views,
        movie: moviePath,
        trailer: trailerPath,
        moviePoster: moviePosterPath,
        language: languages.map((language) => language),
        movieLogo: movieLogoPath,
      });
      return res.status(200).json({
        msg: "movie added successfully !",
        movieDetails: movieDetails,
      });
    } else {
      return res.status(201).json({
        msg: "movie already exists !",
      });
    }
  } catch (error) {
    console.log("-----------------> error in adding movies ", error);
  }
};

export const getMovieDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movieId: string = req.params.movieId;
    const movieDetails: Imovie | null = await Movie.findById(movieId).populate(
      "genre"
    );
    if (!movieDetails) {
      return res.status(404).json({
        msg: "Movie not present !",
      });
    }
    return res.status(200).json({
      data: movieDetails,
    });
  } catch (error) {
    console.log("error in showing single movie ======> ", error);
  }
};

export const getAllMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
 
    const movieData = await Movie.find({}).populate("genre");  
    const filteredData:any = {};  
    movieData.forEach((movie) => {
      movie.genre.forEach((genre : any) => {
        const genreName: any = genre.genre; 
        if (GENRE.includes(genreName)) {
          if (filteredData.hasOwnProperty(genreName)) {
            filteredData[genreName].push(movie);
          } else {
            filteredData[genreName] = [movie];
          }
        }
      });
    });

    return res.status(200).json({
      msg: "All Movies",
      movies: filteredData,
    });
  } catch (error) {
    console.log("error in getting all Movies", error);
  }
};

export const getMoviesByGenre = async (req: Request, res: Response) => {
  try {
    //type should be given
    console.log(req.userId , "-------------------------???");
    let movies;
    const genre = req.params.genre;
    const limit = 7;
    const page: any = req.query.page;
    const skip: number = (page - 1) * limit;
    const selectedGenre = await Genre.findOne({ genre: genre });
    const data = await Movie.find({ genre: selectedGenre })
      .skip(skip)
      .limit(limit)
      .populate("genre");
    if (data.length < 7) {
      movies = await Movie.find({ genre: selectedGenre })
        .skip(data.length)
        .limit(limit)
        .populate("genre");
    } else {
      movies = data;
    }
    return res.status(200).json({
      movies: movies,
    });
  } catch (error) {
    res.status(500).json({
      message: "error occured",
    });
  }
};

export const watchMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    console.log(req, "->>>>>>>>>>>>>>>....")

    const movieId: string = req.params.movieId;
    const movieDetails: Imovie | null = await Movie.findById(movieId);

    if (!movieDetails) {
      return res.status(404).json({
        msg: "Movie not present !",
      });
    }

    const range = req.headers.range;
    const moviePath: string | undefined = movieDetails?.movie;
    const videoSize: number = fs.statSync(moviePath as string).size;
    console.log(range, videoSize, req.headers);
    if (!range) {
      const Header = {
        "Content-Length": videoSize,
        "Content-type": "video/mp4",
      };
      res.writeHead(200, Header);
      const videoStream = fs.createReadStream(moviePath as string);
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
      const videoStream = fs.createReadStream(moviePath as string, {
        start,
        end,
      });
      videoStream.pipe(res);

      //     const parts = range.replace(/bytes=/, '').split('-')
      //       const start = parseInt(parts[0], 10);
      //       // const end = parts[1] ? parseInt(parts[1], 10) : videoSize - 1;
      // const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
      //       const chunksize = end - start + 1;
      //       const file = fs.createReadStream(moviePath as string, {start, end});
      //       const head = {
      //           'Content-Range': `bytes ${start}-${end}/${videoSize}`,
      //           'Accept-Ranges': 'bytes',
      //           'Content-Length': chunksize,
      //           'Content-Type': 'video/mp4'
      //       };
      //       res.writeHead(206, head);
      //       file.pipe(res);
    }
  } catch (error) {
    console.log(error, "---------------> error in video preview !!");
  }
};
