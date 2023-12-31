import React from "react";
import CarouselDetails from "../DetailsPage/CarouselDetails";
import { useLocation, useNavigate } from "react-router-dom";
import { BACKEDN_BASE_URL } from "../../../services/api";
import ToggleCard from "./ToggleCard";

const XlCard = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const type = state.movieName ? "movies" : "shows";
  const name = state.movieName || state.tvShowName;
  const _id = state._id;
  const logo = state.tvShowPoster || state.moviePoster;
  const releaseYear = state.releaseYear;
  const language = state.language;
  const genre = state.tvGenre || state.genre;
  const description = state.showDescription || state.description;
  const ageGroup = state.ageGroup;

  const handleCarouselWatchClick = () => {
    navigate(`/in/${type}/${name}/${_id}/watch`, { state: state });
  };

  return (
    <div>
      <div className="h-screen  w-full">
        <img
          className="h-full w-full bg-contain absolute -z-10"
          src={BACKEDN_BASE_URL + logo}
          alt=""
        />
        <div className="absolute -z-10 inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-t-sm bg-opacity-10"></div>
        <div className="h-[95vh] w-full flex flex-col justify-end text-white text-justif shadow-inner pl-40 ">
          <div className="flex justify-between">
            <div className="h-[354px] w-[424px]  flex flex-col justify-around mb-8">
              <div className="h-24 w-[362px]">
                <img
                  className="h-full w-full"
                  src={BACKEDN_BASE_URL + logo}
                  alt=""
                />
              </div>
              <div className="flex list-none justify-around font-semibold">
                <li>{releaseYear}</li>
                <span>&#183;</span>
                <li>2h 12min</li>
                <span>&#183;</span>
                <li>{language.length} Languages</li>
                <span>&#183;</span>
                <li className="bg-gray-800 px-1 rounded-lg">U/A {ageGroup}+</li>
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
          </div>
        </div>
      </div>
      <div className="bg-black text-gray-400 pl-40 text-2xl font-medium">
        <div className="py-6">
          <span className="mr-14 hover:text-white">More Like This</span>
          <span className="hover:text-white">Trailers & More</span>
        </div>
        <hr className="opacity-40" />
        <div className="mt-5 flex">
          {Array(7)
            .fill("")
            .map(() => (
              <div key={Math.random()}>
                <ToggleCard />
              </div>
            ))}
        </div>
        <div className="pt-5">
          <span>Traile & More</span>
          <div className="flex">
            {Array(7)
              .fill("")
              .map(() => (
                <div key={Math.random()}>
                  <ToggleCard />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default XlCard;
