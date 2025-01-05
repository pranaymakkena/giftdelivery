import React from 'react';
import { Link } from 'react-router-dom';

const GiftCardList = () => {
  const giftCards = [
    { id: 1, name: 'Amazon', imgSrc: '/images/amazon.png' },
    { id: 2, name: 'Flipkart', imgSrc: 'flipkart.jpg' },
    { id: 3, name: 'Pizza Hut', imgSrc: 'pizzahut.jpg' },
    { id: 4, name: 'Domino\'s', imgSrc: 'dominos.jpg' },
  ];

  return (
    <div className="gift-card-list">
      {giftCards.map((card) => (
        <div key={card.id} className="gift-card-item">
          <img src={card.imgSrc} alt={card.name} />
          <h3>{card.name}</h3>
          <Link to={`/gift-card/${card.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default GiftCardList;
