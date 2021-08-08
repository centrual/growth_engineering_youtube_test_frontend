import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App(): ReactNode {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  );
}
