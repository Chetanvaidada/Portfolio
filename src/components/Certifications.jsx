import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Certifications.css';
import claudeBadge from '../assets/claude_cert_badge.png';

function Certifications() {
    const [ref, isVisible] = useScrollReveal(0.2);

    const certifications = [
        {
            id: 1,
            title: 'Claude Certified Architect — Foundations (CCA-F)',
            issuer: 'Anthropic',
            link: 'https://www.credly.com/badges/73392622-18b7-4654-9896-8297f03cc4bd/public_url',
            badge: claudeBadge
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
                            <div className="cert-badge">
                                <img src={cert.badge} alt={`${cert.title} badge`} />
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

