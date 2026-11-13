import { certification, competitive, education } from '../data/content';
import Reveal from './Reveal';
import './Credentials.css';

function Credentials() {
    return (
        <section id="credentials" className="section credentials">
            <div className="container">
                <Reveal className="section__head">
                    <h2>Credentials</h2>
                    <p>Where I studied, what I am certified in, and how I keep my problem-solving sharp.</p>
                </Reveal>

                <div className="cred-grid">
                    <Reveal className="cred cred--cert">
                        <p className="eyebrow">Certification</p>
                        <img
                            className="cred__badge"
                            src={certification.badge}
                            alt=""
                            width="144"
                            height="144"
                            loading="lazy"
                        />
                        <h3>{certification.title}</h3>
                        <p className="cred__sub">
                            {certification.issuer} · {certification.code}
                        </p>
                        <a className="arrow-link" href={certification.link} target="_blank" rel="noreferrer">
                            Verify credential <span aria-hidden="true">↗</span>
                        </a>
                    </Reveal>

                    <Reveal className="cred" delay={80}>
                        <p className="eyebrow">Competitive programming</p>
                        <p className="cred__number">{competitive.rating}</p>
                        <h3>{competitive.title}</h3>
                        <p className="cred__sub">Peak contest rating</p>
                        <ul className="cred__facts">
                            {competitive.facts.map((fact) => (
                                <li key={fact}>{fact}</li>
                            ))}
                        </ul>
                    </Reveal>

                    <Reveal className="cred" delay={160}>
                        <p className="eyebrow">Education</p>
                        <ul className="edu">
                            {education.map((item) => (
                                <li key={item.id}>
                                    <span className="logo-tile">
                                        <img src={item.logo} alt="" loading="lazy" />
                                    </span>
                                    <div>
                                        <h3>{item.degree}</h3>
                                        <p className="cred__sub">{item.institution}</p>
                                        <p className="mono edu__meta">
                                            {item.period} · {item.detail}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

export default Credentials;
