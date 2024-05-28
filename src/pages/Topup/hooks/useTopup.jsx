import { useEffect, useState } from "react";

import { accTopup, deleteTopup, fetchAllTopUp } from "@/utils/Topup";
import { handleApiResponse } from "@/utils/helpers/Response";

export const useTopupData = () => {
  const [topup, setTopup] = useState([]);

  useEffect(() => {
    fetchTopup();
  }, []);

  const fetchTopup = async () => {
    try {
      const dataTopup = await fetchAllTopUp();

      setTopup(dataTopup);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id) => {
    const response = await accTopup(id);
    handleApiResponse(response);
    fetchTopup();
  };

  const handleDelete = async (id) => {
    const response = await deleteTopup(id);
    handleApiResponse(response, () => fetchTopup());
  };

  return {
    topup,
    handleUpdate,
    handleDelete,
  };
};
