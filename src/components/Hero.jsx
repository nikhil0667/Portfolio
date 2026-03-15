import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';
import './Hero.css';

// Using actual image paths copied from legacy
const profileImg = '/legacy_assets/photo.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="image-glow"></div>
          <img src={profileImg} alt="Nikhil Khambhayta" className="hero-image" />
        </motion.div>

        <div className="hero-content">
          <motion.h2 
            className="hero-greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.h2>

          <motion.h1 
            className="hero-name text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Nikhil Khambhayta
          </motion.h1>

          <motion.div 
            className="hero-roles"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="role-tag">Software Engineer</span>
            <span className="role-tag">Java Backend Developer</span>
            <span className="role-tag">Flutter Developer</span>
          </motion.div>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
             Passionate software developer with hands-on experience building scalable backend systems and cross-platform mobile applications. Skilled in Core Java, Advanced Java, JDBC, MySQL, and Flutter, with experience developing clean, efficient, and maintainable software solutions.
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View My Work <ArrowRight size={18} />
            </button>
            <button className="btn btn-outline" onClick={scrollToContact}>
              Get In Touch
            </button>
          </motion.div>

          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="https://github.com/nikhil0667" target="_blank" rel="noreferrer" className="social-icon">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nikhil-khambhayta" target="_blank" rel="noreferrer" className="social-icon">
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/NKhambhayt35917" target="_blank" rel="noreferrer" className="social-icon">
              <Twitter size={24} />
            </a>
            <a href="mailto:nikhilkhambhayta@gmail.com" className="social-icon">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
        
      </div>

      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={scrollToProjects}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
