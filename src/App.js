import React from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <AboutUs />
      <Main />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;