import { useEffect, useRef } from 'react';
import './ScrollEffects.css';

// Publishes scroll position as CSS variables so the styles can react to it:
//   --page-progress  0 → 1 across the whole page (drives the progress bar)
//   --hero-progress  0 → 1 while the hero scrolls out of view (drives its parallax)
function ScrollEffects() {
    const frame = useRef(0);

    useEffect(() => {
        const root = document.documentElement;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

        const update = () => {
            frame.current = 0;
            const max = root.scrollHeight - window.innerHeight;
            const y = window.scrollY;
            root.style.setProperty('--page-progress', max > 0 ? (y / max).toFixed(4) : '0');
            const hero = reduceMotion.matches ? 0 : Math.min(1, y / (window.innerHeight * 0.9));
            root.style.setProperty('--hero-progress', hero.toFixed(4));
        };

        const onScroll = () => {
            if (!frame.current) frame.current = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            cancelAnimationFrame(frame.current);
        };
    }, []);

    return <div className="scroll-progress" aria-hidden="true"></div>;
}

export default ScrollEffects;
