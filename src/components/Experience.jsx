import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Intern – Android & Cross-Platform Developer",
    company: "DeepVectro",
    duration: "2023 – 2024 (1 Year)",
    location: "Remote / On-site",
    description: 
      "Developed real-world mobile applications using Flutter and native Android. Integrated Node.js backends and RESTful APIs while strictly adhering to UI/UX enhancements and app performance tuning.",
    logo: "../src/assets/IT Solutions.jpg",
    link: "https://www.linkedin.com/in/nikhil-khambhayta/overlay/1729096664467/single-media-viewer/?profileId=ACoAAEjxm1IBOtt-Z-b8-k9ts0nbrXu2W4F_T08"
  }
  // Add EliteWave Tech here when available
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
