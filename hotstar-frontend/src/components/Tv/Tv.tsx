import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTVByGenre } from "../../Redux/Slices/tvSlice/TvSlice";
import { AppDispatch, RootState } from "../../Redux/store/Store";
import ToggleCard from "../common/card/ToggleCard";
import React from "react";
import { getTopTen } from "../../Redux/Slices/carouselSlice/carouselSlice";

const Tv: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  // const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopTen("/carousel/top-ten-shows" ));
  }, []);

  useEffect(() => {
    dispatch(getTVByGenre("/tv/shows/star bharat?page=1" ));
  }, []);
  const TVSlice = useSelector((state: RootState) => state.tv.tv);
 
console.log(TVSlice)
  return (
    <div className="ml-36 overflow-hidden">
      <h1 className="text-white text-xl font-semibold ml-10 mb-10">
        Star Bharat
      </h1>

      <div className="flex items-center">
        <button className=" w-10 bg-gray-300 rounded-full mr-3 h-10 z-30 opacity-0 hover:opacity-60">
          &lt;
        </button>
        <div className="flex  overflow-visible h-[310px] ">
          {TVSlice?.map((show) => (
            <ToggleCard TvObj={show} key={show._id} />
          ))}
        </div>
        <button className="w-10 bg-gray-300 rounded-full h-10 opacity-0 hover:opacity-60 ">
          &gt;
        </button>
      </div>
    </div>
  );
};
export default Tv;
