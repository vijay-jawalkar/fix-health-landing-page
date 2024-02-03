import React, { useState, useEffect, Suspense } from "react";
import { Loading } from "./Loading";
import { useLocation} from "react-router-dom"


function Hero() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
    doctor: "",
  });
  const [doctors, setDoctors] = useState([]);
  const [isBooked, setIsBooked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const search = useLocation().search;
  const q = new URLSearchParams(search).get("city")
  console.log(q)

  useEffect(() => {
    if(q != null){
      setFormData({ ...formData, city: q })
      setStep(4)
    }
   
  }, [q])

  useEffect(() => {


    async function getDoctorsDetails() {

      try{
        const response = await fetch(
          "https://fix-health-server.onrender.com/doctors"
        );
        const json = await response.json();
        // console.log(json);
        const filterDoctors = () => {
          const filteredDoctors = json.filter((item) => {
            return item.city === formData.city.toLowerCase();
          });
          setDoctors(filteredDoctors);
         
        };
        filterDoctors();
      }catch(error){
        console.log("error", error)
        setIsLoading(true)
      }finally{
        setIsLoading(false)
      }
      
    }

    getDoctorsDetails();
  }, [formData.city]);

  function onNext() {
    setStep((prev) => prev + 1);
  }

  function onPrevious() {
    setStep((prev) => prev - 1);
  }

  async function handleAppointment(event) {
    event.preventDefault();
    setIsBooked(true);

    const appointmentDetail = {
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      age: formData.age,
      city: formData.city,
      company: formData.company,
      chiefComplaints: formData.chiefComplaints,
      doctor: formData.doctor,
    };

    const requestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointmentDetail),
    };

    const response = await fetch(
      `https://fix-health-server.onrender.com/appointment`,
      requestOption
    );

    if (!response.ok) {
      throw { message: response.statusText, status: response.status }; //eslint-disable-line
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
              <span className="font-semibold text-2xl">
                {" "}
                Book an Appointment for{" "}
              </span>{" "}
              <span className="font-bold text-2xl"> FREE </span>
              <p className="text-cyan-300 text-sm pt-3">
                60+ Expert Physiotherapists for 200+ Conditions
              </p>
            </div>

            {isBooked ? (
              <div className=" text-center py-6 px-2">
                <h2 className="text-3xl text-green-800 font-bold ">
                  {" "}
                  Exciting news!{" "}
                </h2>
                <p className="text-lg text-zinc-800 py-4">
                  {" "}
                  Your physiotherapy session is booked, marking the beginning of
                  your journey to a healthier and more vibrant you!{" "}
                </p>
                <button
                  onClick={() => setIsBooked(false)}
                  className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form className="py- my-6 px-6 " onSubmit={handleAppointment}>
                {step === 1 && (
                  <>
                    <div className="mb-4">
                      <label
                        className="inline-block text-gray-700 font-bold mb-2"
                        for="name"
                      >
                        Name
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="mb-4 ">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        for="phone"
                      >
                        Phone Number
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="text"
                        name="contact"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phoneNumber: e.target.value,
                          })
                        }
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        for="age"
                      >
                        Age
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="age"
                        type="text"
                        name="age"
                        placeholder="Enter your age"
                        value={formData.age}
                        onChange={(e) =>
                          setFormData({ ...formData, age: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        for="city"
                      >
                        City
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="city"
                        type="text"
                        name="city"
                        placeholder="Enter your city"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        for="company"
                      >
                        Company
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="company"
                        type="text"
                        name="company"
                        placeholder="Enter your company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        required
                      />
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        for="reason"
                      >
                        Chief Complaints
                      </label>
                      <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="reason"
                        type="text"
                        name="complaint"
                        value={formData.chiefComplaints}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            chiefComplaints: e.target.value,
                          })
                        }
                        placeholder="Describe your symptoms for seeking physiotherapy services."
                        required
                      >
                        {" "}
                      </textarea>
                    </div>
                  </>
                )}

                {step === 4 && (
                  <div className="flex flex-col  gap-2 mb-4">
                    <div>
                      <label
                        class="block text-gray-700 font-bold mb-2"
                        for="service"
                      >
                        Best Available Doctors
                      </label>
                    </div>

                    <div className="flex flex-col items-start gap-3">
                      { isLoading ?
                      
                      (
                        <button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
<svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
</svg>
Loading...
</button>
                      )
                      :
                   doctors &&   doctors.map((doctor, index) => {
                        return (
                          <div
                            key={index}
                            className="flex justify-center items-center gap-2"
                          >
                            <input
                              type="radio"
                              name="doctor"
                              value={doctor.name}
                              checked={formData.doctor === doctor.name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  doctor: e.target.value,
                                })
                              }
                            />
                            <img
                              src={doctor.image}
                              alt="img"
                              className="w-12 h-12 rounded-full border border-zinc-700"
                            />

                            <div className="flex flex-col  gap-1">
                              <label
                                for="anurag1"
                                className="text-md text-zinc-950"
                              >
                                {doctor.name}
                              </label>
                              <span className="text-xs text-zinc-600">
                                {" "}
                                {doctor.qualification}{" "}
                              </span>
                            </div>
                          </div>
                        );
                      }) 
                 
                      }
                    </div>
                 
                  
                  </div>
                )}

                <div
                  className={`flex justify-between items-center ${
                    step === 1 ? "flex-row-reverse" : "flex-row"
                  } `}
                >
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={onPrevious}
                      className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline a"
                    >
                      {" "}
                      Previous{" "}
                    </button>
                  )}

                  {step < 4 && (
                    <button
                      type="button"
                      onClick={onNext}
                      className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline "
                    >
                      {" "}
                      Next{" "}
                    </button>
                  )}

                  {step === 4 && (
                    <button
                      className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Book Appointment
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
