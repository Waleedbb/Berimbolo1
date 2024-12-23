import React from 'react';
import './Hero.css';

const Hero = () => (
  <>
  <section className="hero">
    <div className="hero-content">
      <h1>Berimbolo</h1>
      <p>Secure your online presence</p>
      <button className="get-started">Get Started</button>
    </div>
  </section>
    <div className="hero-stats">
      <div className="stat">
        <h2>1000+</h2>
        <p>Satisfied Customers</p>
      </div>
      <div className="stat">
        <h2>99.9%</h2>
        <p>Uptime Guarantee</p>
      </div>
      <div className="stat">
        <h2>24/7</h2>
        <p>Customer Support</p>
      </div>
    </div>
    </>
);

export default Hero;