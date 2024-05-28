import axios from "axios";
import AuthHelpers from "./helpers/AuthHelpers";

import { config, baseURL } from "../Config";
import { handleApiError } from "./helpers/Response";

export const fetchAllTopUp = async () => {
  try {
    const response = await axios.get(baseURL + `/user/topup/`, config());
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const topUp = async (saldo) => {
  try {
    const username = AuthHelpers.GetAuth("namaUser");

    const response = await axios.post(
      baseURL + `/user/topup/${username}`,
      { saldo },
      config()
    );
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const topUpAdmin = async (saldo, id) => {
  try {
    const response = await axios.post(
      baseURL + `/user/topup/a/${id}`,
      { saldo },
      config()
    );
    return response.data;
  } catch (error) {
    console.log(error)
    // return handleApiError(error);
  }
};

export const accTopup = async (id) => {
  try {
    const response = await axios.put(baseURL + "/user/topup/" + id, null, config());
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const deleteTopup = async (id) => {
  try {
    const response = await axios.delete(baseURL + "/user/topup/" + id, config());
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
