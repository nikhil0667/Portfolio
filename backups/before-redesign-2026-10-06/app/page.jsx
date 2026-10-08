"use client";

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import CustomCursor from '../components/CustomCursor';
import ParticleBackground from '../components/ParticleBackground';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ParticleBackground />
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
      <footer style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--text-tertiary)', borderTop: '1px solid var(--border-color)', marginTop: '4rem', position: 'relative', zIndex: 1 }}>
        <p>© {new Date().getFullYear()} Nikhil Khambhayta. All rights reserved.</p>
      </footer>
    </>
  );
}
