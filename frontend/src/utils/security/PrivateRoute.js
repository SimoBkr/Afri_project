import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { hasAccess } from "./index";
import { useAuth } from "../../contexts";

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const { tokenInfo, authenticated } = useAuth();
  const location = useLocation();
  return (
    <Route
      {...rest}
      render={(props) => {
        return hasAccess(tokenInfo, roles) ? (
          <Component {...props} />
        ) : authenticated ? (
          <Redirect to={{ pathname: "/denied", state: { from: location } }} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
};

export default PrivateRoute;
