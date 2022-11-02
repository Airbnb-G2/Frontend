import React, { createContext, useMemo, useState } from 'react';
import { dbPost } from '../utils/db';

export const AuthContext = createContext(null);

const initialState = {
  isLoggedIn: false,
};

export const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState(initialState);

  const setLoginSuccess = (isLoggedIn) => setAuthState({ isLoggedIn });

  const login = (mail, password) => {
    dbPost('auth/login', { mail, password })
      .then((res) => {
        console.log(res);
        setLoginSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setLoginSuccess(false);
      });
  };

  const logout = () => {
    setLoginSuccess(false);
  };

  const value = useMemo(() => ({
    authState,
    login,
    logout,
  }));

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
