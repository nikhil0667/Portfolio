'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Skills.css';

const skillsData = [
  { name: 'Java (Core & Advanced)', category: 'backend',  percentage: 85, color: '#f97316' },
  { name: 'Flutter',                 category: 'mobile',   percentage: 90, color: '#38bdf8' },
  { name: 'Android Development',     category: 'mobile',   percentage: 80, color: '#4ade80' },
  { name: 'SQL (MySQL)',              category: 'database', percentage: 75, color: '#a78bfa' },
  { name: 'HTML / CSS / JS',         category: 'web',      percentage: 90, color: '#facc15' },
  { name: 'React JS',                category: 'web',      percentage: 50, color: '#818cf8' },
  { name: 'Spring Boot',             category: 'backend',  percentage: 60, color: '#34d399' },
  { name: 'Dart',                    category: 'mobile',   percentage: 85, color: '#60a5fa' },
];

const RADIUS = 46;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const CircleSkill = ({ skill, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const offset = CIRCUMFERENCE - (skill.percentage / 100) * CIRCUMFERENCE;

  return (
    <motion.div
      ref={ref}
      className="skill-circle-card glass-panel"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, boxShadow: `0 16px 40px ${skill.color}22` }}
    >
      <div className="skill-svg-wrapper">
        <svg viewBox="0 0 110 110" className="skill-svg">
          {/* Background ring */}
          <circle cx="55" cy="55" r={RADIUS} className="skill-ring-bg" />
          {/* Animated fill ring */}
          <motion.circle
            cx="55"
            cy="55"
            r={RADIUS}
            className="skill-ring-fill"
            style={{ stroke: skill.color }}
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: CIRCUMFERENCE }}
            transition={{ duration: 1.6, delay: 0.3 + index * 0.08, ease: [0.25, 1, 0.5, 1] }}
          />
        </svg>
        <div className="skill-pct" style={{ color: skill.color }}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6 + index * 0.08 }}
          >
            {skill.percentage}%
          </motion.span>
        </div>
      </div>
      <p className="skill-label">{skill.name}</p>
      <span className={`skill-cat-badge cat-${skill.category}`}>{skill.category}</span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Technologies and tools I use to bring ideas to life</p>
        </motion.div>

        <div className="skills-circles-grid">
          {skillsData.map((skill, i) => (
            <CircleSkill key={i} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
