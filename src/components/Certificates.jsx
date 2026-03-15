import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import './Certificates.css';

const certificates = [
  {
    id: 1,
    title: "Java (Basic) Certification",
    issuer: "HackerRank",
    date: "Aug 28, 2024",
    description: "Strengthened core programming logic through timed coding challenges. Practiced efficient solutions using loops, arrays, conditions, and recursion to solve algorithmic problems under constraints.",
    image: "/legacy_assets/hackerank.png",
    link: "https://www.hackerrank.com/certificates/759a50c960f2"
  },
  {
    id: 2,
    title: "Java Programming Course",
    issuer: "GeeksforGeeks",
    date: "May 2025",
    description: "Completed a 4-week course covering Java fundamentals, object-oriented programming (OOP), exception handling, file I/O, and practical coding practices.",
    image: "/legacy_assets/gfg.png",
    link: "https://media.geeksforgeeks.org/courses/certificates/d67075ecf44a2328f425867c44a01794.pdf"
  },
  {
    id: 3,
    title: "Basics of Python (CR641)",
    issuer: "UniAthena & Cambridge International",
    date: "Jan 2025",
    description: "Completed a foundational Python course covering core concepts such as variables, loops, conditionals, and functions. Achieved a final score of 84/100.",
    image: "/legacy_assets/uni.png",
    links: [
      { url: "https://lnkd.in/d5j3bFZt", label: "View Certificate" },
      { url: "https://drive.google.com/file/d/1-05bCs8sl8G-rPG_bDhXONM1jNZfsP-N/view", label: "View Result" }
    ]
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certificates</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Recognitions and milestones in my continuous learning journey
          </p>
        </motion.div>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div 
              key={cert.id}
              className="certificate-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="cert-image-container">
                {cert.image ? (
                  <img src={cert.image} alt={cert.title} className="cert-image" />
                ) : (
                  <div className="cert-placeholder">
                    <Award size={48} color="var(--accent-primary)" />
                  </div>
                )}
              </div>
              
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
                
                <p className="cert-description">{cert.description}</p>
                
                <div className="cert-actions">
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noreferrer" className="cert-btn">
                      Verify <ExternalLink size={16} />
                    </a>
                  )}
                  {cert.links && cert.links.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noreferrer" className="cert-btn">
                      {link.label} <ExternalLink size={16} />
                    </a>
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

export default Certificates;
