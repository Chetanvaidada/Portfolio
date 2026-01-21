import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Education.css';
import iiitp from '../assets/IIITP_logo.png';
import sriChaitanya from '../assets/Srichaitanya_logo.png';

function Education() {
    const [ref, isVisible] = useScrollReveal(0.2);

    const education = [
        {
            id: 1,
            degree: 'B.Tech in Computer Science',
            institution: 'Indian Institute of Information Technology Pune',
            duration: '2021 - 2025',
            gpa: 'CGPA: 7.7/10',
            // Add your institution logo path here
            logo: iiitp // Replace with: '/university-logo.png'
        },
        {
            id: 2,
            degree: 'Intermediate (Class 12)',
            institution: 'Sri Chaitanya Junior College',
            duration: '2019 - 2021',
            gpa: 'Percentage: 96% | JEE Main Percentile: 97%',
            // Add your institution logo path here
            logo: sriChaitanya // Replace with: '/college-logo.png'
        }
    ];

    return (
        <section id="education" className="section education-section">
            <div className="bg-decoration decoration-circle" style={{ top: '20%', left: '-100px' }}></div>

            <div className="container">
                <h2 className="section-title text-center mb-lg">Education</h2>
                <div ref={ref} className={`education-timeline scroll-reveal ${isVisible ? 'revealed' : ''}`}>
                    {education.map((edu, index) => (
                        <div
                            key={edu.id}
                            className="education-item"
                            style={{ transitionDelay: `${index * 0.2}s` }}
                        >
                            <div className="education-content card">
                                <div className="education-header">
                                    <div className="education-logo">
                                        {edu.logo ? (
                                            <img src={edu.logo} alt={`${edu.institution} logo`} />
                                        ) : (
                                            <div className="logo-placeholder">
                                                <span>{edu.institution.charAt(0)}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="education-info">
                                        <h3 className="education-degree">{edu.degree}</h3>
                                        <p className="education-institution">{edu.institution}</p>
                                        <p className="education-duration">{edu.duration}</p>
                                    </div>
                                </div>
                                {edu.gpa && (
                                    <p className="education-gpa">{edu.gpa}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
