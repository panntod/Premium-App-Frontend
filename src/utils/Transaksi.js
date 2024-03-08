import axios from "axios";
import { config, baseURL } from "../Config";
import { handleApiError } from "../helpers/Response";
import AuthHelper from "../helpers/AuthHelpers";

export const fetchAllTransaksi = async () => {
  try {
    const response = await axios.get(baseURL + "/transaksi/", config);
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const fetchAllTransaksiById = async (id) => {
  try {
    const response = await axios.get(baseURL + "/transaksi/find" + id, config);
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const addTransaksi = async (data) => {
  try {
    const response = await axios.post(baseURL + "/", { data }, config);
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const updateStatus = async (id) => {
  try {
    const userId = AuthHelper.GetUserId();
    const response = await axios.put(baseURL + "/" + id, { userId }, config);
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const deleteTransaksi = async (id) => {
    try {
      const response = await axios.delete(baseURL + "/transaksi/" + id, config);
      return response.data.data;
    } catch (error) {
      return handleApiError(error);
    }
  };
