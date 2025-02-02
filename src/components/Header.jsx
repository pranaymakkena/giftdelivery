import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const storedCartCount = localStorage.getItem('cartCount') || 0;
    const storedWishlistCount = localStorage.getItem('wishlistCount') || 0;
    setCartCount(Number(storedCartCount));
    setWishlistCount(Number(storedWishlistCount));
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`header ${darkMode ? 'dark' : ''}`}>
      <Link to="/" className="logo">Gift Card Delivery</Link>

      <div className="icon-container">
        <Link to="/wishlist" className="icon">
          <FaHeart className="icon-heart" />
          {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
        </Link>

        <Link to="/cart" className="icon">
          <FaShoppingCart className="icon-cart" />
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </Link>

        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? <FaSun className="sun-icon" /> : <FaMoon className="moon-icon" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
