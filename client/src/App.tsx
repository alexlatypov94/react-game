import "./App.scss";

import React, { ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./Routes";
import { useAuth } from "./hooks/";
import { AuthContext } from "./context";

const App = (): ReactElement => {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated: any = !!token;
  const routes: any = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated
      }}
    >
      <Router>{routes}</Router>
    </AuthContext.Provider>
  );
};

export default App;
