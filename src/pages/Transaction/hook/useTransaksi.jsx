import { useEffect, useState } from "react";
import { fetchAllTransaksi, filterTransaksi } from "@/utils/Transaksi";

export const useTransaksi = () => {
  const [transaksi, setTransaksi] = useState([]);
  const [totalPendapatan, setTotalPendapatan] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    fetchTransaksi();
  }, []);

  const fetchTransaksi = async () => {
    try {
      const dataTransaksi = await fetchAllTransaksi();
      const transaksiLunas = dataTransaksi.filter(
        (data) => data.status === "lunas",
      );

      const totalPendapatan = transaksiLunas.reduce((total, data) => {
        return total + data.totalHarga;
      }, 0);

      setTransaksi(dataTransaksi);
      setTotalPendapatan(totalPendapatan);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilter = async () => {
    try {
      const filteredTransaksi = await filterTransaksi(startDate, endDate);

      const transaksiLunas = filteredTransaksi.filter(
        (data) => data.status === "lunas",
      );

      const totalPendapatan = transaksiLunas.reduce((total, data) => {
        return total + data.totalHarga;
      }, 0);

      setTransaksi(filteredTransaksi);
      setTotalPendapatan(totalPendapatan);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    transaksi,
    totalPendapatan,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    handleFilter,
  };
};
