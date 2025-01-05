import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GiftCardList from './GiftCardList';
import GiftCardDetail from './GiftCardDetail';
import Checkout from './Checkout';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={GiftCardList} />
        <Route path="/gift-card/:id" component={GiftCardDetail} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
};

export default App;
