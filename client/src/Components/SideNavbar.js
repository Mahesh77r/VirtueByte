import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import {DropdownIcon}  from './NavLink'

// Component to render nested navigation items
const DropdownMenu = ({ subNavigation, isSideNavbarOpen, setIsSideNavbarOpen ,setOpenDropdown}) => {
  return (
    <div className={`pl-4 ${!isSideNavbarOpen && "hidden"}`}>
      {subNavigation.map((subNav, index) => (
        <Link
          to={subNav.link}
          key={index}
          className={
            "group flex items-center my-2 duration-500 text-base gap-7 font-medium p-1 rounded-md lg:text-white lg:hover:bg-white lg:hover:text-[#040430]"
          }
          onClick={() => {
            setIsSideNavbarOpen(false);
            setOpenDropdown(null);
          }}
          
        >
          <div className="justify-start duration-500 p-0 m-0">{subNav.icon}</div>
          <h2 className={`whitespace-pre duration-500 ${!isSideNavbarOpen && "opacity-0 translate-x-28 overflow-hidden"}`}>
            {subNav.name}
          </h2>
        </Link>
      ))}
    </div>
  );
};

export const SideNavbar = ({ navigation, isSideNavbarOpen, toggleSideNavbar, setIsSideNavbarOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <>
      <div
        className={`lg:bg-[#000D27] min-h-screen ${isSideNavbarOpen ? "w-64" : "w-16 "}
       duration-700 px-4 z-[1000] bg-white`}
        style={{ position: "fixed" }}
      >
        <div className="pt-2 flex justify-start gap-7">
          <div className="lg:text-white md:text-black">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={toggleSideNavbar}
            />
          </div>
          <div className={`whitespace-pre duration-500 ${!isSideNavbarOpen && "opacity-0 translate-x-28 overflow-hidden"}`}></div>
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {navigation.map((nav, i) => (
            <div key={i}>
              {Array.isArray(nav) ? (
                <div>
                  <div
                    className="group flex items-center duration-500 text-base gap-7 font-medium p-1 rounded-md lg:text-white lg:hover:bg-white lg:hover:text-[#040430] cursor-pointer"
                    onClick={() => handleDropdownClick(i)}
                  >
                    <div className="justify-start duration-500 p-0 m-0">
                        <span>{nav[0].icon}</span>
                        
                         </div>
                    <div className={`flex w-96 justify-between whitespace-pre duration-500 ${!isSideNavbarOpen && "opacity-0 translate-x-28 overflow-hidden"}`}>
                      <div className="">{nav[0].name}</div>
                      <div className="justify-end">{DropdownIcon}</div>
                    </div>
                  </div>
                  {openDropdown === i && (
                    <DropdownMenu
                      subNavigation={nav}
                      isSideNavbarOpen={isSideNavbarOpen}
                      setIsSideNavbarOpen={setIsSideNavbarOpen}
                      setOpenDropdown={setOpenDropdown}
                    />
                  )}
                </div>
              ) : (
                <Link
                  to={nav.link}
                  key={i}
                  className={
                    "group flex items-center duration-500 text-base gap-7 font-medium p-1 rounded-md lg:text-white lg:hover:bg-white lg:hover:text-[#040430]"
                  }
                  onClick={() => setIsSideNavbarOpen(false)}
                >
                  <div className="justify-start duration-500 p-0 m-0">{nav.icon}</div>
                  <h2 className={`whitespace-pre duration-500 ${!isSideNavbarOpen && "opacity-0 translate-x-28 overflow-hidden"}`}>
                    {nav.name}
                  </h2>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
