import { lazy } from "react";

// Lazy loading
const Login = lazy(() => import("./login"));
const AccessDenied = lazy(() => import("./access_denied"));
const NotFound = lazy(() => import("./not_found"));

const MainLayout = lazy(() => import("./layout/MainLayout"));
const Registered = lazy(() => import("./Registered"));

export {
  AccessDenied,
  Login,
  NotFound,
  Registered,
  MainLayout,
};
