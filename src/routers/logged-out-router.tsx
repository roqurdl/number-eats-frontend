import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SignUp } from "../screens/create-account";
import { Login } from "../screens/login";

export const LoggedOutRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};
