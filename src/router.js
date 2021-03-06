import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ProductPage from './routes/ProductPage';
import UserPage from './routes/user';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/product" exact component={ProductPage} />
        <Route path="/user" exact component={UserPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
