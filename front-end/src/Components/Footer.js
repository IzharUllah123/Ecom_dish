
import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>MERN_Stack Developer</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: ixharkhan9@gmail.com</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>
          <a href="https://www.linkedin.com/in/izhar-ullah-902588225/" target="_blank" rel="noopener noreferrer">Linkedin</a> 
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
