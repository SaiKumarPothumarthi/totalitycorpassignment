import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.js'; 
import JumpToStartButton from './components/JumpToStartButton/JumpToStartButton';
import { PiHouseLineDuotone,PiBuildingsThin  } from "react-icons/pi";
import { FaBuildingShield } from "react-icons/fa6";
import { TbBuildingSkyscraper } from "react-icons/tb";
import './App.css';

const App = () => {
  return (
    <Router>
      <>
      <nav className='navbar'>
        <div>
          <h1 className='main-header'>PropFinder</h1>
          <p className='caption'>Discover Your Perfect Space</p>
        </div>
        <div>
        <PiHouseLineDuotone className='home-icon' />
        <TbBuildingSkyscraper className='home-icon'/>
        <FaBuildingShield className='home-icon'/>
        <PiBuildingsThin className='home-icon'/>
        </div>
        
    </nav>
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <JumpToStartButton /> 
      </div>

      </>
      
    </Router>
  );
};

export default App;