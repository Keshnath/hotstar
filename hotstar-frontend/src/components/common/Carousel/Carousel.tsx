import sport from "../../../assets/image/default.webp";
import React from "react";
const Carousel = () => {
  return (
    <>
      <div className="h-3/4 w-6/6 bg-white shadow-[inset_white_-20px_0px_100px_0px]">
        <img src={sport} className="h-full w-full " alt="sport" />
      </div>
    </>
  );
};
export default Carousel;
