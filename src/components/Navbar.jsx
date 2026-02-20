import React, { useState } from 'react';
import './Navbar.css';
import resumePDF from '../assets/Kavyashree_Resume.pdf'; // Adjust the path as needed
const Navbar = () => {
  // State to manage the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo or Your Name */}
        <a href="#hero" className="navbar-logo">
          Kavyashree<span className="dot">.</span>
        </a>

        {/* Desktop Menu */}
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          
          {/* Optional: Resume Button */}
          <a href={resumePDF} target="_blank" download="Kavyashree_Resume.pdf" className="btn-resume">
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
