 import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Estimator from './components/Estimator';
import Portfolio from './components/Portfolio';
import TrustHub from './components/TrustHub';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Login from './components/Login/Login'; // Import the new login component

import './App.css';

// A new component to hold the main page content
const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Estimator />
    <Portfolio />
    <TrustHub />
    <Testimonials />
    <ContactForm />
  </>
);

function App() {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;