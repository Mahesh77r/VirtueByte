
import Laksh from './Pages/Laksh/Laksh';

import React,{useState} from 'react'
import { SideNavbar } from './Components/SideNavbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Mahesh } from './Pages/Mahesh';
import Spandan from './Pages/spandan/Spandan';
import {navigation}  from './Components/NavLink'
function App() {
  const [isSideNavbarOpen, setIsSideNavbarOpen] = useState(true);

  const toggleSideNavbar = () => {
    setIsSideNavbarOpen(!isSideNavbarOpen);
  };
  const contentMargin = isSideNavbarOpen ? 'lg:ml-64 md:ml-20' : 'lg:ml-16 16';

 
  return (

    <>
      <BrowserRouter>
        <SideNavbar
          navigation={navigation}
          isSideNavbarOpen={isSideNavbarOpen}
          toggleSideNavbar={toggleSideNavbar}
          setIsSideNavbarOpen={setIsSideNavbarOpen}
        />
        <div className={`flex-1 overflow-x-hidden ms-14 ${contentMargin} duration-700 `}>
          <Routes>
            <Route path='/msr' element={<Mahesh/>}/>
            <Route path='/msr2' element={<Mahesh/>}/>
            <Route path='/spa' element={<Spandan/>}/>
            <Route path='/lax' element={<Laksh/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
