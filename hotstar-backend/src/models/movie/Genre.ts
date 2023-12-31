import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
  genre: {
    type: String,
    required: true,
  },
});
const Genre = mongoose.model("Genre", genreSchema);
export default Genre;
