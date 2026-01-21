import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

function About() {
    const [ref, isVisible] = useScrollReveal(0.2);

    return (
        <section id="about" className="section">
            <div className="bg-decoration decoration-circle" style={{ top: '20%', left: '-100px' }}></div>

            <div className="container">
                <h2 className="section-title text-center mb-lg">About Me</h2>
                <div
                    ref={ref}
                    className={`about-content scroll-reveal ${isVisible ? 'revealed' : ''}`}
                >
                    <div className="about-text">
                        <div className="about-accent"></div>
                        <p className="mb-md">
                            I'm a motivated software developer with practical experience in full-stack web development,
                            mobile app development, and QA automation. Currently building projects using Generative AI
                            and expanding my expertise in modern technologies such as cloud platforms, CI/CD, and containerization.
                        </p>
                        <p className="mb-md">
                            With hands-on experience at HashedIn by Deloitte and Nomura Holdings, I've developed AI-powered
                            solutions and optimized test automation workflows. I'm passionate about leveraging cutting-edge
                            technologies to solve real-world problems and continuously learning new tools and frameworks.
                        </p>
                        <p>
                            When I'm not coding, you'll find me playing games or cheering for my favorite football teams.
                            As an avid football fan, I love the strategic aspects of the game, which translates well into
                            my approach to software development and problem-solving.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
