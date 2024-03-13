import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectRoute from "./ProtectedRoute";
import {
  Login,
  Register,
  DashboardUser,
  NotFoundPage,
  ForbiddenPage,
  Aplikasi,
  User,
  Tier,
  Transaksi,
  Profile,
  History,
  Pesan,
} from "../pages/";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<DashboardUser />} />

        <Route
          path="/profile"
          element={
            <ProtectRoute>
              <Profile />
            </ProtectRoute>
          }
        />

        <Route
          path="/pesanan"
          element={
            <ProtectRoute>
              <History />
            </ProtectRoute>
          }
        />

        <Route
          path="/pesan"
          element={
            <ProtectRoute>
              <Pesan />
            </ProtectRoute>
          }
        />

        <Route
          path="/admin/aplikasi"
          element={
            <ProtectRoute>
              <Aplikasi />
            </ProtectRoute>
          }
        />

        <Route
          path="/admin/user"
          element={
            <ProtectRoute>
              <User />
            </ProtectRoute>
          }
        />

        <Route
          path="/admin/tier"
          element={
            <ProtectRoute>
              <Tier />
            </ProtectRoute>
          }
        />

        <Route
          path="/admin/transaksi"
          element={
            <ProtectRoute>
              <Transaksi />
            </ProtectRoute>
          }
        />

        <Route path="/forbidden" element={<ForbiddenPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;
