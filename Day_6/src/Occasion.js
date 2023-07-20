import React from 'react';
import './Personalisation.css';
import image21 from './images/image21.jpg';
import image22 from './images/image22.jpg';
import image23 from './images/image23.jpg';
import { Link } from 'react-router-dom';

const Occasion = () => {
  const occasions = [
    {
      image: image21,
      rate: 4,
      price: 400,
    },
    {
      image: image22,
      rate: 5,
      price: 500,
    },
    {
      image: image23,
      rate: 3,
      price: 550,
    },
  ];

  return (
    <div className="occasion-page">
      <h1>Occasion Page</h1>
      <div className="image-gallery">
        {occasions.map((occasion, index) => (
          <Link
            key={index}
            to={{
              pathname: '/other-page',
              search: `?image=${occasion.image}&rate=${occasion.rate}&price=${occasion.price}`,
              state: { price: occasion.price },
            }}
          >
            <img src={occasion.image} alt={`image${index + 1}`} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Occasion;
