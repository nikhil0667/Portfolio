import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import './Experience.css';

import itSolutionsImg from '../assets/IT Solutions.jpg';

const experiences = [
  {
    id: 1,
    role: "Mobile Application Developer",
    company: "Shivaay Soft",
    duration: "Aug 2026 – Present",
    location: "Surat, Gujarat, India · On-site",
    description:
      "Develop and maintain production mobile applications using Flutter and Dart. Integrate REST APIs, handle JWT authentication, analyze API behavior, and drive application stability and performance.",
    logo: null,
    link: null
  },
  {
    id: 2,
    role: "Software Engineer Intern",
    company: "Hyperlink Infosystem",
    duration: "Nov 2025 – May 2026 (7 mos)",
    location: "Ahmedabad, Gujarat, India · On-site",
    description:
      "Developed cross-platform mobile applications using Flutter & Dart. Integrated REST APIs & Firebase. Gained hands-on backend experience with Java and Spring Boot.",
    logo: null,
    link: null
  },
  {
    id: 3,
    role: "Mobile Application Developer",
    company: "DeepVecto",
    duration: "Aug 2023 – Aug 2024 (1 yr 1 mo)",
    location: "Surat, Gujarat, India · On-site",
    description: 
      "Developed and maintained mobile applications using Flutter and Android SDK. Handled backend communication, Firebase, and built LMS and Expense Tracker applications.",
    logo: itSolutionsImg,
    link: "https://www.linkedin.com/in/nikhil-khambhayta/overlay/1729096664467/single-media-viewer/?profileId=ACoAAEjxm1IBOtt-Z-b8-k9ts0nbrXu2W4F_T08"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Professional background and major achievements</p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className="experience-card glass-panel"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="exp-company-logo">
                {exp.logo ? (
                  <img src={exp.logo} alt={exp.company} />
                ) : (
                  <Briefcase size={32} color="var(--accent-primary)" />
                )}
              </div>
              
              <div className="exp-content">
                <h3 className="exp-role">{exp.role}</h3>
                <h4 className="exp-company">{exp.company}</h4>
                
                <div className="exp-meta">
                  <span className="meta-item">
                    <Calendar size={16} />
                    {exp.duration}
                  </span>
                  <span className="meta-item">
                    <MapPin size={16} />
                    {exp.location}
                  </span>
                </div>
                
                <p className="exp-description">{exp.description}</p>
                
                {exp.link && (
                  <a href={exp.link} target="_blank" rel="noreferrer" className="btn-link">
                    View Reference
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
