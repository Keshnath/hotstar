import React from "react";
import help from "../../../assets/image/HelpIcon/help.svg";
import rightArrow from "../../../assets/image/download.png";
import lock from "../../../assets/image/HelpIcon/lock.svg";
import profile from "../../../assets/image/HelpIcon/profile.svg";
import Subscribe from "./subscribe";
import ParentalControl from "./ParentalControl";
import { useState } from "react";
import Support from "./support";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
const Help = () => {
  const [show, setShow] = useState(false);
  const [supports, setSupport] = useState(false);
  const navigate = useNavigate();
  const parentalControl = () => {
    setShow(true);
    setSupport(false);
  };
  const support = () => {
    setSupport(true);
    setShow(false);
  };
  const subscription = () => {
    setShow(false);
    setSupport(false);
  };
  const handleLogout = async () => {
    try {
      localStorage.removeItem("accessToken");
      const logOut = await signOut(auth);
      navigate("/in/home");
    } catch (error) {
      console.log("error in logout");
    }
  };
  return (
    <>
      <div className="flex gap-7">
        <div className="grid col-span-1 p-24 pl-44 gap-14 ">
          <h1 className="text-white font-bold text-2xl">Help & Settings</h1>
          <div className="">
            <div className="flex gap-4">
              <img src={profile} className="w-8 filter invert cursor-pointer" />
              <h4
                className="text-white font-bold text-xl cursor-pointer"
                onClick={subscription}
              >
                Subscription & Devices
              </h4>
              <img
                src={rightArrow}
                className="filter invert w-4 h-4 m-2 ml-24 cursor-pointer"
              />
            </div>
            <h5 className=" pl-11 text-lg pt-1 text-blue-gray-300 cursor-pointer">
              Manage Subscription & Devices
            </h5>
            <div className="flex gap-4 mt-14">
              <img src={lock} className="w-6 filter invert cursor-pointer" />
              <h4
                className="text-white font-bold text-xl cursor-pointer"
                onClick={parentalControl}
              >
                Parental Controls
              </h4>
              <img
                src={rightArrow}
                className="filter invert w-4 h-4 m-2 ml-40 cursor-pointer"
              />
            </div>
            <h5 className=" pl-11 text-lg pt-1 text-blue-gray-300  cursor-pointer">
              Parental Lock
            </h5>
            <p className="text-blue-gray-800 pl-10 cursor-pointer">
              _________________________________________
            </p>
            <div className="flex gap-4 mt-8 cursor-pointer">
              <img src={help} className="w-6 filter invert cursor-pointer" />
              <h4
                className="text-white font-bold text-xl cursor-pointer"
                onClick={support}
              >
                Help & Support
              </h4>
              <img
                src={rightArrow}
                className="filter invert w-4 h-4 m-2 ml-44 cursor-pointer"
              />
            </div>
            <h5 className=" pl-11 text-lg pt-1 text-blue-gray-300 cursor-pointer ">
              Help Centre
            </h5>
          </div>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold first-letter: rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-32  "
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
        <hr />
        {!show && !supports && <Subscribe />}
        {show && !supports && <ParentalControl />}
        {supports && !show && <Support />}
      </div>
    </>
  );
};

export default Help;
