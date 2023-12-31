import { useState } from "react";
import play from "../../../assets/image/card icons/play.png";
import { Movie } from "../../../Redux/Slices/types";
import { BACKEDN_BASE_URL } from "../../../services/api";
import Demo from "../../Movie/MovieContainer";
import MultiItemCarousel from "../../Sport/MultiItemCarousel/MultiItemCarousel";
interface LargeCardProps {
  movie: Movie;
  handleClose: () => void;
}
const LargeCard: React.FC<LargeCardProps> = (props) => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  function time_convert(num: number) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + "h " + minutes + "m";
  }
  return (
    <>
      <div className="justify-center items-center  flex  overflow-x-hidden bg-gray-900/50 overflow-y-auto fixed inset-0  z-50 outline-none focus:outline-none">
        <div className="relative   border-transparent h-3/4  w-2/4 rounded-2xl rounded-t-2xl bg-gray-900 flex flex-col">
          <img
            src={BACKEDN_BASE_URL + props.movie.moviePoster}
            className="absolute h-3/4 w-full object-cover rounded-t-2xl rounded-2xl"
          />
          {/* <video className="absolute h-3/4 w-full object-cover rounded-2xl" autoPlay>
                <source src={BACKEDN_BASE_URL + props.movie.movie} ></source>
              </video> */}
          <div className="absolute  inset-0 z-[1] h-3/4 w-full shadow-[inset_black_150px_-200px_150px_0px] "></div>
          <div
            className=" flex items-start text-xl font-medium justify-between p-5 rounded-t z-[3] w-6 h-6 absolute right-10 top-6 cursor-pointer "
            onClick={props.handleClose}
          >
            X
          </div>
          <div className="relative p-6 w-2/4 mx-10 mt-16 z-[3] ">
            <img
              src={BACKEDN_BASE_URL + props.movie.movieLogo}
              className=" h-24"
            />
            <div className="flex gap-1 text-md z-[2] font-medium  pt-1 my-3 text-white list-none">
              <li className="pr-1">{props.movie.releaseYear}</li>*
              <li className="px-1">{time_convert(props.movie.duration)} </li>*
              <li className="px-1">
                {props.movie.language.length === 1
                  ? props.movie.language
                  : props.movie.language.length + " languages"}{" "}
              </li>
              *
              <li className="bg-gray-100/50 rounded-md ml-1 px-2 py-1 text-xs">
                {props.movie.ageGroup}{" "}
              </li>
            </div>
            <div className=" text-white/75 my-2 text-sm">
              {props.movie.description} Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Culpa dolor cupiditate minus mollitia. Obcaecati
              rem dolor dolorem earum, placeat repellendus eius laborum incidunt
              molestiae, suscipit labore neque eligendi, temporibus aliquam!
            </div>
            <div className="flex gap-1 text-md my-2 z-[2] font-medium pt-1 text-white list-none">
              {props.movie.genre.map((genre, index) => (
                <>
                  <li className="px-2 font-medium"> {genre.genre} </li>
                  <span>{props.movie.genre.length - 1 !== index && "|"}</span>
                </>
              ))}
            </div>
            <div className="flex  mt-5">
              <button
                type="button"
                className="w-3/4  text-black text-md  bg-white/75 hover:bg-white hover:scale-105 duration-700 focus:ring-4  focus:ring-blue-300 font-semibold rounded-lg  px-5 py-3.5 mr-2 ml-2 mb-2 dark:bg-white dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Watch Now
              </button>
              <img src={play} className="w-5 h-5  absolute left-24 mt-5 " />
              <button
                type="button"
                className=" gap-0 hover:scale-105 duration-700 text-white mt-0 ml-2 bg-white/25 focus:ring-4 focus:ring-blue-300 font-medium  rounded-lg text-2xl px-5 py-1 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-blue-800"
              >
                +
              </button>
            </div>
          </div>
          <div className="relative w-full h-full overflow-hidden">
            <div className=" absolute flex gap-2 mt-2 text-lg z-[50] font-semibold  pb-4 ml-16 w-full  border-b border-white/25  list-none">
              <li
                className={`pr-1 text-white ${active && "text-white/25"} `}
                onClick={handleActive}
              >
                More Like This
              </li>
              <li
                className={`px-1 text-white ${!active && "text-white/25"} `}
                onClick={handleActive}
              >
                Trailer & more
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
export default LargeCard;
