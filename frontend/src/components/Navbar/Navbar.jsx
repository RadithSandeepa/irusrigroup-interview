import React, { useState } from 'react'
import logo from '../../assets/transparent_logo.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
 
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className="absolute top-0 left-0 w-full p-4 bg-opacity-40 backdrop-blur-lg z-10">
      <div className="container mx-auto flex justify-between items-center">
    {/* Left: Logo */}
      <div className="lg:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        
        <div className="hidden lg:flex items-center">
          <img src={logo} alt="Logo" className="h-12 mr-7" /> 
          <ul className="flex space-x-9">
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#about" className="text-white">About Us</a></li>
            <li><a href="#agents" className="text-white">Agents</a></li>
            <li><a href="#blog" className="text-white">Blog</a></li>
          </ul>
        </div>

    {/* Right: Search Bar and Sign In/Sign Up */}
        <div className="flex items-center space-x-4 lg:hidden">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white text-xl cursor-pointer" />
          <FontAwesomeIcon icon={faUser} className="text-white text-xl cursor-pointer" />
        </div>

        <div className="hidden lg:flex items-center space-x-8">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="px-4 py-2 bg-transparent border-b border-white text-white placeholder-white focus:outline-none"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
        </div>
        <div className="flex items-center text-white space-x-2">
            <span className='cursor-pointer'>Sign In</span>
            <span>|</span>
            <span className='cursor-pointer'>Sign Up</span>
        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute left-0 top-0 h-screen w-[40%] bg-custom-dark p-4 z-50 flex flex-col">
        <FontAwesomeIcon
            icon={faBars}
            className="text-white text-3xl cursor-pointer self-start mb-40"
            onClick={toggleMenu}
        />
          <ul className="space-y-3 text-white flex flex-col items-center justify-center text-3xl gap-7">
            <li><a href="#" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
            <li><a href="#agents" onClick={toggleMenu}>Agents</a></li>
            <li><a href="#blog" onClick={toggleMenu}>Blog</a></li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar