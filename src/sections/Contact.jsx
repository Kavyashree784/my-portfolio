// src/sections/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="section-title">Get In <span>Touch</span></h2>
      
      <p className="contact-text">
        I am currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
      </p>

      <a href="mailto:shreekavya077@gmail.com" className="btn-contact">
        Say Hello
      </a>
    </div>
  );
};

export default Contact;