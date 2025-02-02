import React, { useState, useEffect } from 'react';
import { giftCards } from './GiftCardList';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter(item => item !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout!');
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add some items!</p>
      ) : (
        <div className="gift-card-list">
          {giftCards.filter(card => cart.includes(card.id)).map(card => (
            <div key={card.id} className="gift-card-item">
              <img src={card.imgSrc} alt={card.name} loading="lazy" />
              <h3>{card.name}</h3>
              <p>{card.description}</p>
              <button
                className="remove-btn"
                onClick={() => handleRemoveFromCart(card.id)}
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="checkout">
        <button onClick={handleCheckout} className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
