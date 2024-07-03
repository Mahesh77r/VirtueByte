import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

export const SideNavbar = ({navigation,  isSideNavbarOpen, toggleSideNavbar }) => {
 
  return (
  <>
    <div
      className={`lg:bg-[#000D27] min-h-screen ${isSideNavbarOpen ? "lg:w-64 md:32" : "w-16"}
       duration-700 px-4 z-[1000] bg-white`}
      style={{ position: "fixed"}}
    >
      <div className="pt-2 flex justify-start gap-7">
        <div className="lg:text-white md:text-black"><HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={toggleSideNavbar}
        /></div>
        {/* {isSideNavbarOpen ?  */}
        <div className={`whitespace-pre duration-500 ${!isSideNavbarOpen && "opacity-0 translate-x-28 overflow-hidden"}`}></div> 
        {/* : null} */}
        
      </div>
      <div className="mt-4 flex flex-col gap-4 relative" >
        {navigation.map((nav, i) => (
          <Link
            to={nav.link}
            key={i}
            className={
              "group flex items-center duration-500 text-base gap-7 font-medium p-1 rounded-md lg:text-white lg:hover:bg-white lg:hover:text-[#040430] "
            }
          >
            <div className="justify-start duration-500 p-0 m-0">{nav.icon}</div>
            <h2 className={`whitespace-pre duration-500 ${!isSideNavbarOpen && "opacity-0 translate-x-28 overflow-hidden"}`}>
              {nav.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};
