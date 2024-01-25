import React, { useState } from "react";

import { FaBars, FaTimes  } from "react-icons/fa";

function Header() {
const [nav, setNav] = useState(false)

  return (
    <div>
      <div className="w-full h-12 bg-cyan-950 py-4 px-1 flex justify-center items-center ">
        <p className="text-zinc-50 font-semibold">
          {" "}
          ✨ YourPhysio is now FixHealth ✨{" "}
        </p>
      </div>

      <div className="flex justify-between items-center px-6 md:px-28 my-8  ">
        <div className="w-[120px] h-6">
          {" "}
          <img
            src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg"
            alt="logo"
          />{" "}
        </div>

       {/* laptop version navigation list */}
        <nav className="hidden md:flex gap-6 items-center text-zinc-700 font-medium">
          <span className="cursor-pointer hover:text-zinc-800"> Home</span>
          <span className="cursor-pointer hover:text-zinc-800"> Services</span>
          <span className="cursor-pointer hover:text-zinc-800"> Blogs</span>
          <span className="cursor-pointer hover:text-zinc-800"> About</span>

          <button className="bg-cyan-600 py-2 px-3 text-sm rounded-md font-semibold hover:bg-cyan-500 text-zinc-100"> Book Now</button>
        </nav>

        {/* mobile version navigation list */}
        <div 
        onClick={() => setNav(true)}
        className="text-zinc-600 text-2xl md:hidden ">
         <FaBars />
       
        </div>

        {
          nav && (
            <nav className="w-[60vw] h-screen bg-zinc-600 flex flex-col justify-start  md:hidden gap-6 items-center text-zinc-100 absolute right-0 top-0 z-10 pt-14 rounded-tl-lg rounded-bl-lg duration-500 ">

            <div 
            onClick={() => setNav(false)}
            className="text-zinc-100 text-2xl absolute left-2 top-2"> <FaTimes/> </div>
            <span className="cursor-pointer hover:text-zinc-300"> Home</span>
            <span className="cursor-pointer hover:text-zinc-300"> Services</span>
            <span className="cursor-pointer hover:text-zinc-300"> Blogs</span>
            <span className="cursor-pointer hover:text-zinc-300"> About</span>
  
            <button className="bg-cyan-600 py-2 px-3 text-sm rounded-md font-semibold hover:bg-cyan-500"> Book Now</button>
          </nav>
          )
        }

       

      </div>

     


  
    </div>
  );
}

export default Header;
