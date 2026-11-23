import React from 'react';
import { skillGroups } from '../data/portfolio';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider" />
          <p className="section-subtitle">Technologies and tools applied across the projects and roles below</p>
        </div>

        <div className="skills-categories-grid">
          {skillGroups.map(([title, description, skills]) => (
            <article key={title} className="skill-category-card glass-panel">
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="skill-tags">
                {skills.map(skill => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
