import React from 'react';
import {
  Routes, Route, BrowserRouter, Navigate,
} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile';
import Publication from '../pages/Publication';

const userIsLogged = false;

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:userId" element={<Profile />} />
      <Route path="/publication/:publicationId" element={<Publication />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
