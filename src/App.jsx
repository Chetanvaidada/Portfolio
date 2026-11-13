import ScrollEffects from './components/ScrollEffects';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Work from './components/Work';
import Projects from './components/Projects';
import Stack from './components/Stack';
import About from './components/About';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import { profile } from './data/content';

function App() {
    return (
        <>
            <a className="skip-link" href="#work">Skip to content</a>
            <ScrollEffects />
            <Navigation />
            <main>
                <Hero />
                <Work />
                <Projects />
                <Stack />
                <About />
                <Credentials />
                <Contact />
            </main>
            <footer className="footer">
                <div className="container footer__inner">
                    <p>© {new Date().getFullYear()} {profile.name}</p>
                    <p className="mono">Built with React and Vite</p>
                </div>
            </footer>
        </>
    );
}

export default App;
