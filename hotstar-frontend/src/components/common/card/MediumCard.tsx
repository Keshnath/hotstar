// import { useDispatch } from "react-redux";
import play from "../../../assets/image/card icons/play.png";
// import { cardSliceAction } from "../../../Redux/Slices/CardSlice";
import React from "react";
import { Movie, TVShows } from "../../../Redux/Slices/types";
import { BACKEDN_BASE_URL } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";
import { useState, useEffect } from "react";
import Tv from "../../Tv/Tv";
// interface MediumCardProps {
//   movieData: Record<string, any>; // Adjust the type as per your actual data structure
// }

interface MediumCardProps {
  movie?: Movie;
  Tv?: TVShows;
}

const MediumCard: React.FC<MediumCardProps> = (props) => {
  // console.log(Tv)
  const id = props.movie?._id || props.Tv?._id;
  const name = props.movie?.movieName || props.Tv?.tvShowName;
  const trailer = props.movie?.trailer || props.Tv?.tvShowtrailer;
  const description = props.movie?.description || props.Tv?.showDescription;
  const poster = props.movie?.moviePoster || props.Tv?.tvShowPoster;
  const releaseYear = props.movie?.releaseYear || props.Tv?.releaseYear;
  const duration = props.movie?.duration || 233;

  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showVideos, setShowVideo] = useState(false);
  // console.log(poster);
  const handleWatchButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigate(`/in/${props.movie ? "movies" : "shows"}/${name}/${id}/watch`, {
      state: props?.movie || props?.Tv,
    });
  };
  const handleMediumCardClick = () => {
    navigate(`/in/${props.movie ? "movies" : "shows"}/${name}/${id}`, {
      state: props?.movie || props?.Tv,
    });
  };

  const showVideo = () => {
    setIsPlaying(true);
  };

  const showImage = () => {
    setIsCompleted(true);
    setIsPlaying(false);
  };
  useEffect(() => {
    const delay = setTimeout(() => {
      setShowVideo(true);
    }, 2000);
    return () => clearTimeout(delay);
  }, []);

  return (
    <div
      className="w-64 h-96 bg-zinc-800 border  border-gray-200 rounded-lg  bg-blue-gray-900 dark:bg-gray-900 dark:border-gray-700 flex flex-col  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  "
      onClick={handleMediumCardClick}
    >
      <div className="relative h-[216px] group">
        {!isCompleted && showVideos && (props.movie || props.Tv) ? (
          <video
            className="w-full h-full"
            autoPlay
            muted
            onEnded={showImage}
            onPlay={showVideo} // Switch back to image when video ends
          >
            <source src={BACKEDN_BASE_URL + trailer} />
          </video>
        ) : (
          (props.movie || props.Tv) && (
            <img
              className="rounded-t-lg w-full h-48 "
              src={BACKEDN_BASE_URL + poster}
              alt=""
              // Switch to video when mouse enters
            />
          )
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-t-lg bg-opacity-10"></div>
      </div>

      <div className="flex flex-col h-full justify-around py-5 ">
        <div className="flex">
          <button
            type="button"
            className="w-56  ml-2 text-black text-xs  bg-white hover:bg-white   font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:hover:bg-gray-700 "
            onClick={(e) => handleWatchButtonClick(e)}
          >
            Watch Now
          </button>
          <img src={play} className="w-3 h-3 mt-3 absolute left-10" />
          <button
            type="button"
            className="w-12 gap-0 text-white mt-0 ml-2 bg-gray-600 hover:bg-zinc-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 "
          >
            +
          </button>
        </div>
        <div className="flex gap-1 text-xs font-medium pl-2 pt-1  text-white list-none">
          <li>{releaseYear} * </li>
          <li>{duration}</li>
          <li>Hindi * </li>
          <li>U/A16+ * </li>
          <li>Thriller * </li>
          <li>Mystery </li>
        </div>
        <p className="text-xs pl-2  text-blue-100">{description}</p>
      </div>
    </div>
  );
};
export default MediumCard;
