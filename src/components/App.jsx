import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import GiftCardList from './GiftCardList';
import GiftCardDetail from './GiftCardDetail';
import Checkout from './Checkout';
import Wishlist from './Wishlist';
import Cart from './Cart';

const App = () => {
  return (
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<GiftCardList />} />
        <Route path="/gift-card/:id" element={<GiftCardDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
