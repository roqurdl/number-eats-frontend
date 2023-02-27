import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CreateAccount } from "../screens/create-account";
import { NotFound } from "../screens/404";
import { Login } from "../screens/login";

export const LoggedOutRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <CreateAccount />
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};
