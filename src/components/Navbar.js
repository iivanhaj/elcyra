import React, { useState } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set initial state for user login status
  const [userInitial, setUserInitial] = useState('J'); // Set initial user initial, can be changed based on actual login

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Add logic for actual login process
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add logic for actual logout process
  };

  return (
    <nav className="flex items-center justify-between bg-opacity-50 bg-green-800 px-6 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-white text-2xl font-bold mr-4">Elecyra</span>
      </div>
      {/* Navigation Links */}
      <ul className="flex items-center">
        <li className="text-white mr-4">
          <a href="#about">About</a>
        </li>
        <li className="text-white mr-4">
          <a href="#services">Our Services</a>
        </li>
        <li className="text-white mr-4">
          <a href="#assignments">Assignments</a>
        </li>
        <li className="text-white mr-4">
          <a href="#packages">Packages</a>
        </li>
        <li className="text-white mr-4">
          <a href="#learning-tools">Learning Tools</a>
        </li>
        <li className="text-white mr-4">
          <a href="#contact">Contact</a>
        </li>
        {/* User Profile */}
        <li className="relative">
          {/* Bell Icon */}
          <div className="inline-block text-white mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
          {/* User Profile Circle */}
          <div className="inline-block text-white relative">
            {/* Circle */}
            <div className="h-8 w-8 rounded-full bg-brown-500 flex items-center justify-center">
              <span className="text-white text-xs">{userInitial}</span>
            </div>
            {/* Dropdown */}
            {isLoggedIn ? (
              <div className="absolute top-8 right-0 bg-white py-2 px-4 shadow-md rounded-md">
                <a href="#view-profile" className="block text-gray-800 hover:text-gray-600">View Profile</a>
                <a href="#logout" onClick={handleLogout} className="block text-gray-800 hover:text-gray-600">Logout</a>
              </div>
            ) : (
              <div className="absolute top-8 right-0 bg-white py-2 px-4 shadow-md rounded-md">
                <a href="#register" className="block text-gray-800 hover:text-gray-600">Register</a>
                <a href="#login" className="block text-gray-800 hover:text-gray-600">Login</a>
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
