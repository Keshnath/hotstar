// import Movie from "../Movie/Movie";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store/Store";
import { getTopTen } from "../../Redux/Slices/carouselSlice/carouselSlice";
import TvSlice, { getTVByGenre } from "../../Redux/Slices/tvSlice/TvSlice";
import ToggleCard from "../common/card/ToggleCard";
import { getMoviesByGenre } from "../../Redux/Slices/movieSlice/MovieSlice";

const Home = () => {
  const dispatch: AppDispatch = useDispatch();

  const apiCall = () => {
    dispatch(getTopTen("/carousel/top-ten"));
    dispatch(getTVByGenre("/tv/shows/star bharat?page=1"));
    dispatch(getMoviesByGenre("/movies/action?page=1"));
  };

  useEffect(() => {
    apiCall();
  }, []);

  const TVSlice = useSelector((state: RootState) => state.tv.tv);
  const movieSlice = useSelector((state: RootState) => state.movies);
  const { movies } = movieSlice;

  console.log(TVSlice, "----> tv show ");
  console.log(movies, "----> movies ");

  return (
    <div className="overflow-hidden">
      <h1 className="text-white text-xl font-semibold ml-10 mb-10">
        Star Bharat
      </h1>

      <div className="flex items-center">
        <button className=" w-10 bg-gray-300 rounded-full mr-3 h-10 z-30 opacity-0 hover:opacity-60">
          &lt;
        </button>
        <div className="flex  overflow-visible h-[310px] ">
          {TVSlice?.map((show) => <ToggleCard TvObj={show} key={show._id} />)}
        </div>
        <button className="w-10 bg-gray-300 rounded-full h-10 opacity-0 hover:opacity-60 ">
          &gt;
        </button>
      </div>
      <h1 className="text-white text-xl font-semibold ml-10 mb-10">
        Action Movies
      </h1>

      <div className="flex items-center">
        <button className=" w-10 bg-gray-300 rounded-full mr-3 h-10 z-30 opacity-0 hover:opacity-60">
          &lt;
        </button>
        <div className="flex  overflow-visible h-[310px] ">
          {movies?.map((movie) => (
            <ToggleCard movieObj={movie} key={movie._id} />
          ))}
        </div>
        <button className="w-10 bg-gray-300 rounded-full h-10 opacity-0 hover:opacity-60 ">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Home;
