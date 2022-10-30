/* eslint-disable object-curly-newline */
import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import Profile from '../pages/Profile';
import Signup from '../pages/Signup';

const userIsLogged = false;

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {userIsLogged ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/*" element={<Navigate to="login" />} />
        </>
      )}
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
