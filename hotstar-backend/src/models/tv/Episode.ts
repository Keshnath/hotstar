import mongoose, { Schema } from "mongoose";
const EpisodeSchema = new mongoose.Schema(
  {
    episodeName: {
      type: String,
      required: true,
    },
    episodeNumber: {
      type: Number,
      required: true,
    },
    season: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    episodePoster: {
      type: String,
      required: true,
    },
    episodeVideo: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tvShowName: {
      type: String,
      required: true,
    },
    channel: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Episode = mongoose.model("Episode", EpisodeSchema);
export default Episode;
