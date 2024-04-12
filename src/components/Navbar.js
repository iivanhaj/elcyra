import React, { useState } from 'react';
import { FaUser, FaAngleDown, FaSignOutAlt } from 'react-icons/fa';
import '../styles/navbar.css'; 

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
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
        <h1 className="logo"><a href="/" style={{ textDecoration: 'none', fontSize: '24px', color: '#F1E3C8' }}>Elcyra</a></h1>

        <nav>
          <ul className="nav-links">
            <li><a href="/about" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>About</a></li>
            <li><a href="#" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>Our Services</a></li>
            <li><a href="#" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>Assignments</a></li>
            <li><a href="#" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>Packages</a></li>
            <li><a href="#" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>Learning Tools</a></li>
            <li><a href="#" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>Contact</a></li>
            <li><a href="/login" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}><FaUser className="login-icon" /></a></li>
          </ul>
        </nav> 
      </div>
    </header>
  );
};

export default Navbar;
