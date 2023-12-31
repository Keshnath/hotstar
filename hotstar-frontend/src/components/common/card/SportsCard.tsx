import { useState } from "react";
import { ICard } from "./types";
import play from "../../../assets/image/SportCardIcons/play.png";
import { BACKEDN_BASE_URL } from "../../../services/api";
import React from "react";
const SportsCard: React.FC<ICard> = (props) => {
  const [show, setShow] = useState("opacity-0");
  const image = `${BACKEDN_BASE_URL}${props.image}`;
  const handleMouseEnter = () => {
    setShow(
      "opacity-100 pb-2 bg-gray-900 shadow-2xl shadow-black rounded-lg rounded-t-none ml-1 transition-transform transform scale-110  "
    );
  };
  const handleMouseLeave = () => {
    setShow("opacity-0");
  };

  return (
    <>
      <div className="inline-block h-70 hover:z-[1] relative  w-100 cursor-pointer ">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`mt-0 rounded-t-lg rounded-lg hover:rounded-none hover:rounded-t-lg shadow-l hover:shadow-xl  hover:bg-gray-900  m-1   inline-block h-4/4  w-100 transition-transform transform ${
            props.title ? "hover:scale-110" : "hover:scale-125 z-[1] "
          }  ease-in-out`}
        >
          <div className="rounded-t-lg rounded-md w-80">
            <img
              className="relative h-1/4 rounded-t-lg rounded-md w-4/4 "
              src={image}
              alt="card"
            />
            {props.title && (
              <img
                src={play}
                alt="play"
                className="absolute bottom-12 left-1 right-0 m-2 h-4  w-4"
              />
            )}
            {props.title && (
              <div className="absolute bottom-12 m-1 right-2 text-white">
                {props.duration}
              </div>
            )}
          </div>
          {props.title && (
            <div className="w-80 pl-4 text-xl  p-2 pb-0 relative   text-white mb-2 ">
              <p className=" float-right bg-white opacity-0 hover:opacity-100 text-black text-sm">
                {props.title}
              </p>
              {props.title}
            </div>
          )}
        </div>
        {props.description && (
          <div className={`w-80  text-l px-2 text-gray-400 mb-2 ${show}`}>
            {props.description}
          </div>
        )}
      </div>
    </>
  );
};
export default SportsCard;
