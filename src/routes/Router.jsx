import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register, DashboardUser, NotFoundPage, ForbiddenPage } from "../pages/";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        <Route path="/" element={<DashboardUser />} />
        <Route path="/forbidden" element={<ForbiddenPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default Router;
