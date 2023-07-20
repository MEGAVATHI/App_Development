import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import Navbar from './Navbar';
import HomePage1 from './HomePage1';
import About from './About';
import Terms from './Terms';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/terms" element={<Terms/>} />
        <Route path="/home" element={
            <>
              <Navbar />
             <Footer/>
              <HomePage1 />
            </>
          }
        />
      </Routes>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
    
  </BrowserRouter>,
  document.getElementById('root')
);
// <Route path="/terms" element={<TermsAndConditions />} />