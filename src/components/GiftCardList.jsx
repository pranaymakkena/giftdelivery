import React from 'react';
import { Link } from 'react-router-dom';

const GiftCardList = () => {
  const giftCards = [
    { id: 1, name: 'Amazon', imgSrc: '/images/amazon.png' },
    { id: 2, name: 'Flipkart', imgSrc: '/images/flipkart.png' },
    { id: 3, name: 'Pizza Hut', imgSrc: '/images/pizzahut.png' },
    { id: 4, name: 'Domino\'s', imgSrc: '/images/dominos.png' },
     { id: 5, name: 'Myntra', imgSrc: '/images/myntra.webp' },
    { id: 6, name: 'Archies', imgSrc: '/images/archies.webp' },
    { id: 7, name: 'PVR', imgSrc: '/images/pvr.webp' },
    { id: 8, name: 'BookMyShow', imgSrc: '/images/bookmyshow.png' },
    { id: 9, name: 'Zee5', imgSrc: '/images/zee5.webp' },
    { id: 10, name: 'Zomato', imgSrc: '/images/zomato.png' },
    { id: 11, name: 'Swiggy', imgSrc: '/images/swiggy.webp' },
    { id: 12, name: 'MakeMyTrip', imgSrc: '/images/makemytrip.webp' },
    { id: 13, name: 'MamaEarth', imgSrc: '/images/mamaearth.webp' },
    { id: 14, name: 'Cello', imgSrc: '/images/cello.webp' },
    { id: 14, name: 'BigBasket', imgSrc: '/images/bigbasket.PNG' },
    { id: 14, name: 'Blinkit', imgSrc: '/images/blinkit.WEBP' },
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
