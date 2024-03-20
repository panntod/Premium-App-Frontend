import { useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";

const Dropdown = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
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
          <div className="bg-white w-48 h-44 flex-shrink-0 rounded-xl rounded-tr-none  shadow divide-y divide-gray-300">
            <a
              href="/profile"
              className="block px-4 py-2 text-primary font-semibold h-1/3 hover:bg-gray-100"
            >
              Profil
            </a>
            <a
              href="/pesanan"
              className="block px-4 py-2 text-primary font-semibold h-1/3 hover:bg-gray-100"
            >
              Transaksi
            </a>
            <a
              onClick={handleLogout}
              className="block px-4 py-2 text-red-500 cursor-pointer font-semibold h-1/3 hover:bg-gray-100 w-full"
            >
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
