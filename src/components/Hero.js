import React, { useState, useEffect } from 'react'


function Hero() {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        age: '',
        city: '',
        company: '',
        chiefComplaints: '',
        doctor: '',
       
      });
      const[doctors, setDoctors] = useState([]);
      const [isBooked, setIsBooked] = useState(false);

      useEffect(() => {
        async function getDoctorsDetails(){
          
        
            const response = await fetch("https://fix-health-server.onrender.com/doctors");
            const json = await response.json();
            console.log(json)
            const filterDoctors = () => {
                const filteredDoctors = json.filter( (item) => {
                    return item.city === formData.city.toLowerCase()
                });
                setDoctors(filteredDoctors)
              };
              filterDoctors()
           
            }

            getDoctorsDetails()
         

          

      }, [formData.city])



    function onNext(){
        setStep(prev => prev + 1)
    }

    function onPrevious(){
        setStep(prev => prev - 1)
    }



    async function handleAppointment(event){
        event.preventDefault();
        setIsBooked(true)

        const appointmentDetail = {
            name: formData.name,
            phoneNumber: formData.phoneNumber,
            age: formData.age,
            city: formData.city,
            company: formData.company,
            chiefComplaints: formData.chiefComplaints,
            doctor: formData.doctor
        }

       
        
    const requestOption = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(appointmentDetail)
      }
      
      const response = await fetch(`https://fix-health-server.onrender.com/appointment`, requestOption)
     

      if(!response.ok){
        throw { message: response.statusText, status: response.status};  //eslint-disable-line
    }
  
      const data = await response.json(); //eslint-disable-line
    //   console.log(data)
    

    
    }

    


  return (
    <div>
          {/* hero image */}
      <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
    <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
    <div className="md:max-w-md   bg-white shadow-lg rounded-xl overflow-hidden lg:absolute lg:top-48 lg:left-32  ">
    <div className=" py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
     <span className='font-semibold text-2xl'>  Book an Appointment for </span>  <span className='font-bold text-2xl'>   FREE </span>
     <p className='text-cyan-300 text-sm pt-3'>60+ Expert Physiotherapists for 200+ Conditions</p>
    </div>


     {
        isBooked ? (
            <div className=' text-center py-6 px-2'> 
                   <h2 className='text-3xl text-green-800 font-bold '> Exciting news!  </h2>
                 <p className='text-lg text-zinc-800 py-4'> Your physiotherapy session is booked, marking the beginning of your journey to a healthier and more vibrant you! </p>
                   <button
                  onClick={() => setIsBooked(false)}
                             className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                      >
                        Book Another Appointment
                        </button>
              </div>
        )
        :
        (
            <form className="py- my-6 px-6 " onSubmit={handleAppointment}>

    
            {
             step === 1 && (
                 <>
                   <div className="mb-4">
                     <label className="inline-block text-gray-700 font-bold mb-2" for="name">
                         Name
                     </label>
                     <input
                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         id="name" type="text" name = "name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Enter your name" required/>
                 </div>
                
                 <div className="mb-4 ">
                     <label className="block text-gray-700 font-bold mb-2" for="phone">
                         Phone Number
                     </label>
                     <input
                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         id="phone" type="text" name = "contact" value={formData.phoneNumber} onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}  placeholder="Enter your phone number" required />
                 </div>
                 </>
             )
            }
         
            {
             step === 2 && (
                 <>
                      <div className="mb-4">
                     <label className="block text-gray-700 font-bold mb-2" for="age">
                         Age
                     </label>
                     <input
                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         id="age" type="text" name = "age" placeholder="Enter your age" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})}  required/>
                 </div>
         
                 <div className="mb-4">
                     <label className="block text-gray-700 font-bold mb-2" for="city">
                         City
                     </label>
                     <input
                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         id="city" type="text" name='city' placeholder="Enter your city" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} required />
                 </div>
               
                
                
         
                 <div className="mb-4">
                     <label className="block text-gray-700 font-bold mb-2" for="company">
                         Company
                     </label>
                     <input
                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         id="company" type="text" name='company' placeholder="Enter your company" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} required />
                 </div>
                 </>
             )
            }
         
               
              {
                 step === 3 && (
                     <>
                     
                 <div className="mb-4">
                     <label className="block text-gray-700 font-bold mb-2" for="reason">
                         Chief Complaints
                     </label>
                     <textarea
                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         id="reason" type="text" name='complaint' value={formData.chiefComplaints} onChange={(e) => setFormData({...formData, chiefComplaints: e.target.value})} placeholder="Describe your symptoms for seeking physiotherapy services." required> </textarea>
                 </div>
                     </>
                 )
              } 
         
     
         
                 {
                     step === 4 && (
                         <>
                            <div className="mb-4">
                     <label class="block text-gray-700 font-bold mb-2" for="service">
                     best available doctors
                     </label>
                     <select
                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                         id="service" name="doctor" value={formData.doctor} onChange={(e) => setFormData({...formData, doctor: e.target.value})} required>
                         <option value="">Select a doctor</option>
         
                         {
                             doctors.map((doctor, index) => {
                                 return (
                                     <option key={index} value={doctor.name}>{doctor.name}</option>
                                 )
                             })
                         }
         
                      
                      
                     </select>
                 </div>
                         </>
                     )
                 }
             
                <div className= {`flex justify-between items-center ${step === 1 ? "flex-row-reverse" : "flex-row"} `}> 
                {
                 step > 1 && (  <button type='button' onClick={onPrevious} className='bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline a'> Previous </button> )
                }
                
                {
                 step < 4 && (   <button type='button' onClick={onNext} className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline "> Next </button> )
                }
         
         
         {
                 step === 4 && (
                 
                     <button
                        
                         className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                         type="submit">
                         Book Appointment
                     </button>
          
                 )
                }
               
                </div>
         
              
           
         
             </form>
        )
     }


           
       
  
</div>
        
    </div>
</div>
    </div>
  )
}

export default Hero