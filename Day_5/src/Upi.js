import React, { useState } from 'react';
import './CreditCard.css'; // Import the CSS file

const Upi = () => {
  const [upiId, setUpiId] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleUpiIdChange = (event) => {
    setUpiId(event.target.value);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!upiId) {
      newErrors.upiId = 'UPI ID is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Perform the necessary actions with the UPI ID
      console.log('UPI ID:', upiId);

      // Implement your logic here for UPI payment processing

      setSubmitted(true);
    }
  };

  const ThankYou = () => (
    <div className="thank-you">
      <h2>Thank You for Your Payment!</h2>
      <p>We appreciate your business.</p>
    </div>
  );

  return (
    <div className="credit-card-form"> {/* Use the existing CSS class from credit-card.css */}
      {submitted ? (
        <ThankYou />
      ) : (
        <>
          <h2>UPI Payment</h2>
          <form onSubmit={handleSubmit}>
            <label>
              UPI ID:
              <input
                type="text"
                value={upiId}
                onChange={handleUpiIdChange}
                className={errors.upiId ? 'error' : ''}
              />
              {errors.upiId && <span className="error-message">{errors.upiId}</span>}
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Upi;

