import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

function Contact() {
    const [ref, isVisible] = useScrollReveal(0.2);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Actual EmailJS IDs
        const SERVICE_ID = 'service_g6th0ym';
        const TEMPLATE_ID = 'template_tzyq935';
        const PUBLIC_KEY = '9782zfOCEIkgl8jJ0';

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            title: 'Message from Portfolio', // Matches the {{title}} in your subject
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully! I will get back to you soon.');
                setFormData({ name: '', email: '', message: '' });
            }, (err) => {
                console.log('FAILED...', err);
                alert('Failed to send the message. Please try again later or contact me directly via email.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="section">
            <div className="bg-decoration decoration-circle" style={{ top: '30%', right: '-100px' }}></div>

            <div className="container">
                <h2 className="section-title text-center mb-lg">Get In Touch</h2>

                <div
                    ref={ref}
                    className={`contact-wrapper scroll-reveal ${isVisible ? 'revealed' : ''}`}
                >
                    <p className="contact-intro text-center mb-lg">
                        Have a project in mind or want to collaborate? I'd love to hear from you!
                        Send a direct message below.
                    </p>

                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <button
                                type="submit"
                                className={`btn btn-primary submit-btn ${isSubmitting ? 'loading' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
