import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addTransaksi } from "@/utils/Transaksi";
import { findAppByID } from "@/utils/Aplikasi";
import AuthHelpers from "@/utils/helpers/AuthHelpers";
import { handleApiResponse } from "@/utils/helpers/Response";

export const useOrderData = () => {
  const [application, setApplication] = useState({});
  const [duration, setDuration] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    retrieveApplication();
  }, []);

  useEffect(() => {
    setTotal(application.harga * duration);
  }, [duration, application]);

  const retrieveApplication = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const aplikasiID = queryParams.get("id");

    const result = await findAppByID(aplikasiID);
    if (result.status === 404) {
      navigate("/notfound");
    }
    setApplication(result);
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userID = AuthHelpers.GetAuth("userID");
    const newTransaksi = {
      userID: userID,
      aplikasiID: application.aplikasiID,
      durasi: duration,
    };

    const response = await addTransaksi(newTransaksi);
    handleApiResponse(response, () => {
      setTimeout(() => {
        navigate("/");
        setLoading(false);
      }, 1000);
    })
  };

  return {
    application,
    duration,
    total,
    loading,
    info,
    setDuration,
    setInfo,
    handleOrder,
  };
};
