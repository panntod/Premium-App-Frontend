import { useState } from "react";
import { addUser } from "../utils/User";
import { initialRegisterState } from "../Config";
import { useNavigate } from "react-router-dom";

import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { CustomButton } from "../components";
import { handleApiResponse } from "@/utils/helpers/Response";

const Register = () => {
  const [formData, setFormData] = useState(initialRegisterState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setFormData((prevData) => ({
      ...prevData,
      showPassword: !prevData.showPassword,
    }));
  };

  const handleToggleConfirmPassword = () => {
    setFormData((prevData) => ({
      ...prevData,
      showConfirmPassword: !prevData.showConfirmPassword,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const dataUser = {
      nama: formData.nama,
      username: formData.username,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };

    const response = await addUser(dataUser);

    handleApiResponse(response, () => {
      setTimeout(() => {
        navigate(`/login`);
      }, 2000);
    });
    
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <main className="flex items-center justify-center h-screen bg-login">
      <div className="md:w-[1260px] md:h-[678px] bg-white rounded-3xl overflow-hidden flex">
        <img
          src="registerPhoto.svg"
          alt="login photo"
          className="hidden md:block w-3/4 object-cover"
        />

        <div className="w-full flex items-center justify-center md:w-1/2 p-8">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-primary mb-5">
              Register Page
            </h1>
            <p className="text-lg font-semibold mb-3">
              Start Your Journey With Us!
            </p>

            <label htmlFor="nama">Nama</label>
            <input
              className="rounded-lg w-full bg-gray-50 my-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none "
              type="text"
              name="nama"
              id="nama"
              placeholder="Name"
              value={formData.nama}
              onChange={handleInputChange}
              required
            />

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

            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="relative">
              <input
                className="p-2 rounded-lg w-full bg-gray-50 mt-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none"
                type={formData.showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />

              {formData.showConfirmPassword ? (
                <IoEyeOffSharp
                  className="absolute right-3 top-5 cursor-pointer text-gray-500"
                  onClick={handleToggleConfirmPassword}
                />
              ) : (
                <IoEye
                  className="absolute right-3 top-5 cursor-pointer text-gray-500"
                  onClick={handleToggleConfirmPassword}
                />
              )}
            </div>

            <CustomButton
              className={`w-full py-2 my-8 bg-primary hover:bg-secondary text-white md:text-base`}
              type="submit"
              loading={loading}
            >
              SIGN UP
            </CustomButton>

            <br />
            <p className="text-center">
              Do you have any account?{" "}
              <a href="/login" className="no-underline text-primary">
                Sign In Now
              </a>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
