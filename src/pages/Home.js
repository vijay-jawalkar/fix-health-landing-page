import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import DoctorsList from '../components/DoctorsList'
import Testimonials from '../components/Testimonials'
import HeroBg from "../images/doctor-2.jpg"

function Home() {
    
  const myStyle = { 
    backgroundImage: `url(${HeroBg})`
}

  return (
    <div>
         <div style={myStyle} className='bg-cover bg-no-repeat w-full'>
      <Header/>
      <Hero/>
      </div>
      
      <DoctorsList/>
   
 
      <Testimonials/>
    </div>
  )
}

export default Home