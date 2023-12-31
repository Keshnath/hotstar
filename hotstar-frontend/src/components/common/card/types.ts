export interface ICard {
  image: string;
  title?: string | null;
  description?: string | null;
  duration?: string | null | number;
}
export interface ISport {
  sport: string;
  sportPoster: string;
}

export interface ISportEvent {
  sport: string;
  team?: string;
  teams?: [string];
  tournament: string;
  year: number;
  title: string;
  description: string;
  video: string;
  views: number;
  eventPoster: string;
  event: string;
}
export interface ITournament {
  sport: string;
  tournament: string;
  tournamentPoster: string;
}
