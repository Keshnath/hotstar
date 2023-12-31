import mongoose from "mongoose";
export interface ITvGenre {
  genre: string;
}
const TvGenreSchema = new mongoose.Schema({
  genre: {
    type: String,
    required: true,
  },
});
const TvGenre = mongoose.model("TvGenre", TvGenreSchema);
export default TvGenre;
