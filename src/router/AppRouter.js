import React from 'react';
import {
  Routes, Route, BrowserRouter, Navigate,
} from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import Profile from '../pages/Profile';
import Signup from '../pages/Signup';

const userIsLogged = false;

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:userId" element={<Profile />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
