import axios from "axios";
import { config, baseURL } from "../Config";
import { handleApiError } from "../helpers/Response";

export const fetchAllTransaksi = async () => {
  try {
    const response = await axios.get(baseURL + "/transaksi/", config());
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const fetchAllTransaksiById = async (id) => {
  try {
    const response = await axios.get(baseURL + "/transaksi/find/" + id, config());
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const filterTransaksi = async (startDate, endDate) => {
  try {
    const response = await axios.post(
      baseURL + "/transaksi/filterTransaksi",
      {
        startDate,
        endDate,
      },
      config()
    );
    console.log(response);
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const addTransaksi = async (data) => {
  try {
    const response = await axios.post(baseURL + "/transaksi", data, config());
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const updateStatus = async (id, userID) => {
  try {
    const response = await axios.put(
      baseURL + "/transaksi/" + id,
      { userID },
      config()
    );
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const deleteTransaksi = async (id) => {
  try {
    const response = await axios.delete(baseURL + "/transaksi/" + id, config());
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
