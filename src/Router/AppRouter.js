import React from 'react';
import {
  Routes, Route, BrowserRouter, Navigate,
} from 'react-router-dom';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import PageNotFound from '../Pages/PageNotFound';
import Signup from '../Pages/Signup';

const userIsLogged = false;

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {userIsLogged
        ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </>
        )
        : (
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
