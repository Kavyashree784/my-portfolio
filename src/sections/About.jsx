import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="section-title">About <span>Me</span></h2>
      <div className="about-content">
        
        {/* Profile Image with Border Effect */}
        <div className="about-image-wrapper">
          <img src="/profile.jpg" alt="Profile" className="profile-img" />
          <div className="image-border"></div>
        </div>

        <div className="about-text">
          <p>
            I’m a software engineer driven by the belief that technology should solve real-world problems in practical and scalable ways. 
            My approach to development goes beyond writing code, it’s about designing systems that are efficient, secure, and built to last.
          </p>
          <p>
            I have hands-on experience building real-time backend systems using Spring Boot and working with data-driven models such as LSTM neural networks for stock market prediction. 
            I enjoy tackling problems that sit at the intersection of system design, performance, and data intelligence.
          </p>
          <p>
            Backed by a strong academic foundation in Software Security and Optimization Techniques, I focus on building solutions that are not only functional, but reliable, secure, and production-ready.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
