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
  Transaksi,
  Profile,
  History,
  Pesan,
  ErrorPage,
} from "../pages/";
import AdminRoute from "./AdminRoute";

const Router = () => {
  return (
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
  );
};

export default Router;
