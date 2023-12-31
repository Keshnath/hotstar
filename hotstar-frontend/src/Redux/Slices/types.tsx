import { ISport, ISportEvent } from "../../types/sportsTypes";

export interface CardState {
  cardToggle: boolean;
}

export interface Genre {
  genre: string;
  __v: number;
  _id: string;
}
export interface Movie {
  movieName: string;
  releaseYear: string;
  duration: number;
  ageGroup: number;
  description: string;
  genre: Genre[];
  paid: boolean;
  views?: number | undefined;
  movie?: string;
  trailer: string;
  moviePoster: string;
  _id: string;
  language: string;
  movieLogo : string;
}
export interface TVShows{
  _id : string
  tvShowName:string;
  channel:string;
  tvShowtrailer:string;
  tvShowPoster:string;
  language:string;
  ageGroup:number;
  releaseYear:string;
  tvGenre:Genre[];
  showDescription:string;
  
  seasons:[{
    episodes:[{
      episodeName: string;
      episodeNumber: number;
      season: number;
      duration: number;
    }]
  }]
}
export interface Imovies {
  movies: Movie[];
}

export interface ItopTen {
  topTenOfToday : Movie[] | TVShows[] 
}

export interface ITv{
  tv:TVShows[]
}
export interface IExplore {
  data : [
    Movie[],
    ISportEvent[]
  ]
}
