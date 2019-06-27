import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Orders from './pages/Orders';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/orders" component={Orders} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
