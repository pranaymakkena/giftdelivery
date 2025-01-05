import React, { useState } from 'react';

const Checkout = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment Successful');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name on Card
          <input
            type="text"
            name="name"
            value={paymentInfo.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Card Number
          <input
            type="text"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Expiry Date
          <input
            type="text"
            name="expiryDate"
            value={paymentInfo.expiryDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          CVV
          <input
            type="text"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="btn">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Checkout;
