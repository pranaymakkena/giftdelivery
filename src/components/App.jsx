import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GiftCardList from './GiftCardList';
import GiftCardDetail from './GiftCardDetail';
import Checkout from './Checkout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GiftCardList />} />
        <Route path="/gift-card/:id" element={<GiftCardDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
