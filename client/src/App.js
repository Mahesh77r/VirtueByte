<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Laksh from './Pages/Laksh/Laksh';
=======
import React,{useState} from 'react'
import { SideNavbar } from './Components/SideNavbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Mahesh } from './Pages/Mahesh';
import Spandan from './Pages/spandan/Spandan';
import LaxmiNarayan from './Pages/LaxmiNarayan';
>>>>>>> a876c94a9cac16d2351c785fff226653f25cbb37

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
<<<<<<< HEAD
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Laksh/>
    </div>
=======
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
>>>>>>> a876c94a9cac16d2351c785fff226653f25cbb37
  );
}

export default App;
