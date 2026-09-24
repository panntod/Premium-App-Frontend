import AuthHelpers from "./utils/helpers/AuthHelpers";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:8000";
const viteURL = import.meta.env.VITE_BASE_URL || "http://localhost:5173";
const baseImageURL = import.meta.env.VITE_BASE_IMAGE || "";

export const config = () => {
  const myToken = AuthHelpers.GetAuth("tokenUser");

  return {
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  };
};

export { baseURL, viteURL, baseImageURL };

export const assetUrl = (path) => `${baseImageURL}${path}`;

export const imageURL = `${baseURL}/images/`;

export const initialRegisterState = {
  nama: "",
  username: "",
  password: "",
  confirmPassword: "",
  showPassword: false,
  showConfirmPassword: false,
};

export const initialLoginState = {
  username: "",
  password: "",
  showPassword: false,
};

export const initialNewAplikasiState = {
  nama: "",
  harga: 0,
  deskripsi: "",
  image: null,
};

export const initialNewUserState = {
  username: "",
  nama: "",
  role: "",
  password: "",
  confirmPassword: "",
};