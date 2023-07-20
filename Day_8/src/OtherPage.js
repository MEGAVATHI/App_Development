import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './OtherPage.css';

const OtherPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const rate = searchParams.get('rate');
  const quantityParam = searchParams.get('quantity');
  const priceParam = searchParams.get('price');
  const pricePerPiece = parseFloat(priceParam);
  const [quantity, setQuantity] = useState(quantityParam || '');
  const [price, setPrice] = useState(0);

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
  };

  useEffect(() => {
    const quantityValue = parseFloat(quantity);
    const newPrice = isNaN(quantityValue) ? 0 : quantityValue * pricePerPiece;
    setPrice(newPrice);
  }, [quantity, pricePerPiece]);

  // Helper function to generate star rating
  const renderStarRating = (rate) => {
    const validCount = Math.max(0, Math.min(5, rate)); // Ensure count is within range 0-5
    const filledStars = '★'.repeat(validCount);
    const emptyStars = '☆'.repeat(5 - validCount);
    const starStyle = {
      color: 'red', // Set the color to red
    };
    return (
      <span style={starStyle}>
        {filledStars}
        {emptyStars}
      </span>
    );
  };

  return (
    <div className="container">
      <h1>Your choice of Gift</h1>
      <div>
        <p>Rate: {renderStarRating(rate)}</p>
        <label>
          Quantity:
          <input
            className="quantity-input"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min={1}
          />
        </label>
        <p>Price: ₹{isNaN(price) ? 0 : price.toFixed(2)}</p>
      </div>
      <Link to={{
        pathname: "/payment",
        state: { price: price.toFixed(2) }
      }} style={{ textDecoration: 'none' }}>
      <button className="payment-button">Payment</button>
      </Link>
    </div>
  );
};

export default OtherPage;
