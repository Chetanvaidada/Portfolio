import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Chetan Vaidada. Built with React.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
