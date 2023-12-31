import React from "react";
import mySpaceLogin from "../../../assets/image/mySpaceIcon/mySpaceLogin.webp";
import { Link } from "react-router-dom";
export const MySpaceLogin = () => {
  return (
    <>
      <div className="h-screen">
        <div className="bg-blue-900 h-36 shadow-md ">
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5  mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-52 m-12 ml-[95rem] "
          >
            Help & Support
          </button>
        </div>
        <div className="grid justify-center gap-4 m-20">
          {" "}
          {/* Added a flex container and justify-center to center the image */}
          <img src={mySpaceLogin} className="w-96 ml-20 " />
          <h6 className="text-white  font-bold text-2xl text-center  ">
            Login to Disney+ Hotstar
          </h6>
          <p className="text-center text-xl text-blue-gray-400">
            Start watching from where you left off, personalise for kids and
            more
          </p>
          <Link to="/in/paywall/log-in">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-52 ml-44 "
            >
              Log In
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
