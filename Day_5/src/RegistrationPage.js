// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './RegistrationPage.css';

// const RegistrationPage = () => {
//   const navigate = useNavigate();

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [location, setLocation] = useState('');
//   const [error, setError] = useState('');

//   const handleRegistration = (e) => {
//     e.preventDefault();

//     setError('');

//     // Form validation
//     if (!name || !email || !password || !confirmPassword || !phoneNumber || !location) {
//       setError('Please fill in all fields');
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     navigate('/home');
//   };

//   return (
//     <div className="container">
//       <div className="registration-form">
//         <h2>Registration</h2>
//         {error && <div className="error-message">{error}</div>}
//         <form onSubmit={handleRegistration}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//           <input
//             type="tel"
//             placeholder="Phone Number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             required
//           />
//           <button type="submit">Register</button>
//         </form>
//         <div className="login-link">
//           Already have an account? <Link to="/login">Login here</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegistrationPage;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();

    setError('');

    // Form validation
    if (!name || !email || !password || !confirmPassword || !phoneNumber || !location) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Send the registration data to the backend API
      const response = await axios.post('http://localhost:8080/api/register', {
        name,
        email,
        password,
        phoneNumber,
        location,
      });

      // Registration successful, navigate to the homepage
      if (response.status === 200) {
        navigate('/home');
      } else {
        setError('Failed to register user.');
      }
    } catch (error) {
      // Handle API errors
      setError('Failed to register user.');
    }
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
        <div className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
