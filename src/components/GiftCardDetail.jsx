import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const GiftCardDetail = () => {
  const { id } = useParams();
  const [denomination, setDenomination] = useState(100);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleChangeDenomination = (event) => {
    setDenomination(event.target.value);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // Simple email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsEmailValid(emailRegex.test(emailValue));
  };

  // Disable button if email is invalid or empty
  const isButtonDisabled = email === '' || !isEmailValid;

  return (
    <div className="gift-card-detail">
      <h2>Gift Card Details</h2>

      {/* Denomination Dropdown with Arrow */}
      <p>Select a denomination:</p>
      <div className="select-container">
        <select value={denomination} onChange={handleChangeDenomination}>
          <option value={100}>₹100</option>
          <option value={500}>₹500</option>
          <option value={1000}>₹1000</option>
          <option value={2000}>₹2000</option>
        </select>
      </div>

      {/* Price Display */}
      <div>
        <h3>Price: ₹{denomination}</h3>
      </div>

      {/* Email Input Field */}
      <div className="email-field">
        <label htmlFor="email">Enter Your Email:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={handleEmailChange} 
          placeholder="example@email.com" 
          required 
        />
        {!isEmailValid && email && <p className="error">Please enter a valid email address.</p>}
      </div>

      {/* Checkout Button */}
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