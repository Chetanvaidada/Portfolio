import synapx from '../assets/synapx_logo.jpg';
import computelib from '../assets/computelib_logo.jpg';
import hashedIn from '../assets/HashedIn_logo.png';
import nomura from '../assets/Nomura-Logo.png';
import iiitp from '../assets/IIITP_logo.png';
import sriChaitanya from '../assets/Srichaitanya_logo.png';
import claudeBadge from '../assets/claude_cert_badge.png';

export const profile = {
    name: 'Chetan Vaidada',
    role: 'Software Developer',
    company: 'Synapx',
    email: 'chetanvaidada@gmail.com',
    phone: '+91 63033 46882',
    phoneHref: 'tel:+916303346882',
    linkedin: 'https://www.linkedin.com/in/chetan-vaidada-00944b290/',
    github: 'https://github.com/Chetanvaidada',
    resume: '/Chetan_Vaidada_Resume.pdf',
};

// start / end are [year, month] with month 1-12; end is inclusive, null = present.
export const experience = [
    {
        id: 'synapx',
        company: 'Synapx',
        role: 'Software Developer',
        start: [2026, 7],
        end: null,
        period: 'Jul 2026 — Present',
        logo: synapx,
        headline: 'AIMS, a multi-tenant AI governance platform.',
        points: [
            'Developed AIMS, which manages $10k+ of monthly API spend through short-lived, model-scoped LiteLLM gateway keys.',
            'Engineered MCP server OAuth 2.1 with a session inventory, so Claude Code and Copilot activity is securely attributed for 50+ internal developers.',
            'Architected LLM-as-judge features: a Standards Reviewer that automates 75% of pull-request check-runs, and a project qualifier that scores 100+ new AI project requests each month.',
            'Enforced phase budgets at gateway key issuance, reducing unauthorized spend by 30%.',
            'Added latency and time-to-first-byte (TTFB) percentiles from 1M+ spend logs to benchmark gateway load tests.',
        ],
        attributes: [
            ['commits.merged', '400+'],
            ['api_spend.managed', '$10k+ / mo'],
            ['developers.attributed', '50+'],
            ['pr_checks.automated', '75%'],
            ['requests.scored', '100+ / mo'],
            ['unauthorized_spend', '−30%'],
        ],
        stack: ['TypeScript', 'Fastify', 'React', 'PostgreSQL', 'LiteLLM', 'Azure AKS', 'MCP', 'OAuth 2.1'],
        link: { href: 'https://aims.delivery/', label: 'Learn more about AIMS' },
    },
    {
        id: 'computelib',
        company: 'Computelib',
        role: 'Software Developer, part-time',
        start: [2026, 5],
        end: [2026, 7],
        period: 'May 2026 — Jul 2026',
        logo: computelib,
        headline: 'Reviewgenie AI, a Shopify app that turns reviews into action.',
        points: [
            'Built a Shopify app that processes 5,000+ reviews a month through n8n.',
            'Scores revenue at risk with Claude and speeds up helpdesk ticket resolution by 40%.',
        ],
        attributes: [
            ['reviews.processed', '5,000+ / mo'],
            ['ticket.resolution', '40% faster'],
        ],
        stack: ['React', 'FastAPI', 'Shopify', 'n8n', 'GraphQL', 'Claude API'],
    },
    {
        id: 'hashedin',
        company: 'HashedIn by Deloitte',
        role: 'Intern',
        start: [2025, 10],
        end: [2025, 11],
        period: 'Oct 2025 — Nov 2025',
        logo: hashedIn,
        headline: 'An AI research chatbot grounded in a vector database.',
        points: [
            'Designed a research chatbot with LangChain and MCP tools.',
            'It queries 10,000+ OpenAI embeddings through RAG, improving response accuracy by 50%.',
        ],
        attributes: [
            ['embeddings.indexed', '10,000+'],
            ['response.accuracy', '+50%'],
        ],
        stack: ['FastAPI', 'LangChain', 'LangGraph', 'MCP', 'RAG'],
    },
    {
        id: 'nomura',
        company: 'Nomura Holdings',
        role: 'Intern',
        start: [2024, 6],
        end: [2024, 12],
        period: 'Jun 2024 — Dec 2024',
        logo: nomura,
        headline: 'End-to-end test automation and faster CI.',
        points: [
            'Expanded Selenium and Cucumber end-to-end suites to over 95% coverage.',
            'Improved Jenkins and GitLab CI pipelines, cutting execution time by 80% and saving 50+ hours of manual testing a month.',
        ],
        attributes: [
            ['e2e.coverage', '95%+'],
            ['ci.execution_time', '−80%'],
            ['manual_testing.saved', '50+ hrs / mo'],
        ],
        stack: ['Selenium', 'Cucumber', 'TestNG', 'Java', 'Jenkins', 'GitLab'],
    },
];

export const projects = [
    {
        id: 'globalgrad',
        title: 'Globalgrad',
        kind: 'Study-abroad guidance platform',
        description:
            'A full-stack platform for 1,000+ students, with cookie-based JWT auth and Google OAuth that raised onboarding completion by 35%. A real-time LiveKit voice AI counselor handles 500+ daily inquiries and cut reliance on live counselors by 60%.',
        tags: ['FastAPI', 'React', 'PostgreSQL', 'Google OAuth', 'LiveKit'],
        github: 'https://github.com/Chetanvaidada/Globalgrad',
        demo: 'https://globalgrad.vercel.app',
    },
    {
        id: 'code-editor',
        title: 'Multi-User Code Editor',
        kind: 'Real-time collaboration',
        description:
            'A collaborative code editor for 50+ concurrent users. WebSocket sync and debounced persistence keep in-memory edits under 50 ms.',
        tags: ['React', 'Redux', 'TypeScript', 'FastAPI', 'WebSockets', 'Monaco', 'PostgreSQL'],
        github: 'https://github.com/Chetanvaidada/multi-user-code-editor',
    },
    {
        id: 'adblend',
        title: 'Adblend',
        kind: 'Landing-page personalization engine',
        description:
            'Analyzes a landing page and rewrites it to match the ad a visitor clicked. Playwright handles hybrid scraping, LLMs extract the semantic elements, and a React frontend overlays the personalized changes in real time.',
        tags: ['React', 'FastAPI', 'Playwright', 'LLM'],
        github: 'https://github.com/Chetanvaidada/AdBlend-',
        demo: 'https://ad-blend.vercel.app/',
    },
    {
        id: 'finance-tracker',
        title: 'Finance Tracker',
        kind: 'Personal finance platform',
        description:
            'Secure login with JWT and Google OAuth, transaction aggregation, expense splitting, and budget alerts sent through Nodemailer.',
        tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
        github: 'https://github.com/Chetanvaidada/Finance_Tracker',
    },
];

export const stack = [
    {
        title: 'AI / LLM',
        items: ['LiteLLM', 'MCP', 'LangChain', 'LangGraph', 'RAG', 'LLM-as-Judge', 'Claude API', 'OpenAI API', 'n8n'],
    },
    { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'SQL'] },
    { title: 'Frameworks', items: ['React', 'Node.js', 'Fastify', 'FastAPI', 'Spring Boot', 'Tailwind CSS'] },
    {
        title: 'Cloud & DevOps',
        items: ['Azure (AKS, Front Door, APIM)', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins', 'CI/CD'],
    },
    { title: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
    { title: 'Testing & Auth', items: ['Playwright', 'Selenium', 'Cucumber', 'TestNG', 'OAuth 2.1', 'Auth0'] },
];

export const education = [
    {
        id: 'iiitp',
        degree: 'B.Tech in Computer Science',
        institution: 'Indian Institute of Information Technology Pune',
        period: '2021 — 2025',
        detail: 'CGPA 7.68 / 10',
        logo: iiitp,
    },
    {
        id: 'sri-chaitanya',
        degree: 'Intermediate (Class 12)',
        institution: 'Sri Chaitanya Junior College',
        period: '2019 — 2021',
        detail: '96% · JEE Main 97th percentile',
        logo: sriChaitanya,
    },
];

export const certification = {
    title: 'Claude Certified Architect — Foundations',
    code: 'CCA-F',
    issuer: 'Anthropic',
    link: 'https://www.credly.com/badges/73392622-18b7-4654-9896-8297f03cc4bd/public_url',
    badge: claudeBadge,
};

export const competitive = {
    rating: '1846',
    title: 'LeetCode Knight',
    facts: [
        '750+ data structures and algorithms problems solved',
    ],
};
