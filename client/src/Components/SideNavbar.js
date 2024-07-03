import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";




export const SideNavbar = ({navigation,  isSideNavbarOpen, toggleSideNavbar }) => {
 
  return (
  <>
    <div
      className={`bg-[#000D27] min-h-screen ${isSideNavbarOpen ? "w-64" : "w-16"
        } duration-700 text-gray-100 px-4`}
      style={{ position: "fixed" , top: "81px"}}
    >
      <div className="pt-2 flex justify-start gap-7">
        <div><HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={toggleSideNavbar}
        /></div>
        {/* {isSideNavbarOpen ?  */}
        <div className={`whitespace-pre duration-500 ${!isSideNavbarOpen && "opacity-0 translate-x-28 overflow-hidden"}`}></div> 
        {/* : null} */}
        
      </div>
      <div className="flex flex-col gap-4 relative" >
        {navigation.map((nav, i) => (
         
          
          <Link
            to={nav.link}
            key={i}
            className={
              "group flex items-center text-base gap-7 font-medium p-1 rounded-md hover:bg-white  hover:text-[#040430]"
            }
          >
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
