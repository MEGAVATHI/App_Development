import React from 'react';
import './Personalisation.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import { Link } from 'react-router-dom';

const Personalization = () => {
  const products = [
    {
      image: image1,
      rate: 5,
      price: 880,
    },
    {
      image: image2,
      rate: 4,
      price: 567,
    },
    {
      image: image3,
      rate: 3,
      price: 350,
    },
  ];

  return (
    <div className="personalization-page">
      <h1>Personalization Page</h1>
      <div className="image-gallery">
        {products.map((product, index) => (
          <Link
            key={index}
            to={{
              pathname: '/other-page',
              search: `?image=${product.image}&rate=${product.rate}&price=${product.price}`,
              state: { price: product.price },
            }}
          >
            <img src={product.image} alt={`image${index + 1}`} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Personalization;
