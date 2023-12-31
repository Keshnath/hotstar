import React from "react";
import computer from "../../../assets/image/SubscribeIcon/computer-956.svg";
const Subscribe = () => {
  return (
    <>
      <div>
        <div className="flex gap-96 p-24 ">
          <h5 className="text-white font-bold text-lg">
            {" "}
            Subscribe to enjoy Disney + Hotstar
          </h5>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold first-letter: rounded-lg text-lg px-5 py-2.5 ml-20 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-32  "
          >
            subscribe
          </button>
        </div>
        <div className="flex gap-96 pl-24  mt-[-4rem]  ">
          <h5 className="text-white  text-lg"> Registered Mobile Number</h5>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold first-letter: rounded-lg text-lg px-5 py-2.5 ml-44 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-32  "
          >
            update
          </button>
        </div>
        <h4 className="text-white text-bold p-16 pl-24 text-lg">This Device</h4>
        <div className="flex gap-96 m-9">
          <div className="flex gap-2">
            <img src={computer} className="w-9 filter invert ml-14" />
            <h5 className="text-white w-48 pt-3 pl-1">Chrome Browser</h5>
          </div>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold first-letter: rounded-lg text-lg px-5 py-2.5 ml-44 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-32  "
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
