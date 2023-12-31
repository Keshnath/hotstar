import { useLocation, useNavigate, useParams } from "react-router-dom"
import SportsCard from "../common/card/SportsCard"
import { ISport, ISportEvent, ITournament } from "../../types/sportsTypes"
import React from "react"
const Browse = () => {
    const location  = useLocation()  
    const params = useParams()
    const navigate = useNavigate()    
    const isSport = (
        item: ISport | ISportEvent | ITournament
      ): item is ISport => {
        return (item as ISport).sportPoster !== undefined;
      };
      function isSportEvent(
        item: ISport | ISportEvent | ITournament
      ): item is ISportEvent {
        return (item as ISportEvent).eventPoster !== undefined;
      }
      function isTournament(
        item: ISport | ISportEvent | ITournament
      ): item is ITournament {
        return (item as ITournament).tournamentPoster !== undefined;
      }
      const handlePath = (path : string , state?: ISport | ISportEvent | ITournament | string) => {
        navigate(path,{state : state})        
      }
    return <>
    <div className="bg-black w-screen h-screen">
    <div className="w-screen  pl-44  ">
        <div className="pt-24 pb-8 text-white text-semibold text-3xl text-center">{params.search}</div> 
    {location.state.map((i : ISport | ISportEvent  ) => 
    <div key={i._id} className="inline">
        {typeof i === 'object' && isSport(i) && <div className="inline" onClick={() => handlePath(`../sports/view/${i.sport}`,location.state)}><SportsCard image = {i.sportPoster} /> </div>}
        {typeof i === 'object' && isSportEvent(i) &&<div className="inline" onClick={() => handlePath(`../sports/${i.sport.sport}/${i.tournament.tournament}/watch/${i._id}`,i)}><SportsCard image = {i.eventPoster} title={i.title} description={i.description} duration='20m' /> </div>}
        {typeof i === 'object' && isTournament(i) && <SportsCard image = {i.tournamentPoster} />}
        </div>
    )}

    
    </div>
    </div>
    </>
}
export default Browse