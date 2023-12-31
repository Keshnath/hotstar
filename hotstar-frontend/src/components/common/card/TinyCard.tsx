import React from "react";
import { ItopTen, Movie, TVShows } from "../../../Redux/Slices/types";
import { BACKEDN_BASE_URL } from "../../../services/api";

interface ITinyCard {
  topTen: any
}

const TinyCard = ({ topTen }: ITinyCard) => {
  const poster = topTen.moviePoster || topTen.tvShowPoster
  return (
    <div className="h-12 w-20 rounded-md border  hover:translate-x-2 hover:scale-125 hover:transition-transform">
      <img
        src={BACKEDN_BASE_URL + poster}
        className="h-full w-full rounded-md"
      />
    </div>
  );
};

export default TinyCard;
