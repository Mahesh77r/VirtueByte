import React,{useState} from 'react'
import { SideNavbar } from './Components/SideNavbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Mahesh } from './Pages/Mahesh';
import Spandan from './Pages/spandan/Spandan';
import LaxmiNarayan from './Pages/LaxmiNarayan';

function App() {
  const [isSideNavbarOpen, setIsSideNavbarOpen] = useState(true);

  const toggleSideNavbar = () => {
    setIsSideNavbarOpen(!isSideNavbarOpen);
  };
  const contentMargin = isSideNavbarOpen ? 'ml-64' : 'ml-16';

  const navigation =[
    { name: 'Mahesh', link: '/msr'},
    { name: 'Spandan', link: '/spa'},
    { name: 'Laxminarayan', link: '/lax'},
]
  return (
    <>
      <BrowserRouter>
        <SideNavbar
          navigation={navigation}
          isSideNavbarOpen={isSideNavbarOpen}
          toggleSideNavbar={toggleSideNavbar}
        />
        <div className={`flex-1 overflow-x-hidden ${contentMargin} duration-700 `}>
          <Routes>
            <Route path='/msr' element={<Mahesh/>}/>
            <Route path='/spa' element={<Spandan/>}/>
            <Route path='/lax' element={<LaxmiNarayan/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
