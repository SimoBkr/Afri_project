import React, { lazy, useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AUTHENTICATED_ROLE, SUPER_ADMIN_ROLE } from "../utils/security/roles";
import { routes } from "../pages/RoutingList";
import { AccessDenied, MainLayout, NotFound, Registered } from "../pages";
import Main from "../components/main-module/Main";
import LogisticsExplorerMain from "../components/logisticsExplorer/logisticsExplorerMain";
import SignIn from "../components/module-auth/signIn";
import SignUp from "../components/module-auth/signUp";
import UserInfo from "../components/user-module/UserInfo";
import ForgotPassword from "../components/module-auth/ForgotPassword";
import { ContextUser } from "../contexts/ContextUser";
import ResetPassword from "../components/module-auth/ResetPassword";
import ContainerTrackingMain from "../components/Container-Tracking/ContainerTrackingMain";
import DistanceTimeMain from "../components/DistanceTime-main/DistanceTimeMain";
import ShipSchedulesMain from "../components/ship-schedules/ShipSchedulesMain";

// Lazy loading
const PrivateRoute = lazy(() => import("../utils/security/PrivateRoute"));
const AppRoutes = () => {

  const context = useContext(ContextUser);
  
  return (
    <div>
      <div className="SwitchApp">
        <Switch>
          <PrivateRoute
            exact
            roles={[AUTHENTICATED_ROLE]}
            path={routes.map((route) => route.path)}
            component={MainLayout}
          />
          <PrivateRoute
            exact
            roles={[SUPER_ADMIN_ROLE]}
            path="/registered"
            component={Registered}
          />
          <PrivateRoute
            exact
            roles={[AUTHENTICATED_ROLE]}
            path="/denied"
            component={AccessDenied}
          />
          <Route exact path="/" component={Main} />
          <Route exact path="/sign-in" render={() =>
            (context.isLoggedIn() === false ? <SignIn /> : <Redirect to="user-info" />)}
          />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/user-info" render={() =>
            (context.isLoggedIn() ? 
              <UserInfo formUser={context.formUser} 
                        setformUser={context.setformUser} /> 
            : 
              <Redirect to="/sign-in" />)}
          />
          <Route exact path="/reset-password/:token" component={ResetPassword} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/logistics-explorer" component={LogisticsExplorerMain} />
          <Route exact path="/container-tracking" component={ContainerTrackingMain} />
          <Route exact path="/distance-and-time" component={DistanceTimeMain} />
          <Route exact path="/ship-schedules" component={ShipSchedulesMain} />
          <Route exact path="**" component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};
export default AppRoutes;