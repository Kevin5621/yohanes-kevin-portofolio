import { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import './styles/globals.css';
import { ThemeProvider } from './styles/themeContexts';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { NotFound } from './components/404';
import Skills from './components/Skills/Skills';
import LenisProvider from './components/LenisProvider';

function MainContent() {
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [, setContactVisible] = useState(false);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.01 
    };

    const projectsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setProjectsVisible(true);
        } else {
          setProjectsVisible(false);
        }
      });
    }, options);

    const contactObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setContactVisible(true);
        } else {
          setContactVisible(false);
        }
      });
    }, options);

    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        } else {
          setSkillsVisible(false);
        }
      });
    }, options);

    if (projectsRef.current) {
      projectsObserver.observe(projectsRef.current);
    }

    if (contactRef.current) {
      contactObserver.observe(contactRef.current);
    }

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    return () => {
      projectsObserver.disconnect();
      contactObserver.disconnect();
      skillsObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark transition-colors duration-200">
      <LenisProvider>
        <Navigation />
        <Hero />
        
        {/* Skills Section */}
        <div ref={skillsRef} className="min-h-screen">
          <Skills isVisible={skillsVisible} />
        </div>

        {/* Projects Section */}
        <div ref={projectsRef} className="min-h-screen">
          <Projects isVisible={projectsVisible} />
        </div>

        {/* Contact Section */}
        <div ref={contactRef} className="min-h-screen">
          <Contact />
        </div>
      </LenisProvider>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;