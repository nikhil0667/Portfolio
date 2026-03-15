import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      {/* Background Ambience */}
      <div className="ambient-light-1"></div>
      <div className="ambient-light-2"></div>
      
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <Skills />
        <Contact />
      </main>

      <footer style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--text-tertiary)', borderTop: '1px solid var(--border-color)', marginTop: '4rem' }}>
        <p>&copy; {new Date().getFullYear()} Nikhil Khambhayta. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
