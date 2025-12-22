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
            I am a software engineer who believes in technology's power to solve complex real-world problems. 
            My journey involves more than just writing code; it's about engineering solutions.
          </p>
          <p>
            Whether it's architecting a real-time event management system with Spring Boot, designing IoT home automation 
            accessible via voice commands, or training LSTM neural networks to predict stock market trends, 
            I thrive at the intersection of hardware, software, and data.
          </p>
          <p>
            With a strong academic foundation in Software Security and Optimization Techniques, 
            I build systems that are not only functional but also secure and efficient.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;