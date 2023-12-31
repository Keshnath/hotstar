import React from "react";

import { BACKEDN_BASE_URL, BASE_URL } from "../../../services/api";

import { useLocation } from "react-router-dom";

const Watch = () => {
  // debugger
  const { state } = useLocation();
  const name: string = state?.movieName || state?.tvShowName;
  const _id: string = state?._id;
  const type: string = state?.movieName ? "movies" : "tv";
  return (
    <div className="h-screen w-screen">
      <video controls autoPlay className="h-full w-full">
        <source src={BASE_URL + `/${type}/${name}/${_id}/watch`} />
      </video>
    </div>
  );
};

export default Watch;
