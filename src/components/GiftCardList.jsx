import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const giftCards = [
  { id: 1, name: 'Amazon', category: 'Shopping', imgSrc: '/images/amazon.png', description: 'Shop anything on Amazon.' },
  { id: 2, name: 'Flipkart', category: 'Shopping', imgSrc: '/images/flipkart.png', description: 'Get the best deals on Flipkart.' },
  { id: 3, name: 'Pizza Hut', category: 'Food', imgSrc: '/images/pizzahut.png', description: 'Enjoy delicious pizzas from Pizza Hut.' },
  { id: 4, name: 'Domino\'s', category: 'Food', imgSrc: '/images/dominos.png', description: 'Order hot and fresh pizzas from Domino\'s.' },
  { id: 5, name: 'Myntra', category: 'Fashion', imgSrc: '/images/myntra.webp', description: 'Trendy fashion at Myntra.' },
  { id: 6, name: 'Archies', category: 'Gifts', imgSrc: '/images/archies.webp', description: 'Buy greeting cards and gifts.' },
  { id: 7, name: 'PVR', category: 'Entertainment', imgSrc: '/images/pvr.webp', description: 'Watch movies at PVR cinemas.' },
  { id: 8, name: 'BookMyShow', category: 'Entertainment', imgSrc: '/images/bookmyshow.png', description: 'Book movie and event tickets easily.' },
  { id: 9, name: 'Zee5', category: 'Entertainment', imgSrc: '/images/zee5.webp', description: 'Stream movies and TV shows on Zee5.' },
  { id: 10, name: 'Zomato', category: 'Food', imgSrc: '/images/zomato.png', description: 'Order food from top restaurants.' },
  { id: 11, name: 'Swiggy', category: 'Food', imgSrc: '/images/swiggy.webp', description: 'Fast food delivery with Swiggy.' },
  { id: 12, name: 'MakeMyTrip', category: 'Travel', imgSrc: '/images/makemytrip.webp', description: 'Plan your trips with MakeMyTrip.' },
  { id: 13, name: 'MamaEarth', category: 'Beauty', imgSrc: '/images/mamaearth.webp', description: 'Organic beauty products from MamaEarth.' },
  { id: 14, name: 'BigBasket', category: 'Groceries', imgSrc: '/images/bigbasket.PNG', description: 'Get groceries delivered from BigBasket.' },
  { id: 15, name: 'Blinkit', category: 'Groceries', imgSrc: '/images/blinkit.WEBP', description: 'Instant delivery from Blinkit.' },
];

const GiftCardList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('A-Z');
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const categories = ['All', ...new Set(giftCards.map(card => card.category))];

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleWishlistToggle = (id) => {
    const updatedWishlist = wishlist.includes(id) 
      ? wishlist.filter(item => item !== id) 
      : [...wishlist, id];
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const handleAddToCart = (id) => {
    const updatedCart = cart.includes(id) ? cart : [...cart, id];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const filteredGiftCards = giftCards
    .filter(card => card.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(card => selectedCategory === 'All' || card.category === selectedCategory)
    .sort((a, b) => sortOrder === 'A-Z' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

  return (
    <div className="gift-card-container">
      <div className="filter-options">
        <input
          type="text"
          placeholder="Search Gift Cards..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="A-Z">Sort A-Z</option>
          <option value="Z-A">Sort Z-A</option>
        </select>
      </div>

      <div className="gift-card-list">
        {filteredGiftCards.map((card) => (
          <div key={card.id} className="gift-card-item">
            <img src={card.imgSrc} alt={card.name} loading="lazy" />
            <h3>{card.name}</h3>
            <p className="description">{card.description}</p>
            <Link to={`/gift-card/${card.id}`} className="details-btn">View Details</Link>
            <button 
              className={`cart-btn ${cart.includes(card.id) ? 'added' : ''}`} 
              onClick={() => handleAddToCart(card.id)}
            >
              {cart.includes(card.id) ? '✅ Added to Cart' : '🛒 Add to Cart'}
            </button>
            <button 
              className={`wishlist-btn ${wishlist.includes(card.id) ? 'active' : ''}`} 
              onClick={() => handleWishlistToggle(card.id)}
            >
              {wishlist.includes(card.id) ? '❤️ Remove from Wishlist' : '🤍 Add to Wishlist'}
            </button>
          </div>
        ))}
      </div>

      <div className="cart-info">
        <h3>Cart: {cart.length} items</h3>
        <Link to="/cart" className="view-cart-btn">Go to Cart</Link>
      </div>
    </div>
  );
};

export default GiftCardList;