import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Experience.css';
import nomura from '../assets/Nomura-Logo.png';
import hashedIn from '../assets/HashedIn_logo.png';

function Experience() {
    const [ref, isVisible] = useScrollReveal(0.2);

    const experiences = [
        {
            id: 1,
            role: 'Intern',
            company: 'HashedIn by Deloitte',
            duration: 'October 2025 - November 2025',
            description: 'Constructed AI-powered research agent using Python, GenAI, LangChain, LangGraph, and MCP-based tools to make a custom chatbot. Using OpenAI embedding leveraged the use of RAG, stored the data in a Vector database, increasing the chatbot performance by 50%.',
            skills: ['FastAPI', 'GenAI', 'Langchain', 'Langgraph', 'MCP', 'RAG'],
            // Add your company logo path here
            logo: hashedIn// Replace with: '/hashedin-logo.png'
        },
        {
            id: 2,
            role: 'Intern',
            company: 'Nomura Holdings',
            duration: 'June 2024 - December 2024',
            description: 'Expanded automated E2E test suites using Selenium, Cucumber, and Java, increasing test coverage upto 95%+ for onboarding workflows. Optimized automation scripts and removed redundant steps, reducing execution time by 80% and enhancing overall testing efficiency to 93%. Improved CI/CD test pipelines using TestNG, Jenkins, and GitLab, reducing manual testing by 50+ hours per month and improving bug resolution speed by 35%.',
            skills: ['Selenium', 'Jenkins', 'Cucumber', 'TestNG', 'Java', 'GitLab', 'MSSQL', 'IntelliJ', 'JIRA', 'Confluence'],
            // Add your company logo path here
            logo: nomura // Replace with: '/nomura-logo.png'
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
