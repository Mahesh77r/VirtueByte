import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Footer from './Components/Footer/Footer';
import LoginPopUp from './Components/LoginPopUp/LoginPopUp';
import Sidebar from './Components/Sidebar/Sidebar';


function App() {

  const [showSidebar, setShowSidebar] = useState(false);
  const [showLoginPopUp, setshowLoginPopUp] = useState(false);
  return (
    <>
       {showLoginPopUp ? <LoginPopUp setshowLoginPopUp={setshowLoginPopUp}/> : <></>}

{showSidebar ? (
  <Sidebar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
) : (
  <></>
)}

    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
