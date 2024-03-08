import React from "react";
import CustomButton from "./CustomButton";

const NavbarMobile = ({ logged, handleLogin, handleLogout }) => {
  return (
    <div className="md:hidden fixed top-20 w-full bg-background p-4">
      <ul className="flex flex-col space-y-4">
        <li>
          <a href="" className="text-xl font-medium text-primary">
            Layanan
          </a>
        </li>
        <li>
          <a href="" className="text-xl font-medium text-primary">
            Pengguna
          </a>
        </li>
        <li>
          <a href="" className="text-xl font-medium text-primary">
            Cara Pesan
          </a>
        </li>
        {logged ? (
          <>
            <li>
              <a href="/profile" className="text-xl font-medium text-primary">
                Profile
              </a>
            </li>
            <li>
              <a onClick={handleLogout} className="text-xl font-medium text-red-500">Logout</a>
            </li>
          </>
        ) : (
          <CustomButton
            className="bg-gradient-to-tr from-primary to-secondary font-bold text-white w-[150px] h-[40px]"
            type="button"
            onClick={handleLogin}
          >
            Login
          </CustomButton>
        )}
      </ul>
    </div>
  );
};

export default NavbarMobile;
