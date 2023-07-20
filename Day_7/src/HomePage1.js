import React, { useState } from 'react';
import './HomePage1.css';
import Navbar from './Navbar';
import Footer from './Footer';

const HomePage1 = () => {
  

  return (
    <div className="container">
      <Navbar />

      <div className="content">
        <h1>Welcome to Our Gift Portal</h1>
        <p>Gift-giving can lower your blood pressure, increase self-esteem, and lower depression. An item given to someone without the expectation of payment or anything in return. Strengthens emotional bonds, deepens relationships, and fosters a sense of connection between the giver and receiver.</p>
      </div>

      
      

      <Footer />
    </div>
  );
};

export default HomePage1;
