import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Coupon from './Coupon';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <h1>Home Page</h1>} />
        <Route path="/coupon" component={Coupon} />
        <Route render={() => <NotFound />} />
      </Switch>
    </Router>
  );
}

export default App;
