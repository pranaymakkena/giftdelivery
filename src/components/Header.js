import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>Anonymous Gift Delivery</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gifts">Gifts</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
