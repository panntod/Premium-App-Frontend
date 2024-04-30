import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
import LoadingSpinner from "../components/Loading";

const Login = React.lazy(() => import("../pages/Login"));
const Register = React.lazy(() => import("../pages/Register"));
const DashboardUser = React.lazy(() => import("../pages/Dashboard"));
const NotFoundPage = React.lazy(() => import("../pages/NotFoundPage"));
const ForbiddenPage = React.lazy(() => import("../pages/ForbiddenPage"));
const Aplikasi = React.lazy(() => import("../pages/Application"));
const User = React.lazy(() => import("../pages/User"));
const Transaksi = React.lazy(() => import("../pages/Transaction"));
const Profile = React.lazy(() => import("../pages/Profile"));
const History = React.lazy(() => import("../pages/History"));
const Order = React.lazy(() => import("../pages/Order"));
const ErrorPage = React.lazy(() => import("../pages/ErrorPage"));

const Router = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
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
              <Order />
            </ProtectRoute>
          }
        />

        <Route
          path="/admin/aplikasi"
          element={
            <AdminRoute>
              <Aplikasi />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/user"
          element={
            <AdminRoute>
              <User />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/transaksi"
          element={
            <AdminRoute>
              <Transaksi />
            </AdminRoute>
          }
        />

        <Route path="/error" element={<ErrorPage />} />
        <Route path="/forbidden" element={<ForbiddenPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
