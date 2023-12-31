export interface ISports {
    sports: ISport[];
    tournaments: ITournament[];
    events: ISportEvent[];
  }
  export interface ISport {
    _id : string,
    sport : string,
    sportPoster : string
  }
  export interface ISportEvent {
    _id : string,
    sport : ISport,
    team? : string,
    teams? : [string],
    tournament : ITournament
    year : number,
    title : string,
    description : string,
    video : string,
    views : number,
    eventPoster : string,
    event : string
  } 
  export interface ITournament {
    _id : string,
    sport : string,
    tournament : string,
    tournamentPoster : string
  }

  declare global {
    interface Window {
      paypal: any; // You can use 'any' if you don't have specific type information for the PayPal SDK
    }
  }
