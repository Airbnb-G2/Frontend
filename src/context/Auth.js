import React, { createContext, useEffect, useMemo, useState } from "react";
import { dbPost } from "../utils/db";

export const AuthContext = createContext(null);

const initialSessionState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLogged")) || false,
  isLoginPending: false,
  loginError: null,
};

const initialUserState = {
  id: null,
  firstname: "",
  lastname: "",
  mail: "",
  role: null,
};

export const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState(initialSessionState);
  const [userInfo, setUserInfo] = useState(initialUserState);

  useEffect(() => {
    if (authState.isLoggedIn) {
      const user = JSON.parse(localStorage.getItem("user"));
      setUserInfo(user);
    }
    setAuthState((prevState) => ({
      ...prevState,
      isLoggedIn: authState.isLoggedIn,
    }));
  }, []);

  const setLoginSuccess = (isLoggedIn) => setAuthState({ ...authState, isLoggedIn });
  const setLoginPending = (isLoginPending) => setAuthState({ ...authState, isLoginPending });
  const setLoginError = (loginError) => setAuthState({ ...authState, loginError });

  const login = (mail, password) => {
    setLoginPending(true);
    dbPost("auth/login", { mail, password })
      .then((res) => {
        setLoginPending(false);
        setLoginSuccess(true);
        const user = res[0]?.user;
        setUserInfo(user);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLogged", true);
        console.log("¿asdasdasd");
      })
      .catch((err) => {
        console.error(err);
        setLoginPending(false);
        setLoginSuccess(false);
        setLoginError(err);
        localStorage.removeItem("user");
        localStorage.setItem("isLogged", false);
      });
  };

  const logout = () => {
    setLoginSuccess(false);
    setUserInfo(initialUserState);
    localStorage.removeItem("user");
    localStorage.setItem("isLogged", false);
  };

  const value = useMemo(() => ({
    authState,
    userInfo,
    login,
    logout,
  }));

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
