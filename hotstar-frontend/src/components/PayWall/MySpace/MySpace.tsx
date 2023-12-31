import React from "react";
import MySpaceHeader from "./MySpaceHeader";

import Footer from "../../../components/common/Footer/Footer";
import MySpaceBody from "./MySpaceBody";
const MySpace = () => {
  return (
    <div className="bg-black">
      <MySpaceHeader />
      <MySpaceBody />
      <div className="ml-16">
        <Footer />
      </div>
    </div>
  );
};
export default MySpace;
