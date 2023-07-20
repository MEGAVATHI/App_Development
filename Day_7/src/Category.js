import React from 'react';
import './Personalisation.css';
import image11 from './images/image11.jpg';
import image12 from './images/image12.jpg';
import image13 from './images/image13.jpg';
import { Link } from 'react-router-dom';

const Category = () => {
  const products = [
    {
      image: image11,
      rate: 5,
      price: 350,
    },
    {
      image: image12,
      rate: 3,
      price: 400,
    },
    {
      image: image13,
      rate: 8,
      price: 320,
    },
  ];

  return (
    <div className="main">
      <h1>Category Page</h1>
      <div className="image-grid">
        {products.map((product, index) => (
          <Link
            key={index}
            to={{
              pathname: '/other-page',
              search: `?image=${product.image}&rate=${product.rate}&quantity=1&price=${product.price}`,
              state: { price: product.price },
            }}
          >
            <div className="category-item">
              <img src={product.image} alt={`Category ${index + 1}`} />
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
