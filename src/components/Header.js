import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">Berim <span className='bolo'>bolo</span> </div>
    <nav className="navigation">
      <a href="#products">Products</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
    <div className="header-actions">
      <button className="login">login</button>
      <button className="buy-now"><a href="#products">Buy Now</a></button>
    </div>
  </header>
);

export default Header;