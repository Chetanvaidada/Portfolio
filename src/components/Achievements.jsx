import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Achievements.css';

function Achievements() {
    const [ref, isVisible] = useScrollReveal(0.2);

    const achievements = [
        {
            id: 1,
            text: 'Earned LeetCode Knight status (peak rating 1846) and ranked 1,800th globally in LeetCode Biweekly Contest 466.',
            icon: '🏆'
        },
        {
            id: 2,
            text: 'Solved 750+ data structures and algorithms (DSA) problems across coding platforms.',
            icon: '💻'
        }
    ];

    return (
        <section id="achievements" className="section">
            <div className="bg-decoration decoration-circle" style={{ bottom: '15%', left: '-80px' }}></div>

            <div className="container">
                <h2 className="section-title text-center mb-lg">Achievements</h2>
                <div ref={ref} className={`achievements-list scroll-reveal ${isVisible ? 'revealed' : ''}`}>
                    {achievements.map((achievement, index) => (
                        <div
                            key={achievement.id}
                            className="achievement-item card"
                            style={{ transitionDelay: `${index * 0.15}s` }}
                        >
                            <span className="achievement-icon">{achievement.icon}</span>
                            <p className="achievement-text">{achievement.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Achievements;

