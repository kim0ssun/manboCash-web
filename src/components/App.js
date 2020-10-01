import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Coupon from './Coupon';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <h1>Home got them Page</h1>} />
        <Route path="/coupon">
          <Coupon />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
