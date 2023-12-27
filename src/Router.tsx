import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Login-Page/index";
import HomePage from "./Pages/Home-Page/HomePage";
import AdminPage from "./Pages/Admin-Page/AdminPage";
import SearchPage from "./Pages/Search-Page/SearchPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
};

export default Router;
