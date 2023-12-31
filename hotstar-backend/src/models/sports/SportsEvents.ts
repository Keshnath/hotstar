import mongoose, { Schema } from "mongoose";

export interface ISportEvent {
  sport: mongoose.Types.ObjectId;
  team?: string;
  teams?: [string];
  tournament: mongoose.Types.ObjectId;
  year: string;
  title: string;
  description: string;
  video: string;
  views: number;
  eventPoster: string;
  event: string;
}
const sportsEventsSchema = new mongoose.Schema({
  sport: {
    type: Schema.Types.ObjectId,
    ref: "Sport",
  },
  team: {
    type: String,
  },
  teams: {
    type: [String],
  },
  tournament: {
    type: Schema.Types.ObjectId,
    ref: "Tournament",
  },
  year: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  event: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  views: {
    type: Number,
    required: true,
  },
  eventPoster: {
    type: String,
    required: true,
  },
});

export const SportsEvents = mongoose.model<ISportEvent>(
  "SportEvent",
  sportsEventsSchema
);
