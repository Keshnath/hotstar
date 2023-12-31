import { Genre, Imovies, Movie } from "../../Redux/Slices/types";
import { useDispatch, useSelector } from "react-redux";
import {
  getMoviesByGenre,
  movieSliceActions,
} from "../../Redux/Slices/movieSlice/MovieSlice";
import React, { useEffect } from "react";
import { AppDispatch, RootState } from "../../Redux/store/Store";
import ToggleCard from "../common/card/ToggleCard";
import { getTopTen } from "../../Redux/Slices/carouselSlice/carouselSlice";
import Footer from "../common/Footer/Footer";

const MovieContainer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesByGenre("/movies/action?page=2"));
    dispatch(getTopTen("/carousel/top-ten-movies" ));
  }, []);

  const movieSlice = useSelector((state: RootState) => state.movies);
  const { movies } = movieSlice;

  return (
    <div className="overflow-hidden">
      <h1 className="text-white text-xl font-semibold ml-10 mb-10">Action Movies</h1>

      <div className="flex items-center">
        <button className=" w-10 bg-gray-300 rounded-full mr-3 h-10 z-30 opacity-0 hover:opacity-60">
          &lt;
        </button>
        <div className="flex  overflow-visible h-[310px] ">
          {movies?.map((movie) => (
            <ToggleCard movieObj={movie} key={movie._id} />
          ))}
        </div>
        <button className="w-10 bg-gray-300 rounded-full h-10 opacity-0 hover:opacity-60 ">&gt;</button>
      </div>
      <h1 className="text-white text-xl font-semibold ml-10 mb-10">Action Movies</h1>

      <div className="flex items-center">
        <button className=" w-10 bg-gray-300 rounded-full mr-3 h-10 z-30 opacity-0 hover:opacity-60">
          &lt;
        </button>
        <div className="flex  overflow-visible h-[310px] ">
          {movies?.map((movie) => (
            <ToggleCard movieObj={movie} key={movie._id} />
          ))}
        </div>
        <button className="w-10 bg-gray-300 rounded-full h-10 opacity-0 hover:opacity-60 ">&gt;</button>
      </div>
      
    </div>
  );
};

export default MovieContainer;
