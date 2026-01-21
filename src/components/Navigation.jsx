import React, { useState } from 'react';
import './Navigation.css';
import logo from '../assets/head_logo.png';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close menu after clicking
  };

  return (
    <nav className="navigation">
      <div className="container nav-container">
        <div className="logo">
          <img src={logo} alt="Chetan V. Logo" className="nav-logo" />
          <span>Chetan V.</span>
        </div>
        <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <a onClick={() => scrollToSection('about')}>About</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('experience')}>Experience</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('education')}>Education</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('projects')}>Projects</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('skills')}>Skills</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
