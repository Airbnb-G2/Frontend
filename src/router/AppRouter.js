import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Header from "../components/Header/Header";
import CreatePublication from "../pages/CreatePublication/CreatePublication";
import EditProfile from "../pages/EditProfile/EditProfile";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Publication from "../pages/Publication/Publication";

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:userId" element={<Profile />} />
      <Route path="/publication/:rentalId" element={<Publication />} />
      <Route path="/create-publication" element={<CreatePublication />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
