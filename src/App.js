import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HeroBg from "./images/doctor-2.jpg"
import './App.css';
import Testimonials from './components/Testimonials';
import DoctorsList from './components/DoctorsList';
import AllRoutes from './routes/AllRoutes';




function App() {

  const myStyle = { 
    backgroundImage: `url(${HeroBg})`
}

  return (
    <div className = "w-full min-h-screen bg-zinc-900" >
     
    <AllRoutes/>
     
      
    </div>
  );
}

export default App;
