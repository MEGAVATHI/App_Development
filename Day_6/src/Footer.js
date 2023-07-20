import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
      <li className="nav-item">
      <Link to="/terms" className="footer-link">
      TermsAndConditions
      </Link>
    </li>
        <Link to="/privacy" className="footer-link">Privacy Policy</Link>
        <Link to="/feedback" className="footer-link">FeedBack</Link>
        <Link to="/contact" className="footer-link">Contact</Link>
      </div>
      <p>&copy;2023 Happiness All rights reserved.</p>
    </footer>
  );
};

export default Footer;
