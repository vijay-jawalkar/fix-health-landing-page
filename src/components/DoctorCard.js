import React from "react";


function DoctorCard({doctor}) {
    const {name, qualification, image} = doctor;
  
  return (
   
   <div className="max-w-xs bg-cyan-600  rounded-lg shadow mx-2 overflow-hidden">
  
        <img className="rounded-t-lg" src={image} alt="" />

    <div className="p-5 bg-zinc-800 ">
      
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-200">{name}</h5>
      
        <p className="mb-3 font-normal text-gray-400  line-clamp-1"> {qualification} </p>
        <p className="mb-3 font-normal text-gray-400  line-clamp-1"> 13 years of experience </p>
        
       <p className='flex justify-between items-center text-cyan-500 my-3'>
        <span > Sports Physiotherepy </span>
        <span > +5 more</span>
       </p>

       <button className="w-full px-6 py-3 text-zinc-100 border border-zinc-400 rounded-lg my-3 hover:bg-gray-600"> Know More </button>
    </div>
</div>
    
  );
}

export default DoctorCard;
