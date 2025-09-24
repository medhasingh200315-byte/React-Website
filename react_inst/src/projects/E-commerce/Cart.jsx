import React from 'react';

function Cart({ cart, onRemove, onCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Rs.{item.price}</p>
              <button onClick={() => onRemove(item.id)}>Remove</button>
            </div>
          ))}
          <p>Total: Rs.{total}</p>
          <button onClick={onCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;
