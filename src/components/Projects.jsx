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
            title: 'Multi user code editor',
            description: 'Real-time collaborative code editor using WebSockets for live synchronization. Features debounced persistence and conflict-free concurrent editing.',
            tags: ['React', 'FastAPI', 'WebSockets', 'TypeScript'],
            link: 'https://github.com/Chetanvaidada/multi-user-code-editor', // Add your GitHub link here
            gradient: 'linear-gradient(135deg, #F093FB 0%, #F5576C 100%)'
        },
        {
            id: 3,
            title: 'GenNFT',
            description: 'Image generation system using diffusion models and Clip algorithm. Includes smart contracts for minting and trading on the blockchain.',
            tags: ['Python', 'Flask', 'Solidity', 'React'],
            link: 'https://github.com/Chetanvaidada/GeNFT-new', // Add your GitHub link here
            gradient: 'linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)'
        }
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
                            <a href={project.link} className="project-link">
                                View Project/Repo →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
