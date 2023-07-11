import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="container">
  
       <div class="background-image">
    </div>
    
      <h2 className="title">Customised gift Portal</h2>
      <div className="links">
        <Link to="/login" className="link">LOGIN</Link>
        <Link to="/register" className="link">REGISTER</Link>
      </div>
    </div>
  );
};

export default HomePage;
