import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-branding">
        <h3>Berimbolo</h3>
        <p>Protect your website with industry-leading security measures.</p>
        <button className="add-to-cart">learn more</button>
      </div>
    </div>
    <div className="footer-links">
      <div className="link-group">
        <h4>About</h4>
        <ul>
          <li><a href="#">Our Mission</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div className="link-group">
        <h4>Products</h4>
        <ul>
          <li><a href="#">Secure Devices</a></li>
          <li><a href="#">Monitoring</a></li>
          <li><a href="#">Cloud Storage</a></li>
        </ul>
      </div>
      <div className="link-group">
        <h4>Support</h4>
        <ul>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Live Chat</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>© 2024 Berimbolo. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;