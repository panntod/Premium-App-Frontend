import React from "react";
import { NavbarAdmin } from "../../components";

const AdminLayout = ({ children }) => {
  return (
    <>
      <NavbarAdmin />
      <main className="px-7 md:px-14 pt-14 min-h-screen bg-background pb-16 md:pb-24">
        {children}
      </main>
    </>
  );
};

export default AdminLayout;
