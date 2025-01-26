import React, { useState } from "react";

const Checkout = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const formatName = (value) => {
    return value
      .replace(/\s+/g, " ") // Remove extra spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
  };

  const formatCardNumber = (value) => {
    return value.replace(/\D/g, "").slice(0, 16); // Allow only digits, max 16 characters
  };

  const formatExpiryDate = (value) => {
    let cleaned = value.replace(/\D/g, "").slice(0, 4); // Only numbers, max 4 characters
    if (cleaned.length > 2) {
      cleaned = `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    }
    return cleaned;
  };

  const formatCVV = (value) => {
    return value.replace(/\D/g, "").slice(0, 4); // Only digits, max 4 characters
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "name") formattedValue = formatName(value);
    if (name === "cardNumber") formattedValue = formatCardNumber(value);
    if (name === "expiryDate") formattedValue = formatExpiryDate(value);
    if (name === "cvv") formattedValue = formatCVV(value);

    setPaymentInfo({ ...paymentInfo, [name]: formattedValue });
  };

  const validateCardNumber = (cardNumber) => {
    return /^(?:\d{15}|\d{16})$/.test(cardNumber); // 15 or 16 digits only
  };

  const validateExpiryDate = (expiryDate) => {
    return /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate); // MM/YY format
  };

  const validateCVV = (cvv) => {
    return /^\d{3,4}$/.test(cvv); // 3 or 4 digits
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateCardNumber(paymentInfo.cardNumber)) {
      alert("Invalid Card Number. Must be 15 or 16 digits.");
      return;
    }
    if (!validateExpiryDate(paymentInfo.expiryDate)) {
      alert("Invalid Expiry Date. Must be MM/YY.");
      return;
    }
    if (!validateCVV(paymentInfo.cvv)) {
      alert("Invalid CVV. Must be 3 or 4 digits.");
      return;
    }

    alert("Payment Successful");
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
            maxLength="16"
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
            maxLength="5"
            placeholder="MM/YY"
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
            maxLength="4"
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