import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Estimator from './components/Estimator';
import Portfolio from './components/Portfolio';
import ProblemIdentifier from './components/ProblemIdentifier';
import ProcessTimeline from './components/ProcessTimeline';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register'; // 1. Import the new Register component

import './App.css';

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Portfolio />
    <ProblemIdentifier />
    <ProcessTimeline />
    <Estimator />
    <Testimonials />
    <ContactForm />
  </>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token on logout
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
            {/* 2. Add the new route for the registration page */}
            <Route path="/register" element={<Register onLogin={handleLogin} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;