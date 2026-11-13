import Reveal from './Reveal';
import './About.css';

function About() {
    return (
        <section id="about" className="section">
            <div className="container about">
                <Reveal className="about__head">
                    <p className="eyebrow">About</p>
                    <h2>Full-stack by habit, curious about AI by choice.</h2>
                </Reveal>

                <Reveal className="about__text" delay={100}>
                    <p>
                        I started in test automation at Nomura, moved to RAG chatbots at HashedIn by Deloitte,
                        shipped an AI-driven Shopify app at Computelib, and now build AI governance tooling at
                        Synapx. The thread through all of it is the same: make a system people can trust, then
                        prove it with numbers.
                    </p>
                    <p>
                        I work across the stack with TypeScript, React, Python, PostgreSQL and Azure, from LLM
                        gateways and MCP servers to real-time collaborative tools. I hold the Claude Certified
                        Architect (CCA-F) credential and keep up with whatever is new in AI and cloud.
                    </p>
                    <p>
                        Away from the keyboard I play games and follow football closely. I like the strategy
                        of it, reading the shape of a match and deciding where to press, and that carries
                        over into how I approach software.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}

export default About;
