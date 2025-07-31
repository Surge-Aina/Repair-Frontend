import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './NavBar.css';

// The NavBar now accepts isLoggedIn and onLogout as props
const NavBar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const logoutAndRedirect = () => {
    onLogout(); // Call the logout function from App.js
    navigate('/'); // Redirect to homepage
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">HandyMan</Link> {/* Use Link for navigation */}
      </div>
      <ul className="navbar-links">
        <li><a href="/#services">Services</a></li>
        <li><a href="/#portfolio">Our Work</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
      
      {/* Conditionally render Login or Logout button */}
      {isLoggedIn ? (
        <button onClick={logoutAndRedirect} className="navbar-button">Logout</button>
      ) : (
        <Link to="/login" className="navbar-button">Login</Link>
      )}
    </nav>
  );
};

export default NavBar;