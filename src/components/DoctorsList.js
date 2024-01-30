import React, { useState, useEffect } from 'react'
import DoctorCard from './DoctorCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DoctorsList() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        async function getDoctorsDetails(){
          
        
            const response = await fetch("https://fix-health-server.onrender.com/doctors");
            const json = await response.json();
            console.log(json)
            setDoctors(json)
           
            }

            getDoctorsDetails()
         

          

      }, [])

    var settings = {
    
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    

  return (
    <div className='mx-auto w-[90vw] my-6'>
         <h2 className="text-cyan-600 text-3xl lg:text-4xl font-bold text-center py-4">
         Meet Our Experts 
      </h2>
      <h4 className="text-zinc-100 text-xl lg:text-2xl font-semibold text-center pb-2">
      Experience the Benefits of Advanced Technology and Expert Care
      </h4>


      <div className='mx-auto w-11/12  my-8'>
     <Slider {...settings}>
        {
            doctors.map((doctor, index) => {
                return (  <DoctorCard key={index} doctor={doctor} /> )
            })
        }
     </Slider>
      
      
        </div>
    </div>
  )
}

export default DoctorsList