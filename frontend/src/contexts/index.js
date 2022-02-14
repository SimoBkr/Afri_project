import React from "react";
import { AuthContext } from "./auth";

export const useAuth = () => React.useContext(AuthContext);
