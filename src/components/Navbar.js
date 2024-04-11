import React, { useState } from 'react';
import { FaUser, FaAngleDown, FaSignOutAlt } from 'react-icons/fa';
import '../styles/navbar.css'; // Import your CSS file

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Add logic for login process
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Add logic for logout process
    setIsLoggedIn(false);
  };

  const handleHover = (event) => {
    event.target.classList.add('underline');
  };

  const handleHoverOut = (event) => {
    event.target.classList.remove('underline');
  };

  return (
    <header className="navbar">
      <div className="container">
        {/* Elcyra logo */}
        <h1 className="logo">Elcyra</h1>

        {/* Navigation links */}
        <nav>
          <ul className="nav-links">
            <li><a href="#" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>About</a></li>
            <li><a href="#" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>Our Services</a></li>
            <li><a href="#" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>Assignments</a></li>
            <li><a href="#" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>Packages</a></li>
            <li><a href="#" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>Learning Tools</a></li>
            <li><a href="#" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>Contact</a></li>
            <li>
              <a href="#" className="profile-link">
                <FaUser className="profile-icon" />
                <FaAngleDown className="down-arrow-icon" />
              </a>
            </li>
          </ul>
        </nav> 
      </div>
    </header>
  );
};

export default Navbar;
