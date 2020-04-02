import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function(props) {
  return (
    <Route
      path={props.path}
      exact={props.exact}
      render={routeProps => {
        if (props.user !== null) {
          return (
            <props.component
              params={routeProps}
              user={props.user}
              results={props.results}
              query={props.query}
            />
          );
        } else {
          return <Redirect to="/landing" />;
        }
      }}
    ></Route>
  );
}
