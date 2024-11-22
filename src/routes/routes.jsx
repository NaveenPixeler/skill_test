import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/auth/SignIn";
import Dashboard from "../pages/dashboard/Dashboard";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default AppRoutes;
