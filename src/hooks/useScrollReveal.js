import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (threshold = 0.15) => {
    const ref = useRef(null);
    // Without IntersectionObserver there is nothing to wait for, so start visible.
    const [isVisible, setIsVisible] = useState(() => !('IntersectionObserver' in window));

    useEffect(() => {
        const node = ref.current;
        if (!node || !('IntersectionObserver' in window)) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin: '0px 0px -8% 0px' }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, isVisible];
};
