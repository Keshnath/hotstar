import React from "react";
import rightArrow from "../../../assets/image/mySpaceIcon/right-arrow1.svg";
import setting from "../../../assets/image/mySpaceIcon/settings.svg";
import { Link } from "react-router-dom";
const MySpaceHeader = () => {
  return (
    <>
      {/* <p className="text-white">hello world</p> */}
      <div className="bg-blue-900 h-36 flex gap-[50rem]">
        <div className="flex p-12 pl-36   ">
          <h1 className="text-white font-bold text-xl ">
            Subscribe to enjoy Disney + Hotstar{" "}
          </h1>
          <div>
            <img
              src={rightArrow}
              className="w-4 filter invert  mt-[0.3rem] ml-2  "
            />
          </div>
        </div>
        <div className="mt-12">
          <Link to="/in/paywall/checkout">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none w-52 "
            >
              Subscribe
            </button>
          </Link>
          <Link to="/in/help">
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-52"
            >
              {" "}
              Help & Settings
            </button>
          </Link>
          <img
            src={setting}
            className="w-5 filter invert mt-[-2.7rem] ml-56 "
          />
          <p className="p-5 text-blue-gray-300 ">Plans start at ₹299</p>
        </div>
      </div>
    </>
  );
};
export default MySpaceHeader;
