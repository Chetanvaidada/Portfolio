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
                            I'm a full-stack software developer with hands-on experience building AI-powered platforms,
                            automating testing pipelines, and shipping modern web applications. I work across the stack
                            with TypeScript, React, Python, PostgreSQL, and Azure — from LLM gateways and MCP servers
                            to real-time collaborative tools and Shopify apps.
                        </p>
                        <p className="mb-md">
                            With professional experience at Synapx, Computelib, HashedIn by Deloitte, and Nomura Holdings,
                            I've shipped multi-tenant AI governance platforms, AI-driven Shopify apps, research chatbots,
                            and robust end-to-end test suites. I hold the Claude Certified Architect (CCA-F) credential
                            and I'm always exploring the latest in AI and cloud technologies.
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
