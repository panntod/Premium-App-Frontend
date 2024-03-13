import React from "react";
import { Navbar, Footer } from "../../components";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="px-7 md:px-14 pt-14 min-h-screen bg-background pb-16 md:pb-24 overflow-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
