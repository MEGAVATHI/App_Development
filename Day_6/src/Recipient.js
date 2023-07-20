import React from 'react';
import './Personalisation.css';
import image31 from './images/image31.jpg';
import image32 from './images/image32.jpg';
import image33 from './images/image33.jpg';
import image34 from './images/image34.jpg';
import image35 from './images/image35.jpg';
import image36 from './images/image36.jpg';
import image37 from './images/image37.jpg';
import image38 from './images/image38.jpg';
import image39 from './images/image39.jpg';
import image40 from './images/image40.jpg';
import { Link } from 'react-router-dom';

const Recipient = () => {
  const recipients = [
    {
      image: image31,
      rate: 4,
      price: 788,
    },
    {
      image: image32,
      rate: 4,
      price: 990,
    },
    {
      image: image33,
      rate: 5,
      price: 599,
    },
    {
      image: image34,
      rate: 5,
      price: 677,
    },
    {
      image: image35,
      rate: 5,
      price: 499,
    },
    {
      image: image36,
      rate: 3.5,
      price: 999,
    },
    {
      image: image37,
      rate: 4,
      price: 678,
    },
    {
      image: image38,
      rate: 5,
      price: 990,
    },
    {
      image: image39,
      rate: 4,
      price: 1002,
    },
    {
      image: image40,
      rate: 5,
      price: 1040,
    },
  ];

  return (
    <div className="recipient-page">
      <h1>Recipient Page</h1>
      <div className="image-gallery">
        {recipients.map((recipient, index) => (
          <Link
            key={index}
            to={{
              pathname: '/other-page',
              search: `?image=${recipient.image}&rate=${recipient.rate}&price=${recipient.price}`,
              state: { price: recipient.price },
            }}
          >
            <img src={recipient.image} alt={`image${index + 1}`} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recipient;
