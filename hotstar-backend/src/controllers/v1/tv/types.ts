import mongoose from "mongoose";

export interface Iepisode {
  episodeName: string;
  episodeNumber: number;
  season: number;
  duration: number;
  description: string;
  tvShowName: string;
  channel: string;
  episodePoster?: string;
  episodeVideo?: string;
}
export interface IshowSeason {
  tvShowName: string;
  season: number;
  channel: string;
  episodes?: string[];
}
export interface ItvShow {
  tvShowName: string;
  channel: string;
  tvShowtrailer: string;
  tvShowPoster: string;
  language: string;
  ageGroup: number;
  releaseYear: string;
  tvGenre: string;
  showDescription: string;
  seasons?: string[];
}
