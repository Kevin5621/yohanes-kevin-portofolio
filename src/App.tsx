import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;