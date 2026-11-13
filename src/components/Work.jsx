import { useState } from 'react';
import { experience } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Reveal from './Reveal';
import './Work.css';

const AXIS_START_YEAR = 2024;

// Month index on the axis, counted from January of the first year.
const monthIndex = ([year, month]) => (year - AXIS_START_YEAR) * 12 + (month - 1);

function buildTimeline() {
    const now = new Date();
    const nowEnd = monthIndex([now.getFullYear(), now.getMonth() + 1]) + 1;
    const total = Math.max(36, Math.ceil(nowEnd / 12) * 12);
    const years = Array.from({ length: total / 12 }, (_, i) => AXIS_START_YEAR + i);

    const spans = experience.map((job) => {
        const start = monthIndex(job.start);
        const end = job.end ? monthIndex(job.end) + 1 : Math.max(nowEnd, start + 1);
        const months = end - start;
        return {
            ...job,
            months,
            live: !job.end,
            left: (start / total) * 100,
            width: (months / total) * 100,
        };
    });

    return { spans, years };
}

function Work() {
    const [{ spans, years }] = useState(buildTimeline);
    const [openId, setOpenId] = useState(spans[0].id);
    const [ref, isVisible] = useScrollReveal(0.1);

    return (
        <section id="work" className="section work">
            <div className="container">
                <Reveal className="section__head">
                    <h2>Work, read as a trace</h2>
                    <p>
                        Each role is a span on the timeline, and the numbers it produced are its attributes.
                        Select a span to open it.
                    </p>
                </Reveal>

                <div
                    ref={ref}
                    className={`trace ${isVisible ? 'is-visible' : ''}`}
                    style={{ '--years': years.length }}
                >
                    <div className="trace__axis" aria-hidden="true">
                        <span className="mono trace__axis-label">span</span>
                        <div className="trace__years">
                            {years.map((year) => (
                                <span key={year} className="mono">{year}</span>
                            ))}
                        </div>
                        <span className="mono trace__axis-dur">duration</span>
                    </div>

                    {spans.map((span, i) => {
                        const isOpen = openId === span.id;
                        return (
                            <article
                                key={span.id}
                                className={`span ${isOpen ? 'is-open' : ''}`}
                                style={{ '--i': i }}
                            >
                                <h3 className="span__heading">
                                    <button
                                        type="button"
                                        className="span__row"
                                        aria-expanded={isOpen}
                                        aria-controls={`span-${span.id}`}
                                        onClick={() => setOpenId(isOpen ? null : span.id)}
                                    >
                                        <span className="span__who">
                                            <span className="logo-tile">
                                                <img src={span.logo} alt="" loading="lazy" />
                                            </span>
                                            <span>
                                                <span className="span__company">{span.company}</span>
                                                <span className="span__role">{span.role}</span>
                                            </span>
                                        </span>

                                        <span className="span__track" aria-hidden="true">
                                            <span
                                                className={`span__bar ${span.live ? 'is-live' : ''}`}
                                                style={{
                                                    left: `${span.left}%`,
                                                    width: `${span.width}%`,
                                                    '--i': i,
                                                }}
                                            ></span>
                                        </span>

                                        <span className="span__meta">
                                            <span className="mono span__dur">
                                                {span.months} mo{span.live ? '+' : ''}
                                            </span>
                                            <svg className="span__chev" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </span>
                                    </button>
                                </h3>

                                <div id={`span-${span.id}`} className="span__panel" hidden={!isOpen}>
                                    <div className="span__body">
                                        <div>
                                            <p className="mono span__period">{span.period}</p>
                                            <p className="span__headline">{span.headline}</p>
                                            <ul className="span__points">
                                                {span.points.map((point) => (
                                                    <li key={point}>{point}</li>
                                                ))}
                                            </ul>
                                            <div className="tags">
                                                {span.stack.map((item) => (
                                                    <span key={item} className="tag">{item}</span>
                                                ))}
                                            </div>
                                            {span.link && (
                                                <a
                                                    className="arrow-link span__link"
                                                    href={span.link.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {span.link.label} <span aria-hidden="true">↗</span>
                                                </a>
                                            )}
                                        </div>

                                        <div className="attrs">
                                            <p className="mono attrs__title">attributes</p>
                                            <dl>
                                                {span.attributes.map(([key, value]) => (
                                                    <div key={key} className="attrs__row">
                                                        <dt className="mono">{key}</dt>
                                                        <dd>{value}</dd>
                                                    </div>
                                                ))}
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Work;
