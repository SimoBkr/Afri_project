import React from "react";
import { Route } from "react-router-dom";
import Main from "../components/main-module/Main";

export const routes = [
  {
    path: "/homegmfl",
    component: Main,
    key: "/",
  },
];

function RoutingList() {
  return routes.map((item) => {
    if (item.path.split("/").length === 2) {
      return (
        <Route
          exact
          path={item.path}
          component={item.component}
          key={item.key}
        />
      );
    }
    return <Route path={item.path} component={item.component} key={item.key} />;
  });
}

export default RoutingList;
