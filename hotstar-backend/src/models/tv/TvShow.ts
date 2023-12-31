import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;

const tvShowSchema = new Schema({
  tvShowName: {
    type: String,
    required: true,
  },
  channel: {
    type: String,
    required: true,
  },
  tvShowtrailer: {
    type: String,
    required: true,
  },
  tvShowPoster: {
    type: String,
    required: true,
  },
  language: {
    type: String,
  },
  ageGroup: {
    type: Number,
    required: true,
  },
  releaseYear: {
    type: String,
    required: true,
  },
  tvGenre: {
    type: [Schema.Types.ObjectId],
    ref: "TvGenre",
  },
  showDescription: {
    type: String,
    required: true,
  },
  seasons: {
    type: [Schema.Types.ObjectId],
    ref: "TvShowSeason",
  },
});

const TvShow = mongoose.model("TvShows", tvShowSchema);
export default TvShow;
