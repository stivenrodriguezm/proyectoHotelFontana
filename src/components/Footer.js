import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <a href="#services">Services</a>
        <a href="#schedule">Schedule Appointment</a>
        <a href="#intake">Complete Intake</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-credit">
        <p>Web design by <a href="https://www.b12.io">B12</a></p>
      </div>
    </footer>
  );
}

export default Footer;
