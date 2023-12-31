import React from "react";
import NavBar from "./NavBar";
import SubscriptionTable from "./SubscriptionTable";
import Footer from "../common/Footer/Footer";

const PayWall = () => {
  return (
    <div className="w-screen bg-black  text-white" >
      <NavBar />
      <div className="flex mt-4 w-full justify-around ">
        <div className="text-white text-4xl font-medium  items-center text-center">
          <span>Subscribe now and start streaming</span>
        </div>
        <SubscriptionTable />
   
      </div>
      <div className="" >

      <Footer/>
      </div>
    </div>
  );
};

export default PayWall;
