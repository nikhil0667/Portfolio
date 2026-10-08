'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Hero.css';

import profileImg from '../assets/logo.jpg';

const ROLES = [
  'Software Engineer',
  'Java Backend Developer',
  'Flutter Developer',
  'Mobile App Developer',
];

const TypeWriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (!deleting && subIndex === words[index].length + 1) {
      const pause = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(pause);
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setText(words[index].substring(0, subIndex));
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 85);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words]);

  return (
    <span className="typewriter-text">
      {text}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
  };
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="image-glow" />
          <div className="image-ring image-ring-1" />
          <div className="image-ring image-ring-2" />
          <img src={profileImg} alt="Nikhil Khambhayta" className="hero-image" />
        </motion.div>

        <div className="hero-content">
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 90 }}
          >
            👋 Hello, I'm
          </motion.p>

          <motion.h1
            className="hero-name text-gradient"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, type: 'spring', stiffness: 90 }}
          >
            Nikhil Khambhayta
          </motion.h1>

          <motion.div
            className="hero-typewriter"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <TypeWriter words={ROLES} />
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Passionate software developer building scalable backend systems and cross-platform mobile
            applications. Skilled in Core Java, Spring Boot, JDBC, MySQL, and Flutter.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.button
              className="btn btn-primary"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.06, boxShadow: '0 0 28px rgba(56, 189, 248, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work <ArrowRight size={18} />
            </motion.button>
            <motion.button
              className="btn btn-outline"
              onClick={scrollToContact}
              whileHover={{ scale: 1.06, backgroundColor: 'rgba(255,255,255,0.06)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {[
              { icon: <FaGithub size={22} />, href: 'https://github.com/nikhil0667', label: 'GitHub' },
              { icon: <FaLinkedin size={22} />, href: 'https://www.linkedin.com/in/nikhil-khambhayta', label: 'LinkedIn' },
              { icon: <FaTwitter size={22} />, href: 'https://x.com/NKhambhayt35917', label: 'Twitter' },
              { icon: <Mail size={22} />, href: 'mailto:nikhilkhambhayta@gmail.com', label: 'Email' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label={social.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                whileHover={{ y: -6, color: 'var(--accent-primary)', scale: 1.15 }}
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
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        onClick={scrollToProjects}
      >
        <div className="mouse">
          <div className="wheel" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
