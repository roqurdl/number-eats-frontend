import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Login } from "../screens/login";

export const LoggedOutRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup"></Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};
