import React from "react";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import CommonCarousel from "../../components/common/Carousel/CommonCarousel";



const Layout = () => {
  return (

    <>
    <CommonCarousel/>
    <Sidebar/>
    <Outlet/>
    {/* <Details/> */}
    </>

    // <>
    //   <Sidebar />
    //   <div>
    //     <MovieCarousel />
    //     {/* <SectionVideoPreview/> */}
    //     <div className="absolute flex">
    //       {/* <div className="w-[89vw] pl-5"></div> */}
    //       <div className="absolute">
    //         <Details />
    //         <div className="w-screen bg-black h-screen flex pl-32 pt-2">
    //           {/* <div className="w-36 h-screen "></div> */}
    //           <Outlet />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default Layout;
