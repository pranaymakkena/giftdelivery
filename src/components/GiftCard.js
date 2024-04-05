import React from 'react';

const GiftCard = ({ gift }) => {
  return (
    <div className="gift-card">
      <h3>{gift.name}</h3>
      <p>Price: ${gift.price}</p>
      {/* Add button to view gift details or add to cart */}
    </div>
  );
};

export default GiftCard;
