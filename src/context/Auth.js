import React, { createContext, useMemo, useState } from 'react';
import { dbPost } from '../utils/db';

export const AuthContext = createContext(null);

const initialSessionState = {
  isLoggedIn: false,
  isLoginPending: false,
  loginError: null,
};

const initialUserState = {
  id: null,
  firstname: '',
  lastname: '',
  mail: '',
  role: null,
};

export const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState(initialSessionState);
  const [userInfo, setUserInfo] = useState(initialUserState);

  const setLoginSuccess = (isLoggedIn) => setAuthState({ ...authState, isLoggedIn });
  const setLoginPending = (isLoginPending) => setAuthState({ ...authState, isLoginPending });
  const setLoginError = (loginError) => setAuthState({ ...authState, loginError });

  const login = (mail, password) => {
    setLoginPending(true);
    dbPost('auth/login', { mail, password })
      .then((res) => {
        setLoginPending(false);
        console.log(res);
        setLoginSuccess(true);
        setUserInfo(res[0]?.user);
      })
      .catch((err) => {
        console.log(err);
        setLoginPending(false);
        setLoginSuccess(false);
        setLoginError(err);
      });
  };

  const logout = () => {
    setLoginSuccess(false);
  };

  const value = useMemo(() => ({
    authState,
    userInfo,
    login,
    logout,
  }));

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
