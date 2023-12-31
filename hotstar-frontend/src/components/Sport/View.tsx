import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getEvents } from "../../Redux/Slices/sportsSlice/sportSlice"
import { AppDispatch, RootState } from "../../Redux/store/Store"
import { GET_EVENTS } from "../../services/api"
import React from "react"
import SportsCard from "../common/card/SportsCard"
const View = () => {
    const params = useParams()
    const dispatch : AppDispatch= useDispatch()
    const event = useSelector((state : RootState)=>state.sports.events)        
    useEffect(()=>{
        dispatch(getEvents(GET_EVENTS+params.sport ))
        },[dispatch,params.sport])    
    return <div className="w-screen h-screen bg-black pt-5 ">
        {event.length===0 && <h1 className="text-white">Data Not Found</h1>}
        {event.map(i=> <SportsCard key={i._id} image = {i.eventPoster} description={i.description} title={i.title} duration='10m' />)}
    </div>
}
export default View