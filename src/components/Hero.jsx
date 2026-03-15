import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';
import './Hero.css';

// Using actual image paths copied from legacy
// Using actual image paths copied from legacy
import profileImg from '../assets/logo.jpg';

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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="image-glow"></div>
          <img src={profileImg} alt="Nikhil Khambhayta" className="hero-image" />
        </motion.div>

        <div className="hero-content">
          <motion.h2 
            className="hero-greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            Hello, I'm
          </motion.h2>

          <motion.h1 
            className="hero-name text-gradient"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          >
            Nikhil Khambhayta
          </motion.h1>

          <motion.div 
            className="hero-roles"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, staggerChildren: 0.2 }}
          >
            <motion.span className="role-tag" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Software Engineer</motion.span>
            <motion.span className="role-tag" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Java Backend Developer</motion.span>
            <motion.span className="role-tag" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Flutter Developer</motion.span>
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
            <motion.button 
              className="btn btn-primary" 
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work <ArrowRight size={18} />
            </motion.button>
            <motion.button 
              className="btn btn-outline" 
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {[
              { icon: <Github size={24} />, href: "https://github.com/nikhil0667" },
              { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/nikhil-khambhayta" },
              { icon: <Twitter size={24} />, href: "https://x.com/NKhambhayt35917" },
              { icon: <Mail size={24} />, href: "mailto:nikhilkhambhayta@gmail.com" }
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon"
                whileHover={{ y: -5, color: "var(--accent-primary)", scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
        
      </div>

      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
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
