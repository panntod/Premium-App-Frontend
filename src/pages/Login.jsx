import { useState } from "react";
import AuthHelper from "../helpers/AuthHelpers";
import loginPhoto from "../assets/loginPhoto.svg";

import { login } from "../utils/User";
import { CustomButton } from "../components";
import { useNavigate } from "react-router-dom";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import { initialLoginState } from "../Config";

const Login = () => {
  const [formData, setFormData] = useState(initialLoginState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setFormData((prevData) => ({
      ...prevData,
      showPassword: !prevData.showPassword,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const toastID = toast.loading("Loading...");

    try {
      const { success, data, message } = await login(
        formData.username,
        formData.password,
      );

      toast.update(toastID, {
        type: success ? "success" : "error",
        isLoading: false,
        autoClose: 2000,
        render: success ? message : data.message,
      });

      if (success) {
        AuthHelper.SetAuth(data);
        setTimeout(() => {
          if (data.role == "admin") {
            navigate(`/admin/aplikasi`);
          } else {
            navigate(`/`);
          }
        }, 2000);
      }
    } catch (error) {
      toast.update(toastID, {
        type: "error",
        isLoading: false,
        autoClose: 3000,
        render: "Terjadi kesalahan pada server. Silakan coba lagi.",
      });
      AuthHelper.ClearAuth();
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <main className="flex items-center justify-center h-screen bg-login">
      <ToastContainer />
      <div className="md:w-[1260px] md:h-[678px] bg-white rounded-3xl overflow-hidden flex">
        <img
          src={loginPhoto}
          alt="login photo"
          className="hidden md:block w-3/4 object-cover"
        />

        <div className="w-full flex items-center justify-center md:w-1/2 p-8">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-primary mb-5">Login Page</h1>
            <p className="text-lg font-semibold mb-3">Nice to see you again!</p>

            <label htmlFor="username">Username</label>
            <input
              className="rounded-lg w-full bg-gray-50 my-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none "
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="password">Password</label>
            <div className="relative">
              <input
                className="p-2 rounded-lg w-full bg-gray-50 mt-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none"
                type={formData.showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />

              {formData.showPassword ? (
                <IoEyeOffSharp
                  className="absolute right-3 top-5 cursor-pointer text-gray-500"
                  onClick={handleTogglePassword}
                />
              ) : (
                <IoEye
                  className="absolute right-3 top-5 cursor-pointer text-gray-500"
                  onClick={handleTogglePassword}
                />
              )}
            </div>

            <CustomButton
              className={`w-full py-2 my-8 bg-primary hover:bg-secondary focus:ring-2 text-white font-semibold rounded-lg`}
              type="submit"
              loading={loading}
            >
              SIGN IN
            </CustomButton>

            <br />
            <p className="text-center">
              Don't have any account?{" "}
              <a href="/register" className="no-underline text-primary">
                Sign Up Now
              </a>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
