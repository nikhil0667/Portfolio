import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Server } from 'lucide-react';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="section about-section">
      <div className="container">
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Driven by curiosity and committed to growth in software development.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 variants={itemVariants} className="about-heading">
              Software Engineer & Mobile Developer
            </motion.h3>
            
            <motion.div variants={itemVariants} className="about-description">
              <p>
                I am a Software Engineer with a strong foundation in Core Java and Advanced Java technologies including Servlets, JSP, and JDBC. I focus on building reliable backend systems and efficient APIs.
              </p>
              <p>
                Along with backend development, I have over 1 year of experience developing mobile applications using Flutter, where I build responsive and high-performance cross-platform apps.
              </p>
              <p>
                My approach to software development focuses on clean code, scalable architecture, and industry best practices such as MVC design patterns and RESTful architecture.
              </p>
              <p>
                I am continuously improving my expertise in Spring Boot, backend architecture, and scalable application development.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="stats-grid">
              <div className="stat-card glass-panel">
                <div className="stat-number text-gradient">3+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card glass-panel">
                <div className="stat-number text-gradient">1+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card glass-panel">
                <div className="stat-number text-gradient">5+</div>
                <div className="stat-label">Core Technologies</div>
              </div>
              <div className="stat-card glass-panel">
                <div className="stat-number text-gradient">100%</div>
                <div className="stat-label">Commitment</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="about-visuals"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="tech-stack-container glass-panel">
              <h4 className="tech-stack-title">What I Do</h4>
              
              <div className="tech-item">
                <div className="tech-icon-wrapper java-theme">
                  <Server size={24} />
                </div>
                <div className="tech-info">
                  <h5>Backend Development</h5>
                  <p>Develop scalable backend systems using Java, Spring Boot, REST APIs, JDBC, and MySQL.</p>
                </div>
              </div>
              
              <div className="tech-item">
                <div className="tech-icon-wrapper flutter-theme">
                  <Smartphone size={24} />
                </div>
                <div className="tech-info">
                  <h5>Mobile Application Development</h5>
                  <p>Build high-performance cross-platform mobile apps using Flutter and Dart.</p>
                </div>
              </div>

              <div className="tech-item">
                <div className="tech-icon-wrapper db-theme">
                  <Database size={24} />
                </div>
                <div className="tech-info">
                  <h5>Database Architecture</h5>
                  <p>Design efficient database schemas using MySQL, SQLite, and Room Database.</p>
                </div>
              </div>
              
              <div className="tech-item">
                <div className="tech-icon-wrapper tools-theme">
                  <Code size={24} />
                </div>
                <div className="tech-info">
                  <h5>Software Engineering</h5>
                  <p>Apply strong fundamentals of Data Structures, Algorithms, Object-Oriented Programming, and MVC Architecture.</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
