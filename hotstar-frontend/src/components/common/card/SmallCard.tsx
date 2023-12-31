import { BACKEDN_BASE_URL } from "../../../services/api";
// import { Imovies } from "../../../Redux/Slices/types";
// import { useSelector } from "react-redux";
import { Movie, TVShows } from "../../../Redux/Slices/types";
import React from "react";

import { useNavigate } from "react-router-dom";

interface SmallCardProps {
  movie?: Movie;
  Tv?: TVShows;
  poster?: string | undefined;
}

const SmallCard = (props: SmallCardProps) => {
  const navigate = useNavigate();
  const handleSmallCardClick = () => {
    navigate("/in/movies/movieName/movieId");
  };
  const poster = props.movie?.moviePoster || props.Tv?.tvShowPoster;
  return (
    <div className="w-[226px] h-[302px]  bg-white   rounded-lg ">
      <a href="#">
        <img
          className="rounded-lg w-full h-full "
          src={BACKEDN_BASE_URL + poster}
        />
      </a>
      <div role="poster">{props.movie?.moviePoster}</div>
    </div>
  );
};
export default SmallCard;
