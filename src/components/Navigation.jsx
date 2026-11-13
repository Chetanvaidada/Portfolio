import { useEffect, useState } from 'react';
import { profile } from '../data/content';
import './Navigation.css';

const links = [
    { id: 'work', label: 'Work' },
    { id: 'projects', label: 'Projects' },
    { id: 'stack', label: 'Stack' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
];

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        try {
            localStorage.setItem('theme', theme);
        } catch {
            // Storage can be unavailable (private mode); the toggle still works for this visit.
        }
    }, [theme]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Highlight the section currently crossing the middle of the viewport.
    useEffect(() => {
        if (!('IntersectionObserver' in window)) return undefined;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );
        // 'top' is the hero: observing it clears the highlight when scrolled back up.
        ['top', ...links.map(({ id }) => id)].forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const isDark = theme === 'dark';

    return (
        <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
            <div className="container nav__inner">
                <a href="#top" className="nav__brand" onClick={() => setIsOpen(false)}>
                    <span className="nav__dot" aria-hidden="true"></span>
                    Chetan Vaidada
                </a>

                <nav id="site-nav" className={`nav__links ${isOpen ? 'is-open' : ''}`} aria-label="Sections">
                    {links.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={active === id ? 'is-active' : ''}
                            aria-current={active === id ? 'true' : undefined}
                            onClick={() => setIsOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                    <a
                        className="nav__resume"
                        href={profile.resume}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setIsOpen(false)}
                    >
                        Resume <span aria-hidden="true">↗</span>
                    </a>
                </nav>

                <div className="nav__tools">
                    <button
                        type="button"
                        className="nav__icon"
                        onClick={() => setTheme(isDark ? 'light' : 'dark')}
                        aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
                        title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
                    >
                        {isDark ? (
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <circle cx="12" cy="12" r="4.2" />
                                <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.3 5.3l1.7 1.7M17 17l1.7 1.7M5.3 18.7 7 17M17 7l1.7-1.7" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.2 8.2 0 1 0 10.2 10.2Z" />
                            </svg>
                        )}
                    </button>
                    <button
                        type="button"
                        className="nav__icon nav__menu"
                        onClick={() => setIsOpen((open) => !open)}
                        aria-expanded={isOpen}
                        aria-controls="site-nav"
                        aria-label="Menu"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            {isOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navigation;
