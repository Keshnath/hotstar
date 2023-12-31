import { FooterData } from "../../../utils/constants/FooterData";
import "./Footer";
import React from "react";
const Footer = () => {
  return (
    <>
      <div className="text-white flex w-full justify-between ">
        {FooterData.map((item) => {
          return (
            <>
              <div className="m-20 mt-80 ">
                <h3 className="text-lg">{item.Heading}</h3>
                <div className="pt-4 cursor-pointer text-blue-100">
                  <p>{item.Title}</p>
                  <p className="pt-3">{item.Content}</p>
                  <h5 className="pt-8">{item.Policy}</h5>
                  <h5 className="pt-2">{item.Terms}</h5>
                  <div className="flex gap-6 mt-[-2rem]">
                    <img src={item.fb} className="w-6 filter invert " />
                    <img src={item.twitter} className="w-6 filter invert " />
                  </div>
                  <div className="flex gap-2">
                    <img src={item.googlePlay} className="w-20 mt-6 " />
                    <img src={item.Apple} className="w-20 mt-6 " />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Footer;
