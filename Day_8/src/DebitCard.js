import React, { useState } from 'react';
import './CreditCard.css'; // Import the CSS file

const DebitCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardHolderChange = (event) => {
    setCardHolder(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!cardNumber) {
      newErrors.cardNumber = 'Card number is required';
    }

    if (!cardHolder) {
      newErrors.cardHolder = 'Card holder name is required';
    }

    if (!expiryDate) {
      newErrors.expiryDate = 'Expiry date is required';
    }

    if (!cvv) {
      newErrors.cvv = 'CVV is required';
    } else if (cvv.length !== 3) {
      newErrors.cvv = 'CVV must be 3 digits';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Perform the necessary actions with the debit card details
      console.log('Debit Card Number:', cardNumber);
      console.log('Card Holder:', cardHolder);
      console.log('Expiry Date:', expiryDate);
      console.log('CVV:', cvv);

      // Implement your logic here for debit card payment processing

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
    <div className="credit-card-form">
      {submitted ? (
        <ThankYou />
      ) : (
        <>
          <h2>Debit Card Payment</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Card Number:
              <input
                type="text"
                value={cardNumber}
                onChange={handleCardNumberChange}
                className={errors.cardNumber ? 'error' : ''}
              />
              {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
            </label>
            <br />
            <label>
              Card Holder:
              <input
                type="text"
                value={cardHolder}
                onChange={handleCardHolderChange}
                className={errors.cardHolder ? 'error' : ''}
              />
              {errors.cardHolder && <span className="error-message">{errors.cardHolder}</span>}
            </label>
            <br />
            <label>
              Expiry Date:
              <input
                type="text"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                className={errors.expiryDate ? 'error' : ''}
              />
              {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
            </label>
            <br />
            <label>
              CVV:
              <input
                type="text"
                value={cvv}
                onChange={handleCvvChange}
                className={errors.cvv ? 'error' : ''}
              />
              {errors.cvv && <span className="error-message">{errors.cvv}</span>}
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default DebitCard;
