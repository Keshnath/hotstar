import React from "react";
import pencil from "../../../assets/image/mySpaceIcon/pencil.png";
import mickey from "../../../assets/image/mySpaceIcon/mickey.png";
import kids from "../../../assets/image/mySpaceIcon/kids.png";
import plus from "../../../assets/image/mySpaceIcon/plus.png";
const MySpaceBody = () => {
  return (
    <div >
      <div>
        <div className="flex gap-96">
          <h1 className="text-white p-12 pl-36 text-xl text-bold">Profiles</h1>
          <h1 className="text-white p-12 pl-[67rem] text-xl text-bold">Edit</h1>
          <img src={pencil} className="ml-[-31rem] mt-12 h-5 filter invert " />
        </div>
        <div className="flex gap-9 ">
          <div className="group">
            <img src={mickey} className="w-20 ml-36 " />
            <p className="text-white text-center pl-36 pt-2">User</p>
          </div>
          <div className="group">
            <img src={kids} className="w-20" />
            <p className="text-white text-center pt-2">Kids</p>
          </div>
          <div className="group">
            <img src={plus} className="w-20 filter invert " />
            <p className="text-white text-center pt-2">Add</p>
          </div>
        </div>
        <h1 className="text-white p-12 text-xl text-bold pl-36">Watchlist</h1>
      </div>
    </div>
  );
};

export default MySpaceBody;
