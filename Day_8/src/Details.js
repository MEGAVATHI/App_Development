import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Details.css';

const Details = () => {
  const [name, setName] = useState('');
  const [dressName, setDressName] = useState('');
  const [color, setColor] = useState('');
  const [message, setMessage] = useState('');
  const [printName, setPrintName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here, e.g., send data to the backend
    console.log('Submitted data:', { name, dressName, color, message, printName });

    // You can add additional logic to handle the form submission, e.g., showing a thank you message
    // Then navigate to the other page
    navigate('/other-page');
  };

  return (
    <div className="detail-page">
      <h1>Detail Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Dress Name:
          <input type="text" value={dressName} onChange={(e) => setDressName(e.target.value)} required />
        </label>
        <br />
        <label>
          Color:
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} required />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>
        <br />
        <label>
          Print Name:
          <input type="text" value={printName} onChange={(e) => setPrintName(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Details;
