import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      className={`project-row ${isEven ? 'row-normal' : 'row-reverse'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* Content Side */}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-description-box">
          <p>{project.description}</p>
        </div>
        <ul className="project-tech-list">
          {project.techStack.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href={project.githubLink} target="_blank" rel="noreferrer" className="link-icon">
             {/* GitHub Icon SVG */}
             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href={project.liveLink} target="_blank" rel="noreferrer" className="link-icon">
             {/* External Link SVG */}
             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      </div>

      {/* Visual Side (Image) */}
      <div className="project-visual">
        <div className="image-container">
           {/* Fallback to text if image is missing, though image is preferred */}
           {project.image ? (
             <img src={project.image} alt={project.title} className="project-img" />
           ) : (
             <div className="placeholder-box">Image Missing</div>
           )}
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectCard;