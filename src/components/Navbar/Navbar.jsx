import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <a href="/">
            <img src="/intelion-logo.svg" alt="Intelion Icon" className="navbar__logo-icon" />
            <span className="navbar__logo-text">Intelion</span>
          </a>
        </div>
        <ul className="navbar__links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><a href="#market-research">Market Research</a></li>
          <li><a href="#company">Company</a></li>
          <li><a href="#brands">Brands</a></li>
        </ul>
        <div className="navbar__actions">
          <a href="#support" className="navbar__login">Client Support</a>
          <a href="#contact" className="navbar__try-free">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 