import { useNavigate, useParams } from "react-router-dom";
import TinyCard from "../card/TinyCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Redux/store/Store";
import { getTopTen } from "../../../Redux/Slices/carouselSlice/carouselSlice";
import { useEffect, useState } from "react";
import { Imovies, ItopTen, Movie, TVShows } from "../../../Redux/Slices/types";
import { carouselSyncSliceActions } from "../../../Redux/Slices/carouselSlice/carouselSyncSlice";
import { BACKEDN_BASE_URL } from "../../../services/api";
import React from "react";

const CarouselDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch: AppDispatch = useDispatch();


  const carouselSlice = useSelector((state: RootState) => state.carousel);
  const { topTenOfToday } = carouselSlice;

  const carouselSyncData = useSelector(
    (state: RootState) => state.carouselSync.syncData
  );

  const handleTinyClick = (topTen: Movie | TVShows, ind: number) => {
    dispatch(carouselSyncSliceActions.addCarouselSyncData(topTen));
  };

  useEffect(() => {
    handleTinyClick(topTenOfToday[currentIndex], currentIndex);
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === topTenOfToday.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    return () => clearInterval(intervalId);
  }, [topTenOfToday, currentIndex]);

  const handleCarouselWatchClick = () => {
    navigate(
      `/in/${"movies"}/${carouselSyncData?.movieName}/${carouselSyncData?._id}/watch`,
      { state: carouselSyncData }
    );
  };
  // console.log(carouselSyncData  , "----------->>")

  const poster = carouselSyncData?.moviePoster || carouselSyncData?.tvShowPoster
  const type = carouselSyncData?.movieName ? "movies" : "shows";
  const name = carouselSyncData?.movieName || carouselSyncData?.tvShowName;
  const _id = carouselSyncData?._id;
  const logo = carouselSyncData?.tvShowPoster || carouselSyncData?.moviePoster;
  const releaseYear = carouselSyncData?.releaseYear;
  const language = carouselSyncData?.language;
  const genre = carouselSyncData?.tvGenre || carouselSyncData?.genre;
  const description = carouselSyncData?.showDescription || carouselSyncData?.description;
  const ageGroup = carouselSyncData?.ageGroup;

  return (
    <div className="h-[95vh] w-full flex flex-col justify-end text-white text-justif shadow-inner pl-40 ">
      <div className="flex justify-between">
        <div className="h-[354px] w-[424px]  flex flex-col justify-around mb-8">
          <div className="h-24 w-[362px]">
            <img
              className="h-full w-full"
              src={BACKEDN_BASE_URL + poster}
              alt=""
            />
          </div>
          <div className="flex list-none justify-around font-semibold">
            <li>{releaseYear}</li>
            <span>&#183;</span>
            <li>2h 12min</li>
            <span>&#183;</span>
            <li>{language} Languages</li>
            <span>&#183;</span>
            <li className="bg-gray-800 px-1 rounded-lg">
              U/A {ageGroup}+
            </li>
          </div>
          <div className="">
            <p>{description}</p>
          </div>
          <div className="flex list-none font-semibold">
            {genre?.map((genre: any) => (
              <li key={genre._id} className="pr-2">
                {genre.genre} |
              </li>
            ))}
          </div>
          <div className="flex justify-between h-14">
            <button
              className=" bg-white w-full text-black rounded-lg mr-4 text-center font-semibold"
              onClick={handleCarouselWatchClick}
            >
              {" "}
              Watch Now
            </button>
            <button className="bg-gray-600 rounded-lg h-full w-20 text-3xl">
              {" "}
              +
            </button>
          </div>
        </div>
        {params.name || params.id ? null : (
          <div className="text-white mr-16 flex flex-col justify-end mb-14">
            <div className="flex">
              {topTenOfToday.map((topTen, ind) => (
                <button
                  onClick={() => handleTinyClick(topTen, ind)}
                  key={ind}
                  className={`${
                    currentIndex === ind
                      ? "border rounded-md"
                      : "opacity-50 hover:opacity-100 mx-2"
                  }`}
                >
                  <TinyCard topTen={topTen} key={topTen._id} />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarouselDetails;
