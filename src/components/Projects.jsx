import { projects } from '../data/content';
import Reveal from './Reveal';
import './Projects.css';

function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container">
                <Reveal className="section__head">
                    <h2>Things I built on my own time</h2>
                    <p>Side projects, each one an excuse to go deep on a problem: real-time sync, voice AI, scraping, auth.</p>
                </Reveal>

                <ul className="projects">
                    {projects.map((project, i) => (
                        <Reveal as="li" key={project.id} className="project" delay={i * 60}>
                            <div className="project__title">
                                <p className="mono project__kind">{project.kind}</p>
                                <h3>{project.title}</h3>
                            </div>

                            <div className="project__main">
                                <p>{project.description}</p>
                                <div className="tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="project__side">
                                <div className="project__links">
                                    {project.demo && (
                                        <a className="arrow-link" href={project.demo} target="_blank" rel="noreferrer">
                                            Live demo <span aria-hidden="true">↗</span>
                                        </a>
                                    )}
                                    <a className="arrow-link" href={project.github} target="_blank" rel="noreferrer">
                                        GitHub <span aria-hidden="true">↗</span>
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Projects;
