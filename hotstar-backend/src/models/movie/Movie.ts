import mongoose, { Schema } from "mongoose";
const movieSchema = new mongoose.Schema(
  {
    movieName: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    ageGroup: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    genre: {
      type: [Schema.Types.ObjectId],
      ref: "Genre",
    },
    paid: {
      type: Boolean,
      required: true,
    },
    views: {
      type: Number,
    },
    movie: {
      type: String,
      required: true,
    },
    trailer: {
      type: String,
      required: true,
    },
    moviePoster: {
      type: String,
      required: true,
    },
    movieLogo: {
      type: String,
      required: true,
    },
    language: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
