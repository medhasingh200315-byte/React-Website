import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, onViewDetails, onAddToCart }) {
  return (
    <div className="product-list">
      <div className='prd-nav'>
        <h2>Products</h2>
      </div>
      
      <div className="products-grid">
        {products.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onViewDetails={onViewDetails}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
