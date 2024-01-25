import React from "react";
import Card from "./Card";
import {  FaUserGroup } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { AiOutlineSmile } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {


  var settings = {
    
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
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
    <div className="w-[90vw] mx-auto">
      <h2 className="text-cyan-600 text-3xl md:text-4xl font-semibold text-center py-4">
        Patient Recovery Stories
      </h2>
      <h4 className="text-zinc-100 text-xl font-semibold text-center pb-2">
        Don't just take our word for it
      </h4>


      <div className="w-11/12 mx-auto px-12 my-8 py-8 flex justify-between md:justify-around  items-center border-2 bg-zinc-700 border-zinc-500 rounded-md">

        <div className="flex flex-col justify-center items-center gap-1">
          <span className="text-2xl  md:text-4xl border-1 rounded-full p-4 bg-cyan-700 text-zinc-100"> <FaUserGroup/> </span>
          <span className="text-md md:text-2xl font-semibold text-zinc-100"> 20000 + </span>
          <span className="text-zinc-200 text-sm font-normal"> Patients </span>
        </div>

        <div className="flex flex-col justify-center items-center gap-1">
          <span className="text-2xl  md:text-4xl border-1 rounded-full p-4 bg-cyan-700 text-zinc-100"> <MdDateRange/> </span>
          <span className="text-md md:text-2xl  font-semibold text-zinc-100"> 1 lakh + </span>
          <span className="text-zinc-200 text-sm font-normal"> Sessions </span>
        </div>

        <div className="flex flex-col justify-center items-center gap-1">
          <span className="text-2xl  md:text-4xl border-1 rounded-full p-4 bg-cyan-700 text-zinc-100"> <AiOutlineSmile/> </span>
          <span className="text-md md:text-2xl  font-semibold text-zinc-100"> 9.6 / 10 </span>
          <span className="text-zinc-200 text-sm font-normal"> Avg. rating </span>
        </div>

      </div>

  
        <div className="w-11/12 h-[250px]  mx-auto  ">
        <Slider {...settings}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
          

         
        

       
        </div>
      
    </div>
  );
}

export default Testimonials;
