import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "./Pages/Login-Page/index";
import HomePage from "./Pages/Home-Page/HomePage";
import AdminPage from "./Pages/Admin-Page/AdminPage";
import SearchPage from "./Pages/Search-Page/SearchPage";
import HotelPage from "./Pages/Hotel-Page/HotelPage";
import CheckoutPage from "./Pages/Checkout-Page/CheckoutPage";
import ConfirmationPage from "./Pages/Confirmation-Page/ConfirmationPage";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/search"
        element={
          <Layout>
            <SearchPage />
          </Layout>
        }
      />
      <Route
        path="/hotel/:id"
        element={
          <Layout>
            <HotelPage />
          </Layout>
        }
      />
      <Route
        path="/checkout"
        element={
          <Layout>
            <CheckoutPage />
          </Layout>
        }
      />
      <Route
        path="/confirmation"
        element={
          <Layout>
            <ConfirmationPage />
          </Layout>
        }
      />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};

export default Router;
