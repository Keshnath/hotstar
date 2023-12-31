import { ISport, ISportEvent, ITournament } from "../../../types/sportsTypes";
export interface ICarousel {
    item :  ISport[] | ISportEvent[] | ITournament[]
    component : React.ComponentType<any>,
    tag : string
}