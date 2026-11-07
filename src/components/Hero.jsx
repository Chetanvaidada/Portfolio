import React from 'react';
import profileImg from '../assets/Profile.png';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            {/* Decorative background elements */}
            <div className="bg-decoration decoration-circle" style={{ top: '10%', right: '-100px' }}></div>
            <div className="bg-decoration decoration-circle" style={{ bottom: '20%', left: '-150px' }}></div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span>👋 Welcome to my portfolio</span>
                    </div>
                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Chetan Vaidada</span>
                    </h1>
                    <p className="hero-description">
                        Full-stack developer with experience across AI platforms, test automation,
                        and modern web apps. I build with TypeScript, React, Python, and cloud — from
                        LLM gateways to real-time collaborative tools. Claude Certified Architect (CCA-F).
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            Get In Touch
                        </button>
                        <button className="btn btn-secondary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                            View Projects
                        </button>
                    </div>

                    <div className="hero-socials">
                        <a href="mailto:chetanvaidada@gmail.com" className="social-pill" title="Email">
                            <svg className="social-svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                            <span>chetanvaidada@gmail.com</span>
                        </a>

                        <a href="https://www.linkedin.com/in/chetan-vaidada-00944b290/" target="_blank" rel="noopener noreferrer" className="social-pill" title="LinkedIn">
                            <svg className="social-svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <span>LinkedIn</span>
                        </a>

                        <a href="https://github.com/Chetanvaidada" target="_blank" rel="noopener noreferrer" className="social-pill" title="GitHub">
                            <svg className="social-svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <span>GitHub</span>
                        </a>

                        <a href="tel:+916303346882" className="social-pill" title="Phone">
                            <svg className="social-svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                            <span>+91 63033 46882</span>
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="image-wrapper">
                        <img src={profileImg} alt="Chetan Vaidada" />
                        <div className="image-decoration"></div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="scroll-indicator">
                    <div className="scroll-arrow"></div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
