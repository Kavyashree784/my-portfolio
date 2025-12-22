import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import LiquidEther from '../components/LiquidEther'; // Ensure this file exists!

const Hero = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 } // Delay between each child
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="hero-wrapper">
      {/* --- BACKGROUND LAYER (Z-Index: 0) --- */}
      <div className="hero-background">
        <LiquidEther />
      </div>

      {/* --- CONTENT LAYER (Z-Index: 1) --- */}
      <div className="hero-container">
        {/* Left Content with Staggered Animation */}
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 className="hero-greeting" variants={itemVariants}>
            Hi, I'm <span className="highlight">Kavyashree</span>.
          </motion.h1>
          
          <motion.h2 className="hero-role" variants={itemVariants}>
            Engineering Solutions for the Web & AI.
          </motion.h2>
          
          <motion.p className="hero-description" variants={itemVariants}>
            I am a software engineer specializing in the MERN stack, IoT, and AI/ML. 
            From building real-time event systems to training neural networks, 
            I thrive at the intersection of data and design.
          </motion.p>
          
          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </motion.div>
        </motion.div>

        {/* Right Image with Float Animation */}
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
           <img src="/hero-img.png" alt="Coding Illustration" className="floating-img" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;