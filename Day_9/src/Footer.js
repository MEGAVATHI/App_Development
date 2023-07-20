import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/terms" className="footer-link">Terms and Conditions</Link>
        <Link to="/privacy" className="footer-link">Privacy Policy</Link>
        <Link to="/faq" className="footer-link">FAQ</Link>
        <Link to="/contact" className="footer-link">Contact</Link>
      </div>
      <p>&copy; All rights reserved.</p>
    </footer>
  );
};

export default Footer;
