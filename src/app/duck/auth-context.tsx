import React from "react";

type AuthContextType = {
  auth: { isLogged: boolean };
  setAuth: (auth: { isLogged: boolean }) => void;
};

const initialState: AuthContextType = {
  auth: { isLogged: false },
  setAuth: () => {},
};

const AuthProvider = React.createContext(initialState);

export default AuthProvider;
