import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const encodedURL = "aHR0cHM6Ly9mb3Jtc3ByZWUuaW8vZi9tdmdya2dheQ==";

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-desc">
              Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:nikhilkhambhayta@gmail.com">nikhilkhambhayta@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Remote / India</p>
                </div>
              </div>
            </div>
            
            <div className="contact-glow"></div>
          </motion.div>

          <motion.div 
            className="contact-form-container glass-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <form 
              className="contact-form" 
              action={atob(encodedURL)} 
              method="POST"
            >
              <input type="hidden" name="_redirect" value="thank-you.html" />
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-input" 
                  required 
                  placeholder="Enter your name" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="_replyto" 
                  className="form-input" 
                  required 
                  placeholder="you@example.com" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="form-textarea" 
                  rows="5" 
                  required 
                  placeholder="Type your message..."
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
