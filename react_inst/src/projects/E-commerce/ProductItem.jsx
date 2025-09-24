import React from 'react';

function ProductItem({ product, onViewDetails, onAddToCart }) {
  const discount = Math.floor(Math.random() * 50) + 10;
  const originalPrice = Math.round(product.price / (1 - discount / 100));

  return (
    <div className="product-item">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} />
        <div className="discount-badge">-{discount}%</div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="rating">
          {'★'.repeat(4)}{'☆'.repeat(1)} (4.0)
        </div>
        <div className="prices">
          <span className="original-price">Rs.{originalPrice}</span>
          <span className="discounted-price">Rs.{product.price}</span>
        </div>
        <button onClick={() => onViewDetails(product)}>View Details</button>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductItem;
