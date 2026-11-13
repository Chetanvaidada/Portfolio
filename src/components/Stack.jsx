import { stack } from '../data/content';
import Reveal from './Reveal';
import './Stack.css';

function Stack() {
    return (
        <section id="stack" className="section stack">
            <div className="container">
                <Reveal className="section__head">
                    <h2>The stack I reach for</h2>
                    <p>Tools I have shipped with, grouped by the job they do.</p>
                </Reveal>

                <dl className="stack__list">
                    {stack.map((group) => (
                        <Reveal key={group.title} className="stack__row">
                            <dt>{group.title}</dt>
                            <dd>
                                {group.items.map((item, n) => (
                                    <span key={item} style={{ '--n': n }}>{item}</span>
                                ))}
                            </dd>
                        </Reveal>
                    ))}
                </dl>
            </div>
        </section>
    );
}

export default Stack;
