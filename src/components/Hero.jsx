import portrait from '../assets/portrait.jpg';
import { profile } from '../data/content';
import './Hero.css';

function Hero() {
    return (
        <section id="top" className="hero">
            <div className="hero__glow" aria-hidden="true"></div>

            <div className="container">
                <div className="hero__grid">
                    <div className="hero__copy">
                        <p className="eyebrow hero__enter" style={{ '--d': 0 }}>
                            Software Developer at Synapx
                        </p>
                        <h1 className="hero__title hero__enter" style={{ '--d': 1 }}>
                            I build full-stack products with <em>AI at the core.</em>
                        </h1>
                        <p className="hero__lede hero__enter" style={{ '--d': 2 }}>
                            I'm Chetan Vaidada, a software developer working across TypeScript, React, Python
                            and Postgres. I have shipped AI platforms, real-time collaborative tools and
                            Shopify apps, and automated the tests behind them. Claude Certified Architect.
                        </p>
                        <div className="hero__actions hero__enter" style={{ '--d': 3 }}>
                            <a className="btn btn--primary" href="#work">See my work</a>
                            <a className="btn btn--ghost" href="#contact">Get in touch</a>
                        </div>
                        <p className="hero__resume hero__enter" style={{ '--d': 4 }}>
                            <span className="mono">Resume</span>
                            <a className="arrow-link" href={profile.resume} target="_blank" rel="noreferrer">
                                View <span aria-hidden="true">↗</span>
                            </a>
                            <a className="arrow-link" href={profile.resume} download="Chetan_Vaidada_Resume.pdf">
                                Download PDF <span aria-hidden="true">↓</span>
                            </a>
                        </p>
                    </div>

                    <figure className="hero__photo hero__enter" style={{ '--d': 2 }}>
                        <img src={portrait} alt="Chetan Vaidada" width="1320" height="1650" />
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Hero;
