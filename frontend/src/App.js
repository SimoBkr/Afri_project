import React from "react";
import { Router } from "react-router-dom";
import history from "./utils/history";
import Loading from "./components/Loading";
import AuthProvider from "./contexts/auth";
import AppRoutes from "./routes";

const App = () => {
  
  return (
    <React.Suspense fallback={<Loading />}>
      <Router history={history}>
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
      </Router>
    </React.Suspense>
  );
};

export default App;
