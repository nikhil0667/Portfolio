import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: "LMS System",
    description: "Developed a Learning Management System during internship at DeepVectro using Flutter. The app includes login/authentication, course modules, quiz submissions, and progress tracking.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop", // placeholder matched to aesthetic
    tech: ["Flutter", "Dart", "Firebase", "Provider"]
  },
  {
    title: "Android Expense Tracker App",
    description: "Developed a full-featured expense tracking Android app during internship. Features include categorizing expenses, tracking credit & debit, summary charts, and data persistence using SQLite database.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    tech: ["Android", "Java", "SQLite", "MVC Pattern"]
  },
  {
    title: "Ride-Sharing App Prototype",
    description: "Developed an Android app connecting riders and drivers with secure login, real-time GPS tracking, ride requests, and live ride tracking on maps.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    tech: ["Android Studio", "Java", "Google Maps SDK", "Firebase"]
  },
  {
    title: "CampusConnect",
    description: "Mobile app for college management featuring student CRUD operations, timetable viewing, and PDF document downloads for efficient information management.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    tech: ["Android", "Java", "API Integration"]
  },
  {
    title: "Fitness Tracker App",
    description: "Developed a fitness app to track users' step count, distance, and calories burned in real-time using Android's built-in sensors. Includes history and charts.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
    tech: ["Android Studio", "Kotlin", "Room DB", "MPAndroidChart"]
  },
  {
    title: "Media Player App",
    description: "Created a media player application allowing users to play, pause, and navigate songs from local storage. Supports background playback, dynamic playlists.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&h=400",
    tech: ["Android Studio", "Java", "MediaPlayer API", "Foreground Service"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Explore some of my recent work showcasing various technologies and problem-solving approaches.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image-container">
                <div className="project-overlay">
                  <span className="view-project-btn">
                    View Reference <ExternalLink size={18} />
                  </span>
                </div>
                <img src={project.image} alt={project.title} className="project-card-image" />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
