import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { profile } from '../data/content';
import Reveal from './Reveal';
import './Contact.css';

const SERVICE_ID = 'service_g6th0ym';
const TEMPLATE_ID = 'template_tzyq935';
const PUBLIC_KEY = '9782zfOCEIkgl8jJ0';

const emptyForm = { name: '', email: '', message: '' };

function Contact() {
    const [formData, setFormData] = useState(emptyForm);
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        const templateParams = {
            ...formData,
            title: 'Message from Portfolio', // Matches {{title}} in the EmailJS subject
        };

        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then(() => {
                setFormData(emptyForm);
                setStatus('sent');
            })
            .catch((err) => {
                console.error('EmailJS send failed', err);
                setStatus('error');
            });
    };

    const channels = [
        { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
        { label: 'LinkedIn', value: 'chetan-vaidada', href: profile.linkedin, external: true },
        { label: 'GitHub', value: 'Chetanvaidada', href: profile.github, external: true },
        { label: 'Phone', value: profile.phone, href: profile.phoneHref },
        { label: 'Resume', value: 'View or download the PDF', href: profile.resume, external: true },
    ];

    return (
        <section id="contact" className="section contact">
            <div className="contact__glow" aria-hidden="true"></div>
            <div className="container contact__grid">
                <Reveal>
                    <p className="eyebrow">Contact</p>
                    <h2 className="contact__title">Have something that needs building?</h2>
                    <p className="contact__lede">
                        A project, a role, or a question about anything on this page. Send a message here
                        or use whichever channel you prefer.
                    </p>

                    <ul className="channels">
                        {channels.map((channel) => (
                            <li key={channel.label}>
                                <a
                                    href={channel.href}
                                    {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                >
                                    <span className="mono channels__label">{channel.label}</span>
                                    <span className="channels__value">{channel.value}</span>
                                    <span className="channels__arrow" aria-hidden="true">↗</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </Reveal>

                <Reveal delay={100}>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                autoComplete="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="you@example.com"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="What are you working on?"
                            />
                        </div>

                        <div className="form__foot">
                            <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending…' : 'Send message'}
                            </button>
                            <p className={`form__status is-${status}`} role="status" aria-live="polite">
                                {status === 'sent' && 'Message sent. I will get back to you soon.'}
                                {status === 'error' && (
                                    <>
                                        That did not go through. Please try again, or email me at{' '}
                                        <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                                    </>
                                )}
                            </p>
                        </div>
                    </form>
                </Reveal>
            </div>
        </section>
    );
}

export default Contact;
