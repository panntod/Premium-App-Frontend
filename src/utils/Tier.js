import axios from "axios";
import { config, baseURL } from "../Config";
import { handleApiError } from "../helpers/Response";

export const fetchAllTiers = async () => {
  try {
    const response = await axios.get(baseURL + "/tier/", config);
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const findTier = async (id) => {
  try {
    const response = await axios.post(baseURL + "/tier/find/" + id, config);
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const addTier = async (data) => {
  try {
    const response = await axios.post(baseURL + "/tier/", { data }, config);
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const updateTier = async (id, data) => {
  try {
    const response = await axios.put(baseURL + "/tier/" + id, { data }, config);
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const deleteTier = async (id) => {
  try {
    const response = await axios.post(baseURL + "/tier/" + id, config);
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};
