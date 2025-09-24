import React, { useState } from 'react';

function Carousel({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const currentProduct = products[currentIndex];

  return (
    <div className="carousel">
      <div className="carousel-content">
        <button className="carousel-btn prev-btn" onClick={prevProduct}>
          &#8249;
        </button>
        <div className="carousel-item">
          <img src={currentProduct.image} alt={currentProduct.name} />
          <h3>{currentProduct.name}</h3>
          <p>{currentProduct.description}</p>
          <p className="price">Price: Rs.{currentProduct.price}</p>
        </div>
        <button className="carousel-btn next-btn" onClick={nextProduct}>
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default Carousel;
