import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Smartphone, Database, Globe } from 'lucide-react';
import './Skills.css';

const skillsData = [
  { name: "Java (Core & Advanced)", category: "backend", percentage: 85, icon: <Terminal size={20} /> },
  { name: "Flutter", category: "mobile", percentage: 90, icon: <Smartphone size={20} /> },
  { name: "Android Development", category: "mobile", percentage: 80, icon: <Smartphone size={20} /> },
  { name: "SQL (MySQL)", category: "database", percentage: 75, icon: <Database size={20} /> },
  { name: "Web Fundamentals (HTML/CSS)", category: "web", percentage: 90, icon: <Globe size={20} /> },
  { name: "React JS", category: "web", percentage: 50, icon: <Globe size={20} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-item glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-header">
                <div className={`skill-name skill-${skill.category}`}>
                  <span className="skill-icon">{skill.icon}</span>
                  {skill.name}
                </div>
                <div className="skill-percentage">{skill.percentage}%</div>
              </div>
              
              <div className="skill-bar-bg">
                <motion.div 
                  className={`skill-bar-fill fill-${skill.category}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
