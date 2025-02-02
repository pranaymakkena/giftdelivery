import React, { useState, useEffect } from 'react';
import { giftCards } from './GiftCardList';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  const handleRemoveFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter(item => item !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty. Add some items!</p>
      ) : (
        <div className="gift-card-list">
          {giftCards.filter(card => wishlist.includes(card.id)).map(card => (
            <div key={card.id} className="gift-card-item">
              <img src={card.imgSrc} alt={card.name} loading="lazy" />
              <h3>{card.name}</h3>
              <p>{card.description}</p>
              <button
                className="remove-btn"
                onClick={() => handleRemoveFromWishlist(card.id)}
              >
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
