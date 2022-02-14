import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "./utils/Interceptor";
import "flag-icon-css/css/flag-icon.min.css";
import { ContextProvider } from "../src/contexts/ContextFilter";
import { ContextUserProvider } from "../src/contexts/ContextUser";
import { ContextLogisticsProvider } from "./contexts/ContextLogistics";
import { ContextContainerProvider } from "./contexts/ContextContainer";
import { ContextShipProvider } from './contexts/ContextShip'; 
import { ContextDistanceTimeProvider } from "./contexts/ContextDistanceTime";

ReactDOM.render(
  <ContextProvider>
    <ContextUserProvider>
      <ContextLogisticsProvider>
        <ContextContainerProvider>
          <ContextDistanceTimeProvider>
            <ContextShipProvider>
              <App />
            </ContextShipProvider>
          </ContextDistanceTimeProvider>
        </ContextContainerProvider>
      </ContextLogisticsProvider>
    </ContextUserProvider>
  </ContextProvider>
  , document.getElementById("root"));
