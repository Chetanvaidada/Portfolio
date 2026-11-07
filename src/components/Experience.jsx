import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Experience.css';
import synapx from '../assets/synapx_logo.jpg';
import computelib from '../assets/computelib_logo.jpg';
import hashedIn from '../assets/HashedIn_logo.png';
import nomura from '../assets/Nomura-Logo.png';

function Experience() {
    const [ref, isVisible] = useScrollReveal(0.2);

    const experiences = [
        {
            id: 1,
            role: 'Software Developer',
            company: 'Synapx',
            duration: 'July 2026 - Present',
            description: 'Developed AIMS, a multi-tenant AI governance platform managing $10k+ monthly API spend via short-lived, model-scoped LiteLLM gateway keys; merged 400+ commits across the API and VS Code extension. Engineered MCP server OAuth 2.1 with session inventory to securely attribute Claude Code and Copilot activity for 50+ internal developers. Architected LLM-as-judge features: a Standards Reviewer automating 75% of pull-request check-runs and a project qualifier scoring 100+ new AI project requests monthly.',
            skills: ['TypeScript', 'Fastify', 'React', 'PostgreSQL', 'LiteLLM', 'Azure AKS', 'MCP', 'OAuth 2.1'],
            logo: synapx
        },
        {
            id: 2,
            role: 'Software Developer (Part-time)',
            company: 'Computelib',
            duration: 'May 2026 - July 2026',
            description: 'Built Reviewgenie AI, a Shopify app that processes 5,000+ monthly reviews through n8n, scores revenue at risk with Claude, and speeds up helpdesk ticket resolution by 40%.',
            skills: ['React', 'FastAPI', 'Shopify', 'n8n', 'GraphQL', 'Claude API'],
            logo: computelib
        },
        {
            id: 3,
            role: 'Intern',
            company: 'HashedIn by Deloitte',
            duration: 'October 2025 - November 2025',
            description: 'Designed an AI research chatbot with LangChain and MCP tools that queries a vector database of 10,000+ OpenAI embeddings via RAG, improving response accuracy by 50%.',
            skills: ['FastAPI', 'LangChain', 'LangGraph', 'MCP', 'RAG'],
            logo: hashedIn
        },
        {
            id: 4,
            role: 'Intern',
            company: 'Nomura Holdings',
            duration: 'June 2024 - December 2024',
            description: 'Expanded Selenium and Cucumber end-to-end test suites to over 95% coverage and improved Jenkins and GitLab CI pipelines, cutting execution time by 80% and saving 50+ hours of manual testing per month.',
            skills: ['Selenium', 'Cucumber', 'TestNG', 'Java', 'Jenkins', 'GitLab'],
            logo: nomura
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="bg-decoration decoration-circle" style={{ top: '15%', right: '-90px' }}></div>

            <div className="container">
                <h2 className="section-title text-center mb-lg">Experience</h2>
                <div ref={ref} className={`experience-timeline scroll-reveal ${isVisible ? 'revealed' : ''}`}>
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className="experience-item"
                            style={{ transitionDelay: `${index * 0.2}s` }}
                        >
                            <div className="experience-content card">
                                <div className="experience-header">
                                    <div className="experience-logo">
                                        {exp.logo ? (
                                            <img src={exp.logo} alt={`${exp.company} logo`} />
                                        ) : (
                                            <div className="logo-placeholder">
                                                <span>{exp.company.charAt(0)}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="experience-info">
                                        <h3 className="experience-role">{exp.role}</h3>
                                        <p className="experience-company">{exp.company}</p>
                                        <p className="experience-duration">{exp.duration}</p>
                                    </div>
                                </div>
                                <p className="experience-description">{exp.description}</p>
                                <div className="experience-skills">
                                    {exp.skills.map((skill, skillIndex) => (
                                        <span key={skillIndex} className="badge">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
