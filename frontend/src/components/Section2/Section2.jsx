import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const Section2 = () => {
  return (
    <div>
        <div className='pl-[100px] pt-[70px]'>
        <h1 className="text-3xl text-black">How it Works</h1>
        <p className="text-gray-400">
          These are the simple procedures that will make your purchasing process super easy <br/> and smooth. 
          And will help you to get your flight easily.
        </p>
      </div>
    
      {/* Side-by-Side Layout */}
      <div className="flex px-10 h-[500px] space-x-10 mt-10">
        {/* Left Section */}
        <div className="relative w-1/3 h-[80%] flex justify-start gap-[40px] pl-[80px] items-center hidden custom:flex">
          <div className="h-full w-full relative">
            {/* Vertical Dotted Line */}
            <div className='absolute left-[4px] top-[15px] transform -translate-x-1/2 h-[355px] border-l-2 border-dotted border-darkpurple'></div>

            {/* Big Purple Dots and Steps */}
            <div className="absolute w-full left-1/2 transform -translate-x-1/2 space-y-20">
              <div className='flex w-[100%] items-center gap-10'>
                <div className="w-2 h-2 bg-darkpurple rounded-full"></div>
                <div className='flex items-center gap-5'>
                  <div className='bg-black rounded-full w-8 h-8'></div>
                  <p className="text-lg text-darkpurple">Search Flights</p>
                </div>
              </div>
              <div className='flex w-[100%] items-center gap-10'>
                <div className="w-2 h-2 bg-darkpurple rounded-full"></div>
                <div className='flex items-center gap-5'>
                  <div className='bg-black rounded-full w-8 h-8'></div>
                  <p className="text-lg text-darkpurple">Fill Contact Form</p>
                </div>
              </div>
              <div className='flex w-[100%] items-center gap-10'>
                <div className="w-2 h-2 bg-darkpurple rounded-full"></div>
                <div className='flex items-center gap-5'>
                  <div className='bg-black rounded-full w-8 h-8'></div>
                  <p className="text-lg text-darkpurple">Choose Your Airline</p>
                </div>
              </div>
            </div>

            {/* Plane at the Bottom */}
            <div className="absolute bottom-[8px] left-[4px] transform -translate-x-1/2 w-8 h-18 rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faPlane} className="text-6xl rotate-[90deg] text-darkpurple" />
            </div>
            <div className="absolute bottom-[30px] left-[47px]">
                <div className='flex items-center gap-5'>
                  <div className='bg-black rounded-full w-8 h-8'></div>
                  <p className="text-lg text-darkpurple">Booking in 10 Minutes!</p>
                </div>
            </div>
          </div>
          
        </div>

        {/* Right Section */}
        <div className="w-full custom:w-1/2 flex flex-col justify-start">
          

          {/* Video Section */}
          <div className="w-full h-3/4 bg-black rounded-2xl overflow-hidden">
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube.com/embed/OCzzN8VZgfY?si=3O6xLkbg2M3O54-s" 
              title="Video" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2