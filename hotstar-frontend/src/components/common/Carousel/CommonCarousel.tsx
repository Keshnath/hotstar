import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store/Store";
import { BACKEDN_BASE_URL } from "../../../services/api";
import React from "react";
const CommonCarousel = () => {
  const carouselSyncData = useSelector(
    (state: RootState) => state.carouselSync.syncData
  );
  const poster = carouselSyncData?.moviePoster || carouselSyncData?.tvShowPoster
  return (
    <div className=" fixed  -z-50  w-screen bg-black h-screen">
      <img src={BACKEDN_BASE_URL + poster} alt="" />
    </div>
  );
};

export default CommonCarousel;
