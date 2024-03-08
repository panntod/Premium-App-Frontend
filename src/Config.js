const myToken = localStorage.getItem("token");

export const baseURL = "http://localhost:8000";
export const imageURL = baseURL + "/gambar/";
export const config = {
  headers: { Authorization: `Bearer ${myToken}` },
};
export const initialRegister = {
  nama: "",
  username: "",
  password: "",
  confirmPassword: "",
  showPassword: false,
  showConfirmPassword: false,
};
export const initialLogin = {
  username: "",
  password: "",
  showPassword: false,
};
