import React, { useState } from "react";
import { SidebarData } from "../../../utils/constants/SideBarData";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const imgURl =
    "https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg";

  return (
    <div className="fixed h-screen w-36 bg-black text-white flex flex-col justify-center shadow-[0_0px_80px_100px_rgba(0,0,0,1)] rounded-r-lg border-opacity-80 opacity-80  hover:shadow-[0_0px_150px_400px_rgba(0,0,0,1)] duration-1000 z-30 top-0">
      <Link to="/in/paywall" className="absolute top-8 left-10 cursor-pointer">
        <img src={imgURl} className="h-12 w-full" alt="" />
      </Link>
      <div
        className=" flex flex-col items-center absolute left-4 "
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => {
          setVisible(false);
        }}
      >
        {SidebarData.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="p-3  w-[33%] flex items-center justify-center hover:scale-125 hover:translate-x-2 duration-1200 transition-transform cursor-pointer "
          >
            <img
              src={item.activeIcon}
              className="invert filter h-7 w-7"
              alt=""
            />
            <div
              className={`pl-5 w-[35%] font-medium ${
                visible ? "" : "invisible"
              } `}
            >
              <span className="">{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
