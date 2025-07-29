import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Services from './components/Services';
import Estimator from './components/Estimator';
import Portfolio from './components/Portfolio';
import TrustHub from './components/TrustHub';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Hero />
        <Services />
        <Estimator />
        <Portfolio />
        <TrustHub />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;