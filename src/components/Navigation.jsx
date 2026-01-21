import React from 'react';
import './Navigation.css';
import logo from '../assets/head_logo.png';

function Navigation() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <div className="container nav-container">
        <div className="logo">
          <img src={logo} alt="Chetan V. Logo" className="nav-logo" />
          <span>Chetan V.</span>
        </div>
        <ul className="nav-links">
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
