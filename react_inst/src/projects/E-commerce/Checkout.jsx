import React from 'react';

function Checkout({ cart, onBack }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <p>Review your order:</p>
      {cart.map(item => (
        <div key={item.id} className="checkout-item">
          <h3>{item.name}</h3>
          <p>Rs.{item.price}</p>
        </div>
      ))}
      <p>Total: Rs.{total}</p>
      <button onClick={onBack}>Back to Cart</button>
      <button>Complete Purchase</button>
    </div>
  );
}

export default Checkout;
