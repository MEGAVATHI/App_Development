import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Feedback.css'; 

const Feedback = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: 'SUBMIT_FEEDBACK',
      payload: { userName, productName,category, phoneNumber, message },
    });
    setSubmitted(true);
  };

  return (
    <div className="feedback-background">
      <div className="feedback-container">
        <div className="feedback-box">
          <h2>Your Reviews</h2>
          {submitted ? ( 
            <p>Thank you for your views!</p>
          ) : ( 
            <form onSubmit={handleSubmit}>
              <label htmlFor="userName">Name</label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />

              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
              <label htmlFor="category">Category</label>
              <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />

              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
