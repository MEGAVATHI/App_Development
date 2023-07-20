import React, { useState } from 'react';
import './Payment.css';
import CreditCard from './CreditCard';
import DebitCard from './DebitCard';
import Upi from './Upi';

const PaymentPage = () => {
  const [name, setName] = useState('');
  const [dress, setDress] = useState('');
  const [color, setColor] = useState('');
  const [message, setMessage] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Handle form submission here, e.g., send data to the backend or perform some action
    console.log('Payment Details:', { name, dress, color, message });

    // After form submission, hide the form and show the "Select Payment Method" section
    setShowForm(false);
    setShowPaymentOptions(true);
  };

  const handlePaymentMethodSubmit = () => {
    // Handle payment method submission here, e.g., perform payment processing

    // After selecting payment method, hide the "Select Payment Method" section and show the "Thank You" message
    setShowPaymentOptions(false);
    setShowThankYou(true);
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
    setShowForm(false);
    setShowPaymentOptions(false);
    setShowThankYou(false);
  };

  return (
    <div>
      <div className="payment-background"></div>
      <div className="payment-main">
        {showForm && (
          <form onSubmit={handleFormSubmit}>
            <label>
              Name(printed):
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Product Name:
              <input
                type="text"
                value={dress}
                onChange={(e) => setDress(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Color:
              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Message:
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        )}

        {showThankYou && (
          <div className="thank-you-message">
            <h2>Thank You for your Payment!</h2>
            
          </div>
        )}

        {showPaymentOptions && !showThankYou && (
          <div className="center-container">
            <h2 className="payment-method-title">Select Payment Method</h2>
            <button onClick={() => handlePaymentMethodChange('Credit Card')}>Credit Card</button>
            <button onClick={() => handlePaymentMethodChange('Debit Card')}>Debit Card</button>
            <button onClick={() => handlePaymentMethodChange('UPI')}>UPI</button>
          </div>
        )}

        {selectedPaymentMethod === 'Credit Card' && !showThankYou && (
          <CreditCard onSubmit={handlePaymentMethodSubmit} />
        )}

        {selectedPaymentMethod === 'Debit Card' && !showThankYou && (
          <DebitCard onSubmit={handlePaymentMethodSubmit} />
        )}

        {selectedPaymentMethod === 'UPI' && !showThankYou && <Upi onSubmit={handlePaymentMethodSubmit} />}
      </div>
    </div>
  );
};

export default PaymentPage;
