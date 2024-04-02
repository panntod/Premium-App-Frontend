import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";
import { fetchAllApp, fetchStatistik, findApp } from "@/utils/Aplikasi";

export const useDashboardData = () => {
  const [statistik, setStatistik] = useState({});
  const [layanan, setLayanan] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    fetchData();
  }, []);

  const fetchData = async () => {
    const [dataStatistik, dataLayanan] = await Promise.all([
      fetchStatistik(),
      fetchAllApp(),
    ]);

    setStatistik(dataStatistik);
    setLayanan(dataLayanan);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const result = await findApp(search);
      setLayanan(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePesan = (id) => {
    navigate(`/pesan?id=${id}`);
  };

  return { statistik, layanan, search, setSearch, handleSearch, handlePesan };
};
