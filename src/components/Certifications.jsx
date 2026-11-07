import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Certifications.css';

function Certifications() {
    const [ref, isVisible] = useScrollReveal(0.2);

    const certifications = [
        {
            id: 1,
            title: 'Claude Certified Architect — Foundations (CCA-F)',
            issuer: 'Anthropic',
            link: 'https://www.credly.com/badges/73392622-18b7-4654-9896-8297f03cc4bd/public_url'
        }
    ];

    return (
        <section id="certifications" className="section">
            <div className="bg-decoration decoration-circle" style={{ top: '25%', right: '-90px' }}></div>

            <div className="container">
                <h2 className="section-title text-center mb-lg">Certifications</h2>
                <div ref={ref} className={`certifications-grid scroll-reveal ${isVisible ? 'revealed' : ''}`}>
                    {certifications.map((cert, index) => (
                        <div
                            key={cert.id}
                            className="certification-card card"
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <div className="cert-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="8" r="7"></circle>
                                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                </svg>
                            </div>
                            <h3 className="cert-title">{cert.title}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                            {cert.link && (
                                <a href={cert.link} className="cert-link" target="_blank" rel="noreferrer">
                                    Verify Credential →
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certifications;
