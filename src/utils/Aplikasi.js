import axios from "axios";
import { config, baseURL } from "../Config";
import { handleApiError } from "../helpers/Response";

export const fetchAllApp = async () => {
  try {
    const response = await axios.get(baseURL + "/app/", config);
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const findApp = async (keyword) => {
  try {
    const response = await axios.post(
      baseURL + "/app/find",
      { keyword },
      config
    );
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const addApp = async (data) => {
  try {
    const response = await axios.post(
      baseURL + "/app",
      { data },
      config
    );
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const updateApp = async (id, data) => {
  try {
    const response = await axios.put(
      baseURL + "/app/" + id,
      { data },
      config
    );
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const deleteApp = async (id) => {
  try {
    const response = await axios.delete(
      baseURL + "/app/" + id,
      config
    );
    return response.data.data;
  } catch (error) {
    return handleApiError(error);
  }
};
