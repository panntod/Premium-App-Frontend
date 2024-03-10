import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import AuthHelper from "../helpers/AuthHelpers";
import { CustomButton, CustomDropdown, NavbarMobile } from "./";

const Navbar = ({ children }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getLogin();
  }, []);

  const getLogin = async () => {
    const status = await AuthHelper.GetLogged();
    setLogged(status);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    AuthHelper.ClearAuth();
    navigate("/login");
  };

  return (
    <main className="bg-background">
      <header className="w-full fixed top-0 h-24 flex justify-between items-center px-4 md:px-8 lg:px-16 bg-inherit z-50">
        <h1 className="text-primary font-extrabold text-3xl">Lorem</h1>
        <div className="hidden md:flex space-x-12 items-center">
          <ul className="flex space-x-12 items-center">
            <li className="my-6">
              <a
                href=""
                className="text-xl hover:text-secondary font-semibold duration-500 text-primary"
              >
                Layanan
              </a>
            </li>
            <li className="my-6">
              <a
                href=""
                className="text-xl hover:text-secondary font-semibold duration-500 text-primary"
              >
                Pengguna
              </a>
            </li>
            <li className="my-6">
              <a
                href=""
                className="text-xl hover:text-secondary font-semibold duration-500 text-primary"
              >
                Cara Pesan
              </a>
            </li>
          </ul>

          {logged ? (
            <CustomDropdown handleLogout={handleLogout} />
          ) : (
            <CustomButton
              className="bg-gradient-to-tr from-primary to-secondary font-bold text-white w-[150px] h-[40px]"
              type="button"
              onClick={handleLogin}
            >
              Login
            </CustomButton>
          )}
        </div>

        {/* Menu Button */}
        <div className="md:hidden">
          <IoMenu
            className="text-3xl cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>
      </header>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <NavbarMobile
          logged={logged}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
        />
      )}
      <section className="px-7 md:px-14 pt-14">{children}</section>
    </main>
  );
};

export default Navbar;
