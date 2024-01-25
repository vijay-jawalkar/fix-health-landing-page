import React, { useState } from 'react'


function Hero() {
    const [age, setAge] = useState(0);


  return (
    <div>
          {/* hero image */}
      <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
    <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
    <div className="md:max-w-md   bg-white shadow-lg rounded-xl overflow-hidden lg:absolute lg:top-48 lg:right-32  ">
    <div className=" py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
     <span className='font-semibold text-2xl'>  Book an Appointment for </span>  <span className='font-bold text-2xl'>   FREE </span>
     <p className='text-cyan-300 text-sm pt-3'>60+ Expert Physiotherapists for 200+ Conditions</p>
    </div>
    <form className="py- my-6 px-6 " action="" method="POST">

        <div className='md:flex gap-2'>

        <div className="mb-4">
            <label className="inline-block text-gray-700 font-bold mb-2" for="name">
                Name
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" placeholder="Enter your name" />
        </div>
       
        <div className="mb-4 ">
            <label className="block text-gray-700 font-bold mb-2" for="phone">
                Phone Number
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="number" placeholder="Enter your phone number" />
        </div>
        </div>

        <div className='md:flex gap-2'>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="age">
                Age
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="age" type="number" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="city">
                City
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city" type="text" placeholder="Enter your city" />
        </div>
        </div>
       
       

        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="company">
                Company
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="company" type="text" placeholder="Enter your company" />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="reason">
                Chief Complaints
            </label>
            <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="reason" type="text" placeholder="Describe your symptoms for seeking physiotherapy services."> </textarea>
        </div>
        
    
        <div className="mb-4 flex justify-start items-center gap-1">
        <input type="checkbox" id="experience" name="vehicle1" disabled = {age <= 40 } />
            <label class="block text-gray-700 font-semibold " for="experience">
            Any previous experience with physiotherapy
            </label>
           
        </div>

        <div className="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="service">
            best available doctors
            </label>
            <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="service" name="service">
                <option value="">Select a doctor</option>
                <option value="haircut">Mahesh Kumar</option>
                <option value="coloring">Dilip Joshi</option>
                <option value="styling">Rahul Arya</option>
                <option value="facial">Abhinav Rajput</option>
            </select>
        </div>
        <div className="flex items-center justify-center mb-4">
            <button
                className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                type="submit">
                Book Appointment
            </button>
        </div>

    </form>
</div>
        
    </div>
</div>
    </div>
  )
}

export default Hero