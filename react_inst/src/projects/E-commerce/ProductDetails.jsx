import React from 'react';

function ProductDetails({ product, onAddToCart, onClose }) {
  return (
    <div className="product-details">
      <button onClick={onClose}>Close</button>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: Rs.{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
