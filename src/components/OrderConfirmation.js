import React from 'react';

const OrderConfirmation = () => {
  // Dummy order data for example
  const order = {
    orderId: 123456,
    total: 75,
    deliveryDate: 'April 10, 2024',
  };

  return (
    <div className="order-confirmation">
      <h3>Order Confirmation</h3>
      <p>Order ID: {order.orderId}</p>
      <p>Total Amount: ${order.total}</p>
      <p>Expected Delivery Date: {order.deliveryDate}</p>
      <p>Thank you for shopping with us!</p>
    </div>
  );
};

export default OrderConfirmation;
