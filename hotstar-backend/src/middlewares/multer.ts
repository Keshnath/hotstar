import multer, { FileFilterCallback, Multer } from "multer";
import { Request } from "express";

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let destination = "src/assets/";

    if (file.mimetype.startsWith("image/")) {
      if (file.fieldname === "moviePoster") destination += "movie/moviePoster";
      else if (file.fieldname === "profilePicture") destination += "profiles";
      else if (file.fieldname === "movieLogo") destination += "movie/movieLogo";
      else if (file.fieldname === "sportPoster")
        destination += "sport/sportPoster";
      else if (file.fieldname === "eventPoster")
        destination += "sport/eventPoster";
      else if (file.fieldname === "tournamentPoster")
        destination += "sport/tournamentPoster";
      else if (file.fieldname === "episodePoster")
        destination += "tv/episodePoster";
      else if (file.fieldname === "channelPoster")
        destination += "tv/channelPoster";
      else if (file.fieldname === "tvShowPoster")
        destination += "tv/tvShowPoster";
    }
    if (file.mimetype.startsWith("video/")) {
      if (file.fieldname === "trailer") destination += "movie/trailer";
      else if (file.fieldname === "movie") destination += "movie/movie";
      else if (file.fieldname === "episodeVideo") destination += "tv/episode";
      else if (file.fieldname === "episodeVideo") destination += "tv/episode";
      else if (file.fieldname === "tvShowtrailer")
        destination += "tv/tvShowtrailer";
      else destination += "sport/video";
    }
    cb(null, destination);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname.trim());
  },
});
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  // Allow only image and video mimetypes
  if (
    file.mimetype.startsWith("image/") ||
    file.mimetype.startsWith("video/")
  ) {
    cb(null, true); // Accept the file
  } else {
    cb(null, false); // Reject the file
  }
};

// const upload =  multer({ storage: fileStorage, fileFilter: fileFilter })
const upload = multer({ storage: fileStorage, fileFilter: fileFilter });

export default upload;
