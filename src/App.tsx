import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/globals.css';
import { ThemeProvider } from './styles/themeContexts';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-dark transition-colors duration-200">
        <Navigation />
        <Hero />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;