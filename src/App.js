import Header from './components/Header';
import Hero from './components/Hero';
import HeroBg from "./images/doctor-2.jpg"
import Testimonials from './components/Testimonials';
import './App.css';

function App() {

  const myStyle = { 
    backgroundImage: `url(${HeroBg})`
}

  return (
    <div className = "w-full min-h-screen bg-zinc-900" >
     

      <div style={myStyle} className='bg-cover bg-no-repeat w-full'>
      <Header/>
      <Hero/>
      
      </div>
      <Testimonials/>
      
    </div>
  );
}

export default App;
