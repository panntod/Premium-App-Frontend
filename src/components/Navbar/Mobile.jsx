import { Link } from "react-router-dom";
import CustomButton from "../Button";

const NavbarMobile = ({ logged, handleLogin, handleLogout }) => {
  return (
    <div className="md:hidden fixed top-20 w-full bg-transparent backdrop-blur-lg p-4 z-50">
      <ul className="flex flex-col space-y-4">
        <li>
          <Link to="#" className="text-xl font-medium text-primary">
            Layanan
          </Link>
        </li>
        <li>
          <Link to="#" className="text-xl font-medium text-primary">
            Pengguna
          </Link>
        </li>
        <li>
          <Link to="#" className="text-xl font-medium text-primary">
            Benefit
          </Link>
        </li>
        <li>
          <Link to="#" className="text-xl font-medium text-primary">
            Cara Pesan
          </Link>
        </li>
        {logged ? (
          <>
            <li>
              <Link to="#/profile" className="text-xl font-medium text-primary">
                Profile
              </Link>
            </li>
            <li>
              <Link to="#/pesanan" className="text-xl font-medium text-primary">
                Transaksi
              </Link>
            </li>
            <li>
              <Link
                onClick={handleLogout}
                className="text-xl font-medium text-red-500"
              >
                Logout
              </Link>
            </li>
          </>
        ) : (
          <CustomButton
            className="bg-gradient-to-tr from-primary to-secondary text-white w-[150px] h-[40px]"
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
