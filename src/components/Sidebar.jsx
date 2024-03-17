import { IoReceipt, IoPersonCircle } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isProfileActive = location.pathname.includes("profile");
  const isPesananActive = location.pathname.includes("pesanan");

  const handleNavigate = (url) => {
    navigate(`/${url}`);
  };

  return (
    <div className="w-full md:w-[410px] h-[540px] bg-white shadow-xl rounded-xl flex flex-col justify-start py-12 px-10">
      <h1 className="text-primary-dark font-extrabold text-3xl mb-4">
        Profile Saya
      </h1>
      <div
        className={`flex items-center gap-4 mb-6 px-4 py-2 rounded-lg ${
          isProfileActive ? "bg-background text-secondary" : "text-gray-300"
        } hover:cursor-pointer hover:text-white hover:bg-primary transition-all duration-300`}
        onClick={() => handleNavigate("profile")}
      >
        <IoPersonCircle className="text-4xl" />
        <a className="text-xl font-semibold">Data Diri</a>
      </div>
      <div
        className={`flex items-center gap-4 mb-6 px-4 py-2 rounded-lg ${
          isPesananActive ? "bg-background text-secondary" : "text-gray-300"
        } hover:cursor-pointer hover:text-white hover:bg-primary transition-all duration-300`}
        onClick={() => handleNavigate("pesanan")}
      >
        <IoReceipt className="text-4xl" />
        <a className="text-xl font-semibold">Pesanan</a>
      </div>
    </div>
  );
};

export default Sidebar;
