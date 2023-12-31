import { Outlet } from "react-router-dom";
import CarouselDetails from "../../components/common/DetailsPage/CarouselDetails";
import React from "react";
import CarouselPage from "../Carousel/CarouselPage";

const SectionDetailsPage = () => {
  return (
    <div className="">
      <CarouselPage />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-transparent rounded bg-opacity-0"></div>
      <div className="bg-black pl-36 flex justify-center pt-7 h-screen ">
        <Outlet />
      </div>
    </div>
  );
};

export default SectionDetailsPage;
