import React, { useState } from 'react';
import './Projects.css';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  // State to track if we are showing all projects or just the top 3
  const [showAll, setShowAll] = useState(false);

  // If showAll is true, use all projects. If false, slice the first 3.
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="projects-container">
      <h2 className="section-title">Some Things I've <span>Built</span></h2>
      
      <div className="projects-grid">
        {visibleProjects.map((project, index) => (
          // We pass the 'index' so the card knows whether to sit on the Left or Right
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Only show the button if there are more than 3 projects */}
      {projects.length > 3 && (
        <div className="show-more-container">
          <button 
            className="btn btn-outline" 
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;