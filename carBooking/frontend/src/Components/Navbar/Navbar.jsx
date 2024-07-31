import React from 'react'
import './Navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import LoginPopUp from '../LoginPopUp/LoginPopUp';
import Sidebar from '../Sidebar/Sidebar';


const Navbar = ({ showSidebar, setShowSidebar, setshowLoginPopUp }) => {

    const[menu, setMenu] = useState("home");
    // const [showSidebar, setShowSidebar] = useState(false);
    // const [showLoginPopUp, setshowLoginPopUp] = useState(false);
  

  return (
    <>
    {/* {showLoginPopUp ? <LoginPopUp setshowLoginPopUp={setshowLoginPopUp}/> : <></>}
    {showSidebar ? (
        <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      ) : (
        <></>
      )} */}

  <div className='navbar-main-container'>
    <div className='navbar'>
      <div className="navbar-menu-logo">
      <div className="hamburger-menu">
     {/* <RiMenu2Line size={25} onClick={()=>setShowSidebar(!showSidebar)}/> */}
     {showSidebar?<RxCross2 size={25} color={'#01004C'} onClick={()=>setShowSidebar(!showSidebar)} />:<RiMenu2Line size={25} color={'#01004C'} onClick={()=>setShowSidebar(!showSidebar)}/>}
      </div>
      <h1>Logo</h1>
      </div>
    <ul className="navbar-menu"> 
      <Link to="/" className={menu==="home"?"active":"" } onClick={()=>setMenu("home")} >Home</Link>
      <Link to="/about" className={menu==="about"?"active":""} onClick={()=>setMenu("about")} >About-Us</Link>
      <Link to="/contact" className={menu==="contact"?"active":""} onClick={()=>setMenu("contact")} >Contact-Us</Link>
      <Link to="/blog" className={menu==="Blog"?"active":""} onClick={()=>setMenu("Blog")} >Blog</Link>
     
    </ul>
    <div className="navbar-right">
      <button onClick={()=>setshowLoginPopUp(true)}>sign in</button>
    </div>
  </div>
  </div>
  </>
  )
}

export default Navbar
