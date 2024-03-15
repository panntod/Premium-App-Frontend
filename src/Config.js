import AuthHelpers from "./helpers/AuthHelpers";

export const config = () => {
  const myToken = AuthHelpers.GetAuth("tokenUser");
  return {
    headers: { Authorization: `Bearer ${myToken}` },
  };
};

export const baseURL = "http://localhost:8000";
export const imageURL = baseURL + "/images/";
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
  id: "",
  nama: "",
  tierID: "",
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
export const initialNewTierState = {
  nama: "",
  harga: "",
};
