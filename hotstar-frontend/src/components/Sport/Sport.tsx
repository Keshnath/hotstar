import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../Redux/store/Store";
import { useEffect } from "react";
import {
  getSports,
  getTournaments,
  getEvents,
} from "../../Redux/Slices/sportsSlice/sportSlice";
import { ALL_SPORTS, ALL_TOURNAMENTS, GET_EVENTS } from "../../services/api";
import MultiItemCarousel from "./MultiItemCarousel/MultiItemCarousel";
import SportsCard from "../common/card/SportsCard";
import React from "react";
import { getTopTen } from "../../Redux/Slices/carouselSlice/carouselSlice";
const Sport = () => {
  const sports = useSelector((state: RootState) => state.sports.sports);
  const tournaments = useSelector(
    (state: RootState) => state.sports.tournaments
  );
  const events = useSelector((state: RootState) => state.sports.events);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopTen("/carousel/top-ten-shows"));
  }, []);

  useEffect(() => {
    dispatch(getSports(ALL_SPORTS));
    dispatch(getTournaments(ALL_TOURNAMENTS));
    dispatch(
      getEvents(GET_EVENTS + "cricket/Asia Cup")
    );
  }, [dispatch]);
  return (
    <>
      <div className="w-screen/2 ml-12 overflow-hidden mr-12">
        <MultiItemCarousel
          item={sports}
          component={SportsCard}
          tag="Popular Sports"
        />
        {typeof events === "object" && (
          <MultiItemCarousel item={events} component={SportsCard} tag="MMA" />
        )}
        <MultiItemCarousel
          item={tournaments}
          component={SportsCard}
          tag="Popular Tournaments"
        />
      </div>
    </>
  );
};
export default Sport;
