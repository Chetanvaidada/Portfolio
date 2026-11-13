import { useScrollReveal } from '../hooks/useScrollReveal';

function Reveal({ as = 'div', className = '', delay = 0, children, ...rest }) {
    const Tag = as;
    const [ref, isVisible] = useScrollReveal();

    return (
        <Tag
            ref={ref}
            className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
            {...rest}
        >
            {children}
        </Tag>
    );
}

export default Reveal;
