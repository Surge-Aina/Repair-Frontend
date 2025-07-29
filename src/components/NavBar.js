import React from 'react';
import './NavBar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Mr. HandyMan</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Our Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;