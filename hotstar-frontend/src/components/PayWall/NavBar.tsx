import React from "react";
import { useNavigate } from "react-router-dom";
import useIsAuth from "../../Hooks/useIsAuth";
import crossNavbar from '../../assets/image/common/crossNavbar.png'
import disney from '../../assets/image/common/disney.webp'
const NavBar = () => {
  const navigate = useNavigate();

  const loginComponent = () => {
    navigate("/in/paywall/log-in");
   
  };
  const signupComponent = () => {
    navigate("/in/paywall/sign-up");
  };
  const headerImageIcon = () => {
    navigate("/in");
  };
  const isLogin = useIsAuth();
  return (
    <nav className="h-28  flex w-full items-center justify-between px-16">
      <div className="flex items-center w-40 justify-between">
        <img
          src={crossNavbar}
          alt="cross"
          className="h-8 w-8 text-white cursor-pointer"
          onClick={headerImageIcon}
        />
        <img
          src={disney}
          alt=""
          className="h-16 cursor-pointer"
          onClick={headerImageIcon}
        />
      </div>
      <div
        className={`flex w-96  ${isLogin ? "justify-end" : "justify-between"}`}
      >
        <div>
          <select className="border text-white px-3 h-12 w-36 text-lg font-normal outline outline-0 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-gray-200 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 bg-gray-700 border-none rounded-md">
            <option value="brazil" className="py-2">
              English
            </option>
            <option value="bucharest" className="py-2">
              Hindi
            </option>
            <option value="london" className="py-2">
              Tamil
            </option>
            <option value="washington" className="py-2">
              Telugu
            </option>
          </select>
        </div>
        {isLogin ? null : (
          <div className="">
            <button
              className="bg-gradient-to-r from-[#0000FD] to-[#01147C] h-12 w-28 rounded-md mr-2"
              onClick={loginComponent}
            >
              <span className="text-xl text-white">Login</span>
            </button>
            <button
              className="bg-gradient-to-r from-[#0000FD] to-[#01147C] h-12 w-28 rounded-md"
              onClick={signupComponent}
            >
              <span className="text-xl text-white">Register</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
