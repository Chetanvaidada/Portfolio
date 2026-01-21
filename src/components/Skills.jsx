import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

function Skills() {
    const [ref, isVisible] = useScrollReveal(0.2);

    const skillCategories = [
        {
            title: 'Languages & Core',
            skills: ['Java', 'Python', 'C++', 'JavaScript'],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
            )
        },
        {
            title: 'Frameworks & Libraries',
            skills: ['ReactJS', 'NodeJS', 'FastAPI', 'Spring Boot', 'Selenium', 'TestNG', 'Langchain'],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
            )
        },
        {
            title: 'Databases & Cloud',
            skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'AWS'],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                </svg>
            )
        },
        {
            title: 'Developer Tools',
            skills: ['Git', 'Docker', 'Podman', 'Kubernetes', 'Jenkins', 'Cucumber'],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
            )
        },
        {
            title: 'AI & Modern Tech',
            skills: ['GenAI', 'RAG', 'Machine Learning', 'DSA', 'OOPS'],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                    <circle cx="12" cy="5" r="2"></circle>
                    <path d="M12 7v4"></path>
                    <line x1="8" y1="16" x2="8" y2="16"></line>
                    <line x1="16" y1="16" x2="16" y2="16"></line>
                </svg>
            )
        }
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="bg-decoration decoration-circle" style={{ bottom: '10%', left: '-80px' }}></div>

            <div className="container">
                <h2 className="section-title text-center mb-lg">Skills & Technologies</h2>
                <div ref={ref} className={`skills-grid scroll-reveal ${isVisible ? 'revealed' : ''}`}>
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="skill-category card"
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="category-icon">{category.icon}</div>
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-item">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
