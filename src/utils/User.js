import axios from "axios";
import { config, baseURL } from "../Config";
import { handleApiError } from "../helpers/Response";
import AuthHelpers from "../helpers/AuthHelpers";

export const login = async (username, password) => {
  try {
    const response = await axios.post(baseURL + "/login", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const getMe = async () => {
  try {
    const username = AuthHelpers.GetAuth("namaUser");

    const response = await axios.post(
      baseURL + "/user/me",
      { username },
      config
    );

    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const fetchAllUsers = async () => {
  try {
    const response = await axios.get(baseURL + "/user/", config);
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const findUser = async (keyword) => {
  try {
    const response = await axios.post(
      baseURL + "/user/find",
      { keyword },
      config
    );
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const addUser = async (data) => {
  try {
    const response = await axios.post(baseURL + "/user/", data, config);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const updateUser = async (id, data) => {
  try {
    const response = await axios.put(baseURL + `/user/${id}`, data, config);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const topUp = async (saldo) => {
  try {
    const username = AuthHelpers.GetAuth("namaUser");

    const response = await axios.post(
      baseURL + `/user/topUp/${username}`,
      { saldo },
      config
    );
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(baseURL + "/user/" + userId, config);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
