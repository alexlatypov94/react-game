import { createContext } from "react";

function noop() {}

export const AuthContext: any = createContext({
  token: null,
  userId: null,
  login: noop,
  logout: noop,
  isAuthenticated: false
});
