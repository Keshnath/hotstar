import mongoose from "mongoose";
const { Schema } = mongoose;

const tvShowSeasonSchema = new Schema(
  {
    tvShowName: {
      type: String,
      required: true,
    },
    season: {
      type: String,
      default: 1,
      required: true,
    },
    channel: {
      type: String,
      required: true,
    },
    episodes: {
      type: [Schema.Types.ObjectId],
      ref: "Episode",
    },
  },
  { timestamps: true }
);

const TvShowSeason = mongoose.model("TvShowSeason", tvShowSeasonSchema);
export default TvShowSeason;
