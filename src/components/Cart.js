import React from 'react';

const Cart = () => {
  // Dummy cart items for example
  const cartItems = [
    { id: 1, name: 'Gift 1', price: 20, quantity: 2 },
    { id: 2, name: 'Gift 2', price: 30, quantity: 1 },
  ];

  return (
    <div className="cart">
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.name} - Quantity: {item.quantity}</p>
          <p>Total: ${item.price * item.quantity}</p>
        </div>
      ))}
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
