import React from 'react';
import './Skills.css';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">My <span>Tech Stack</span></h2>
      
      <div className="skills-grid">
        {skills.map((category) => (
          <div key={category.category} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            
            <div className="skill-list">
              {category.items.map((skill) => (
                <div key={skill.name} className="skill-item">
                  
                  {/* The Icon Component */}
                  <span className="skill-icon">
                    <skill.icon style={{ color: skill.color }} />
                  </span>
                  
                  {/* The Skill Name */}
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;