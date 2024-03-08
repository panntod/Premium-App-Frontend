import React, { useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";

const Dropdown = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <IoPersonCircleSharp className="text-5xl text-primary cursor-pointer" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2">
          <div className="bg-white border border-gray-300 rounded shadow">
            <a
              href="/profile"
              className="block px-10 py-4 text-primary font-semibold hover:bg-gray-100"
            >
              Profil
            </a>
            <button
              onClick={handleLogout}
              className="block px-10 py-4 text-red-500 font-semibold hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
