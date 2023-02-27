import { gql, useQuery } from "@apollo/client";
import { MeQuery } from "../gql/types";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Restaurants } from "../screens/client/restaurants";
import { NotFound } from "../screens/404";

const ME_QUERY = gql`
  query me {
    me {
      id
      email
      role
      verified
    }
  }
`;

const ClientRoutes = [
  <Route path="/" exact>
    <Restaurants />
  </Route>,
];

export const LoggedInRouter = () => {
  const { data, loading, error } = useQuery<MeQuery>(ME_QUERY);
  if (!data || loading || error) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="font-medium text-xl tracking-wide">Loading...</span>
      </div>
    );
  }
  return (
    <Router>
      <Switch>
        {data.me.role === "Client" && ClientRoutes}
        <Redirect from="/ex" to="/" />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};
