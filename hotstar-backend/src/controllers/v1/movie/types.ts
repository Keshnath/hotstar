export interface Imovie {
  movieName: string;
  releaseYear: string;
  duration: number;
  ageGroup: number;
  description: string;
  genre: string
  paid: boolean;
  views?: number | undefined;
  movie?: string;
  trailer?: string;
  moviePoster?: string;
  movieLogo?:string,
  language : string
}
