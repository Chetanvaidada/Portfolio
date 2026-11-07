import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

function Projects() {
    const [ref, isVisible] = useScrollReveal(0.1);

    const projects = [
        {
            id: 1,
            title: 'Finance Tracker',
            description: 'A financial tracking platform with JWT + Google OAuth secure login. Features transaction aggregation, expense splitting, and budget alerts via Nodemailer.',
            tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
            link: 'https://github.com/Chetanvaidada/Finance_Tracker', // Add your GitHub link here
            gradient: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)'
        },
        {
            id: 2,
            title: 'Globalgrad',
            description: 'Created a full-stack study-abroad guidance platform for 1,000+ students, raising onboarding completion by 35% with cookie-based JWT authentication and Google OAuth. Integrated a real-time LiveKit voice AI counselor into university discovery flows, handling 500+ daily inquiries and reducing reliance on live counselors by 60%.',
            tags: ['FastAPI', 'React', 'PostgreSQL', 'Google OAuth', 'LiveKit'],
            link: 'https://github.com/Chetanvaidada/Globalgrad',
            demo: 'https://globalgrad.vercel.app',
            gradient: 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)'
        },
        {
            id: 3,
            title: 'Multi-User Code Editor',
            description: 'Implemented a real-time collaborative code editor for 50+ concurrent users, using WebSocket sync and debounced persistence to reach sub-50 ms latency for in-memory edits.',
            tags: ['React', 'Redux', 'TypeScript', 'FastAPI', 'WebSockets', 'Monaco', 'PostgreSQL'],
            link: 'https://github.com/Chetanvaidada/multi-user-code-editor',
            gradient: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)'
        },
        {
            id: 4,
            title: 'Adblend',
            description: 'AI-powered Landing Page Personalization Engine that dynamically analyzes and customizes web pages based on user-provided ad content. Uses Playwright for hybrid scraping, extracts semantic elements via LLMs, and overlays real-time, context-aware personalized modifications through a React-based frontend.',
            tags: ['React', 'FastAPI', 'Playwright', 'LLM'],
            link: 'https://github.com/Chetanvaidada/AdBlend-', // github link will be added by user
            demo: 'https://ad-blend.vercel.app/', // deployed link will be added by user
            gradient: 'linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)'
        },
    ];

    return (
        <section id="projects" className="section">
            <div className="bg-decoration decoration-circle" style={{ top: '10%', right: '-120px' }}></div>

            <div className="container">
                <h2 className="section-title text-center mb-lg">Featured Projects</h2>
                <div ref={ref} className={`projects-grid scroll-reveal ${isVisible ? 'revealed' : ''}`}>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card card"
                            style={{ transitionDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-gradient" style={{ background: project.gradient }}></div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="badge">{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                                    GitHub
                                </a>
                                {project.demo && (
                                    <a href={project.demo} className="project-link" target="_blank" rel="noreferrer">
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
