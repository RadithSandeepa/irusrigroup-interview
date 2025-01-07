import React, {useState} from 'react';
import heroImage from './assets/hero_image1.jpg';
import bgImage from './assets/hero_image2.jpg';
import Place1 from './assets/place1.jpg';
import Place2 from './assets/place2.jpg';
import Place3 from './assets/place3.jpg';
import Place4 from './assets/place4.jpg';
import Place5 from './assets/place5.jpg';
import Place6 from './assets/place6.jpg';
import Navbar from './components/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlane, faMapLocationDot, faDollarSign, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import FlightForm from './components/FlightForm/FlightForm'
import Section2 from './components/Section2/Section2';

const App = () => {

  const [activeButton, setActiveButton] = useState('Business Class'); // State to track the active button
  const [activeTripType, setActiveTripType] = useState('One Way');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleTripTypeClick = (tripType) => {
    setActiveTripType(tripType);
  };

  return (
    <div className="font-quanbold text-gray-800">
      <Navbar />
      {/* Hero Section */}
      <section
      className="relative text-white h-screen custom1:flex items-center justify-center z-0"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-custom-dark/100 via-custom-dark/70 to-transparent"></div>
        <h1 className="custom1:block hidden sm:text-4xl md:text-5xl lg:text-5xl mb-4 text-white z-10">
          Explore the World Together <br/> with Premium travel
        </h1>
        <div className="relative container mx-auto flex flex-col lg:flex-row items-center h-screen custom1:hidden">
          <div className="lg:w-1/2">
            <h1 className="sm:text-4xl md:text-4xl lg:text-5xl mb-4 text-white">
              Explore the World Together with Premium travel
            </h1>
            <p className="text-lg mb-6">Get upto 50% Discount</p>
            <div className="absolute bottom-0 flex flex-col items-center space-y-6 mb-32 w-36">
                <div className="w-6 h-6 flex items-center justify-center bg-transparent text-white cursor-pointer">
                  <div className='relative flex items-center space-x-2 group p-1 pl-4 pr-[14px] rounded-full transition-all duration-300 hover:bg-darkpurple'>
                  <span className="opacity-0 whitespace-nowrap -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Flight Deals</span>
                  <div className='p-0 w-9 h-9 flex items-center justify-center -translate-x-11 group-hover:translate-x-3 rounded-full group-hover:bg-white transition-all duration-300'>
                   <FontAwesomeIcon icon={faPlane} className="text-3xl group-hover:text-darkpurple group-hover:text-xl transition-colors duration-300" /> 
                  </div>
                  </div>
                </div>
                <div className="w-6 h-6 flex items-center justify-center bg-transparent text-white cursor-pointer">
                  <div className='relative flex items-center space-x-2 group p-1 pl-4 pr-[14px] rounded-full transition-all duration-300 hover:bg-darkpurple'>
                  <span className="opacity-0 whitespace-nowrap -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Book Now</span>
                  <div className='p-0 w-9 h-9 flex items-center justify-center -translate-x-10 group-hover:translate-x-3 rounded-full group-hover:bg-white transition-all duration-300'>
                  <FontAwesomeIcon icon={faArrowRight} className="text-3xl transform rotate-[-45deg] group-hover:text-darkpurple group-hover:text-xl transition-colors duration-300" />
                  </div>
                  </div>
                </div>
                <div className="w-6 h-6 flex items-center justify-center bg-transparent text-white cursor-pointer">
                  <div className='relative flex items-center space-x-2 group p-1 pl-4 pr-[14px] rounded-full transition-all duration-300 hover:bg-darkpurple'>
                  <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Destinations</span>
                  <div className='p-0 w-9 h-9 flex items-center justify-center -translate-x-12 group-hover:translate-x-3 rounded-full group-hover:bg-white transition-all duration-300'>
                  <FontAwesomeIcon icon={faMapLocationDot} className="text-3xl group-hover:text-darkpurple group-hover:text-xl transition-colors duration-300" />
                  </div>
                  </div>
                </div>
                <div className="w-6 h-6 flex items-center justify-center bg-transparent text-white cursor-pointer">
                  <div className='relative flex items-center space-x-2 group p-1 pl-4 pr-[14px] rounded-full transition-all duration-300 hover:bg-darkpurple'>
                  <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Luxury</span>
                  <div className='p-0 w-9 h-9 flex items-center justify-center -translate-x-7 group-hover:translate-x-3 rounded-full group-hover:bg-white transition-all duration-300'>
                  <FontAwesomeIcon icon={faDollarSign} className="text-3xl group-hover:text-darkpurple group-hover:text-xl transition-colors duration-300" />
                  </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="lg:w-1/2 text-right">
            {/* Optional: Add content or images here */}
          </div>
        </div>
      </section>
      <section className="h-screen snap-start bg-custom-dark">
        <div className="h-[25vh] bg-custom-dark flex justify-center items-center relative">
          {/* Buttons Container */}
          <div className="mt-10 flex border-2 rounded-tl-lg rounded-tr-lg">
            <button className={`px-8 py-4  rounded-tl-lg text-white  hover:bg-darkpurple transition-all duration-300 ${
              activeButton === 'Business Class' ? 'bg-darkpurple' : 'hover:bg-darkpurple'
            }`}
            onClick={() => handleButtonClick('Business Class')}>
              Business Class
            </button>
            <button className={`px-8 py-4  rounded-tr-lg text-white  hover:bg-darkpurple transition-all duration-300 ${
              activeButton === 'First Class' ? 'bg-darkpurple' : 'hover:bg-darkpurple'
            }`}
            onClick={() => handleButtonClick('First Class')}>
              First Class
            </button>
          </div>
          {/* White Field below the buttons */}
          <div className="absolute top-[140px] left-0 right-0 mx-auto w-[80%] min-h-[450px] rounded-lg flex flex-col items-center gap-7 custom0:p-4 border-2 border-solid border-white p-2"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          >
          <div className="flex justify-center mt-3 mx-4 bg-gray-200 w-[20vw] h-8 rounded-md custom2:w-[15vw] custom4:w-[40vw] custom5:w-[50vw]">
            <div className="w-[33%] flex justify-center items-center text-xs p-[3px]">
              <div className={`w-full h-full text-gray-400 flex items-center justify-center rounded hover:bg-white hover:text-red-700 cursor-pointer ${activeTripType === 'One Way' ? 'bg-white text-red-700' : 'hover:bg-white hover:text-red-700'
              }`} onClick={() => handleTripTypeClick('One Way')}
              >One Way</div>
            </div>
            <div className="w-[33%] border-l border-r border-gray-300 flex justify-center items-center text-xs p-[3px]">
              <div className={`w-full h-full text-gray-400 flex items-center justify-center rounded hover:bg-white hover:text-red-700 cursor-pointer ${activeTripType === 'Round Trip' ? 'bg-white text-red-700' : 'hover:bg-white hover:text-red-700'
              }`} onClick={() => handleTripTypeClick('Round Trip')}
              >Round Trip</div>
            </div>
            <div className="w-[33%] flex justify-center items-center text-xs p-[3px]">
              <div className={`w-full h-full text-gray-400 flex items-center justify-center rounded hover:bg-white hover:text-red-700 cursor-pointer ${activeTripType === 'Multicity' ? 'bg-white text-red-700' : 'hover:bg-white hover:text-red-700'
              }`} onClick={() => handleTripTypeClick('Multicity')}
              >Multicity</div>
            </div>
          </div>
          <FlightForm />
          {/* Search Function */}
            <div className="absolute bottom-[-11%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[13%] custom6:left-1/3">
              <div className="flex items-center bg-darkpurple rounded-full shadow-md pl-4 py-[2px] h-12 w-[175px]">
                <input
                  type="text"
                  placeholder="Search Flight"
                  className="w-full bg-transparent focus:outline-none placeholder-white text-white"
                />
                <div className='bg-white rounded-full w-[55px] h-[40px] flex justify-center items-center mr-0.5'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#150C15",}} />  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen snap-start">
        <Section2 />
      </section>
      <section className="h-screen snap-start ">
      <div className="bg-custom-dark h-[90vh] flex flex-col md:flex-row justify-around items-center py-10 px-5 text-white">
          {/* Social Icons Container */}
          <div className="flex flex-col items-center w-full md:w-1/4 p-4  custom8:items-start custom8:p-0 mb-2">
            <div className="flex justify-evenly w-full mb-4 custom8:justify-start custom8:space-x-4">
              <FontAwesomeIcon icon={faFacebookF} className="text-2xl cursor-pointer" />
              <FontAwesomeIcon icon={faTwitter} className="text-2xl cursor-pointer" />
              <FontAwesomeIcon icon={faInstagram} className="text-2xl cursor-pointer" />
              <FontAwesomeIcon icon={faYoutube} className="text-2xl cursor-pointer" />
            </div>
            <p className="text-sm ml-12 custom7:ml-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex minus temporibus veritatis impedit maiores dicta hic rem totam quia consectetur!</p>
          </div>
          {/* Quick Links Container */}
          <div className="flex flex-col w-full md:w-1/4 items-center custom8:items-start mb-2">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2  custom8:mr-3">
              <li className="cursor-pointer hover:underline">Submit Article</li>
              <li className="cursor-pointer hover:underline">Blog</li>
              <li className="cursor-pointer hover:underline">Freebies</li>
              <li className="cursor-pointer hover:underline">Pricing</li>
            </ul>
          </div>
          {/* Contact Us Container */}
          <div className="flex flex-col w-full md:w-1/4 mb-2">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:underline">Phone: (888) 231 4522 258</li>
              <li className="cursor-pointer hover:underline">Address: 3129 Doctors Drive, Los Angeles, California, USA</li>
            </ul>
          </div>
          {/* Gallery Showcase Container */}
          <div className="flex flex-col w-full md:w-1/4">
            <h3 className="text-lg font-bold mb-4">Gallery Showcase</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="w-full h-20 bg-gray-400"   style={{
                backgroundImage: `url(${Place1})`,
                backgroundSize: "cover",
                backgroundPosition: "right",
              }}></div>
              <div className="w-full h-20 bg-gray-400"   style={{
                backgroundImage: `url(${Place2})`,
                backgroundSize: "cover",
                backgroundPosition: "right",
              }}></div>
              <div className="w-full h-20 bg-gray-400"   style={{
                backgroundImage: `url(${Place3})`,
                backgroundSize: "cover",
                backgroundPosition: "right",
              }}></div>
              <div className="w-full h-20 bg-gray-400"   style={{
                backgroundImage: `url(${Place4})`,
                backgroundSize: "cover",
                backgroundPosition: "right",
              }}></div>
              <div className="w-full h-20 bg-gray-400"   style={{
                backgroundImage: `url(${Place5})`,
                backgroundSize: "cover",
                backgroundPosition: "right",
              }}></div>
              <div className="w-full h-20 bg-gray-400"   style={{
                backgroundImage: `url(${Place6})`,
                backgroundSize: "cover",
                backgroundPosition: "right",
              }}></div>
            </div>
          </div>
        </div>
        <div className="bg-darkpurple h-[10vh] flex justify-center items-center">
          <p className="text-sm text-white">© 2025 Premium Travel. All rights reserved.</p>
        </div>
      </section>
    </div>
  )
}

export default App