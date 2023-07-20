import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone_num: '',
    location: '',
  });
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const validateForm = () => {
    const { name, email, password, confirmPassword, phone_num, location } = formData;
    if (!name || !email || !password || !confirmPassword || !phone_num || !location) {
      return 'Please fill in all fields';
    }

    if (password !== confirmPassword) {
      return 'Passwords do not match';
    }

    return null; // No validation error
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');

    
      await axios.post('api/register', formData)
        .then(res =>{
          console.log(res.data);

          // Assuming the response from the server contains a message indicating success or failure
          if (res.data === 'User registered successfully!') {
            setFormData({
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
              phone_num: '',
              location: '',
            });
            setShowPopup(true);
            window.alert("Succcess");
          } else {
            window.alert('Failed to register user. Please try again.');
          }
      })
       .catch (err=> {
      console.log(err);
      window.alert('An error occurred. Please try again.');
    })
  }
  const handlePopupClose = () => {
    setShowPopup(false);
    navigate('/home');
  };

  return (
    <div className="container">
      <div className="registration-form">
        <h2>Registration</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleRegistration}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone_num}
            onChange={(e) => setFormData({ ...formData, phone_num: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            required
          />
          <button type="submit">Register</button>
        </form>
        <div className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Registration Successful!</h3>
            
             
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationPage;