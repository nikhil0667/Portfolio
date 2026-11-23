'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'Ved Enterprise – Corporate Website',
    description: 'Multilingual corporate website for a global blister packing machine spare parts exporter. Built with Next.js 16, React, TypeScript, and Tailwind CSS, featuring 20+ language support, 93+ Lighthouse performance, and advanced SEO.',
    image: '/assets/projects/ved-enterprise.jpg',
    tech: ['Next.js 16', 'React', 'TypeScript', 'Tailwind CSS', 'SEO', 'i18n'],
    link: 'https://vedenterprise.vercel.app',
    accent: '#38bdf8',
  },
  {
    title: 'LMS System',
    description: 'A Learning Management System built during internship using Flutter with login/authentication, course modules, quiz submissions, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop',
    tech: ['Flutter', 'Dart', 'Firebase', 'Provider'],
    accent: '#34d399',
  },
  {
    title: 'Android Expense Tracker',
    description: 'Full-featured expense tracking Android app with categories, credit & debit tracking, summary charts, and SQLite data persistence.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    tech: ['Android', 'Java', 'SQLite', 'MVC'],
    accent: '#f97316',
  },
  {
    title: 'Ride-Sharing App Prototype',
    description: 'Android app connecting riders and drivers with secure login, real-time GPS tracking, ride requests, and live maps integration.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
    tech: ['Android Studio', 'Java', 'Google Maps', 'Firebase'],
    accent: '#a78bfa',
  },
  {
    title: 'CampusConnect',
    description: 'Mobile app for college management featuring student CRUD, timetable viewing, and PDF document downloads for efficient information management.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
    tech: ['Android', 'Java', 'API Integration'],
    accent: '#facc15',
  },
  {
    title: 'Fitness Tracker App',
    description: 'Tracks step count, distance, and calories burned in real-time using Android sensors. Includes history charts and persistent data.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop',
    tech: ['Android Studio', 'Kotlin', 'Room DB', 'MPAndroidChart'],
    accent: '#4ade80',
  },
  {
    title: 'Media Player App',
    description: 'Media player with play/pause/navigation, background playback, dynamic playlists from local storage, and Foreground Service support.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&h=400',
    tech: ['Android Studio', 'Java', 'MediaPlayer API', 'Foreground Service'],
    accent: '#60a5fa',
  },
];

const TiltCard = ({ project, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -8;
    const rotateY = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    card.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
  };

  return (
    <motion.div
      className="project-card glass-panel tilt-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ '--card-accent': project.accent }}
    >
      <div className="project-image-container">
        <div className="project-overlay">
          {project.link ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
              Visit Site <ExternalLink size={16} />
            </a>
          ) : (
            <span className="view-project-btn no-link">View Project</span>
          )}
        </div>
        <div className="project-accent-bar" style={{ background: project.accent }} />
        <img src={project.image} alt={project.title} className="project-card-image" />
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech-stack">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-badge" style={{ '--badge-color': project.accent }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Mouse-follow spotlight */}
      <div className="card-spotlight" />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider" />
          <p className="section-subtitle">
            Explore my recent work showcasing various technologies and problem-solving approaches.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <TiltCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
