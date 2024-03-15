import React, { useEffect, useState } from "react";
import { AdminLayout } from "../../components/Layouts";
import { CustomButton, CustomSearch } from "../../components";
import { ToastContainer, toast } from "react-toastify";
import {
  deleteTransaksi,
  fetchAllTransaksi,
  filterTransaksi,
} from "../../utils/Transaksi";
import { imageURL } from "../../Config";

const Transaksi = () => {
  const [transaksi, setTransaksi] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalPendapatan, setTotalPendapatan] = useState(0);

  useEffect(() => {
    fetchTransaksi();
  }, []);

  const fetchTransaksi = async () => {
    try {
      const dataTransaksi = await fetchAllTransaksi();
      const transaksiLunas = dataTransaksi.filter(data => data.status === "lunas");
  
      const totalPendapatan = transaksiLunas.reduce((total, data) => {
        return total + data.totalHarga;
      }, 0);
  
      setTransaksi(dataTransaksi);
      setTotalPendapatan(totalPendapatan);
    } catch (error) {
      console.error(error);
    }
  };
  

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US");
  };

  const handleFilter = async () => {
    try {
      const filteredTransaksi = await filterTransaksi(startDate, endDate);

      const transaksiLunas = filterTransaksi.filter(data => data.status === "lunas");
  
      const totalPendapatan = transaksiLunas.reduce((total, data) => {
        return total + data.totalHarga;
      }, 0);
  
      setTransaksi(filteredTransaksi);
      setTotalPendapatan(totalPendapatan);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (
      window.confirm("Apakah kamu yakin ingin menghapus data transaksi ini?")
    ) {
      const response = await deleteTransaksi(id);
      toast.success(response.message, { autoClose: 2000 });
      fetchTransaksi();
    }
  };

  return (
    <AdminLayout>
      <ToastContainer />
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-center text-3xl md:text-4xl text-primary-dark font-bold mb-12">
          Transaksi Panel
        </h1>

        {/* Search */}
        <div className="flex justify-between">
          <h1 className="font-medium text-2xl text-center">
            TOTAL PENDAPATAN Rp{" "}
            <span className="text-primary-dark font-bold">
              {totalPendapatan}
            </span>
          </h1>
          <div>
            <div className="flex gap-2 mb-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tanggal Awal:
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tanggal Akhir:
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                />
              </div>
            </div>

            <CustomButton
              onClick={handleFilter}
              className="bg-blue-400 rounded-full hover:bg-blue-500 font-medium text-white w-28 "
              type={"submit"}
            >
              Filter
            </CustomButton>
          </div>
        </div>
        {/* End Search */}
      </header>
      {/* End Header */}

      <table className="w-full my-5 border-collapse overflow-scroll md:overflow-hidden rounded-2xl shadow-lg">
        <thead className="bg-secondary w-full text-lg text-white">
          <tr>
            <th className="p-3">No</th>
            <th className="py-3">Transaksi</th>
            <th className="py-3">Total</th>
            <th className="py-3">User</th>
            <th className="py-3">Tanggal</th>
            <th className="py-3">Status</th>
            <th className="py-3">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300 text-base">
          {transaksi && transaksi.length > 0 ? (
            transaksi.map((item, index) => (
              <tr key={index} className="hover:bg-slate-50">
                <th className="p-3">{index + 1}</th>
                <td className="pt-2 w-[30rem]">
                  <div className="flex items-center gap-4 ">
                    <div className="w-14 h-14 rounded">
                      <img
                        src={imageURL + item.image}
                        alt={item.namaAplikasi}
                      />
                    </div>
                    <h1 className="font-bold">{item.namaAplikasi}</h1>
                  </div>
                </td>
                <td align="center">Rp. {item.totalHarga}</td>
                <td align="center">{item.username}</td>
                <td align="center">{formatDate(item.tgl)}</td>
                <td align="center" className="h-full justify-center py-4">
                  {item.status == "draft" ? (
                    <CustomButton className="bg-yellow-300 cursor-default font-semibold text-yellow-600 w-28">
                      Draft
                    </CustomButton>
                  ) : (
                    <CustomButton className="bg-green-300 cursor-default font-semibold text-green-600 w-28">
                      Lunas
                    </CustomButton>
                  )}
                </td>
                <td align="center" className="h-full justify-center py-4">
                  <CustomButton
                    onClick={() => handleDelete(item.transaksiID)}
                    className="bg-red-400 rounded-full hover:bg-red-500 font-medium text-white w-28"
                  >
                    Hapus
                  </CustomButton>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-5 text-xl font-bold">
                Transaksi tidak ditemukan
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default Transaksi;
