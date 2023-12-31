import { useSelector } from "react-redux";
import MediumCard from "./MediumCard";
import SmallCard from "./SmallCard";
import { RootState } from "../../Movie/types";
import { useState } from "react";
import { Item } from "../../Movie/types";
import { Movie, TVShows } from "../../../Redux/Slices/types";
import rightArrow from "../../assets/image/download.png";
import leftArrow from "../../assets/image/download.png";
import React from "react";
interface MovieProps {
  movieObj?: Movie;
  TvObj?: TVShows;
}

const ToggleCard = (props: MovieProps) => {
  console.log(props.movieObj)
  const [card, setCard] = useState(false); // Local state for card toggle

  const handleMouseEnter = () => {
    setCard(true);
  };

  const handleMouseLeave = () => {
    setCard(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="hover:scale-110 hover:transition ease-in-out hover:duration-1000 mr-3"
      role="hover"
    >
      {card ? (
        <MediumCard movie={props.movieObj} Tv={props.TvObj}  />
      ) : (
        <SmallCard movie={props.movieObj} Tv={props.TvObj} />
      )}
    </div>
  );
};
export default ToggleCard;
