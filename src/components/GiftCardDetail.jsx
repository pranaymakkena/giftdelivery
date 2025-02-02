import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { giftCards } from './GiftCardList';

const GiftCardDetail = () => {
  const { id } = useParams();
  const giftCard = giftCards.find((card) => card.id === parseInt(id));

  const [denomination, setDenomination] = useState(100);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  if (!giftCard) {
    return <h2 className="error-message">Gift Card Not Found!</h2>;
  }

  const handleChangeDenomination = (event) => {
    setDenomination(event.target.value);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsEmailValid(emailRegex.test(emailValue));
  };

  const isButtonDisabled = email === '' || !isEmailValid;

  return (
    <div className="gift-card-detail">
      <img src={giftCard.imgSrc} alt={giftCard.name} className="gift-card-image" />

      <div className="title-container">
        <h2>{giftCard.name} Gift Card</h2>
        {giftCard.discount > 0 && <span className="discount-tag">{giftCard.discount}% OFF</span>}
      </div>

      <p className="description">{giftCard.description}</p>

      <div className="select-container">
        <label>Select a denomination:</label>
        <select value={denomination} onChange={handleChangeDenomination}>
          <option value={100}>₹100</option>
          <option value={500}>₹500</option>
          <option value={1000}>₹1000</option>
          <option value={2000}>₹2000</option>
        </select>
      </div>

      <h3>Price: ₹{denomination}</h3>

      <div className="email-field">
        <label htmlFor="email" className="email-label">Enter Your Email:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={handleEmailChange} 
          placeholder="example@email.com" 
          required 
        />
        {!isEmailValid && email && <p className="error">Invalid email address.</p>}
      </div>

      <Link 
        to="/checkout" 
        className="btn" 
        style={{ pointerEvents: isButtonDisabled ? 'none' : 'auto', opacity: isButtonDisabled ? 0.5 : 1 }}
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default GiftCardDetail;
