import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import AuthHelper from "../../helpers/AuthHelpers";
import { CustomButton, CustomDropdown, NavbarMobile } from "../";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logged, setLogged] = useState(false);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getLogin();
  }, []);

  const getLogin = async () => {
    const status = await AuthHelper.GetAuth("logged");
    setLogged(status);

    const role = AuthHelper.GetAuth("roleUser");
    setRole(role);
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

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className="w-full fixed top-0 h-24 flex justify-between items-center px-4 md:px-8 lg:px-16 bg-transparent backdrop-blur-xl z-50">
        <h1 className="text-primary font-extrabold text-3xl">Lorem</h1>
        <div className="hidden md:flex space-x-12 items-center">
          <ul className="flex space-x-12 items-center">
            <li className="my-6">
              <a
                className="text-xl hover:text-primary-dark cursor-pointer font-semibold duration-500 text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("layanan");
                }}
              >
                Layanan
              </a>
            </li>
            <li className="my-6">
              <a
                className="text-xl hover:text-primary-dark cursor-pointer font-semibold duration-500 text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("pengguna");
                }}
              >
                Pengguna
              </a>
            </li>
            <li className="my-6">
              <a
                className="text-xl hover:text-primary-dark cursor-pointer font-semibold duration-500 text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection("caraPesan");
                }}
              >
                Cara Pesan
              </a>
            </li>

            {role === "admin" ? (
              <li className="my-6">
                <a
                  className="text-xl hover:text-primary-dark cursor-pointer font-semibold duration-500 text-primary"
                  href="/admin/aplikasi"
                >
                  Admin Panel
                </a>
              </li>
            ) : (
              ""
            )}
          </ul>

          {logged ? (
            <CustomDropdown handleLogout={handleLogout} />
          ) : (
            <CustomButton
              className="bg-gradient-to-tr from-primary to-secondary font-bold text-white w-[150px]"
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
    </>
  );
};

export default Navbar;
