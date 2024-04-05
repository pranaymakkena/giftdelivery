import React from 'react';
import GiftCard from './GiftCard';

const GiftList = () => {
  // Dummy gift data for example
  const gifts = [
    { id: 1, name: 'Gift 1', price: 20 },
    { id: 2, name: 'Gift 2', price: 30 },
    { id: 3, name: 'Gift 3', price: 25 },
  ];

  return (
    <div className="gift-list">
      {gifts.map(gift => (
        <GiftCard key={gift.id} gift={gift} />
      ))}
    </div>
  );
};

export default GiftList;
