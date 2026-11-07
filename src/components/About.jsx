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
                            I'm a full-stack software developer specializing in AI platform engineering — building LLM gateways
                            (LiteLLM), MCP servers, LLM-as-judge pipelines, and spend analytics with TypeScript, React,
                            PostgreSQL, and Azure. I'm a Claude Certified Architect (CCA-F).
                        </p>
                        <p className="mb-md">
                            With professional experience at Synapx, Computelib, HashedIn by Deloitte, and Nomura Holdings,
                            I've built multi-tenant AI governance platforms, Shopify AI apps, research chatbots, and automated
                            end-to-end test suites. I'm passionate about leveraging cutting-edge AI technologies to solve
                            real-world problems and continuously learning new tools and frameworks.
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
