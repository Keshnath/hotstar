import mongoose, { Schema } from "mongoose";
export interface ITournament {
  _id: mongoose.Types.ObjectId;
  sport: mongoose.Types.ObjectId;
  tournament: string;
  tournamentPoster: string;
}
const tournamentSchema = new mongoose.Schema({
  sport: {
    type: Schema.Types.ObjectId,
    ref: "Sport",
    required: true,
  },
  tournament: {
    type: String,
    required: true,
  },
  tournamentPoster: {
    type: String,
    required: true,
  },
});

export const Tournament = mongoose.model("Tournament", tournamentSchema);
