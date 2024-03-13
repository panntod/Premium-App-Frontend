import React from "react";
import { NavbarAdmin } from "../../components";

const AdminLayout = ({ children }) => {
  return (
    <>
      <NavbarAdmin />
      <main className="px-12 md:px-20 pt-6 min-h-screen bg-background pb-16 md:pb-24">
        {children}
      </main>
    </>
  );
};

export default AdminLayout;
