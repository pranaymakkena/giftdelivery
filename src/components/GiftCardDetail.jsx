import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const GiftCardDetail = () => {
  const { id } = useParams();
  const [denomination, setDenomination] = useState(100);

  const handleChangeDenomination = (event) => {
    setDenomination(event.target.value);
  };

  return (
    <div className="gift-card-detail">
      <h2>Gift Card Details</h2>
      <p>Select a denomination:</p>
      <select value={denomination} onChange={handleChangeDenomination}>
        <option value={100}>₹100</option>
        <option value={500}>₹500</option>
        <option value={1000}>₹1000</option>
        <option value={2000}>₹2000</option>
      </select>
      <div>
        <h3>Price: ₹{denomination}</h3>
      </div>
      <Link to="/checkout" className="btn">
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default GiftCardDetail;
