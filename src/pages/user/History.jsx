import { useEffect, useState } from "react";
import ProfileLayout from "../../components/Layouts/ProfileLayout";
import { ToastContainer, toast } from "react-toastify";
import { fetchAllTransaksiById, updateStatus } from "../../utils/Transaksi";
import AuthHelpers from "../../helpers/AuthHelpers";
import { CustomButton } from "../../components";

const History = () => {
  const [history, setHistory] = useState([]);
  const [userID, setUserID] = useState("");
  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const userID = AuthHelpers.GetAuth("userID");
      const dataHistory = await fetchAllTransaksiById(userID);

      setUserID(userID);
      setHistory(dataHistory);
    } catch (error) {
      console.error(error);
    }
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-US");
  };

  const checkOut = async (id) => {
    if (window.confirm(`Apakah kamu yakin ingin membayar layanan ini?`)) {
      const response = await updateStatus(id, userID);
      if (response.status === "lunas") {
        toast.success("Sukses melakukan pembayaran", { autoClose: 2000 });
      } else {
        toast.error(response.data.message, { autoClose: 2000 });
      }
      fetchHistory();
    }
  };

  return (
    <ProfileLayout>
      <ToastContainer />
      <section className="w-full md:w-[840px] bg-white shadow-xl rounded-xl py-12 px-10">
        <h1 className="text-2xl font-bold whitespace-nowrap text-secondary">
          Pesanan
        </h1>

        <table className="w-full my-5 border-collapse overflow-scroll md:overflow-hidden rounded-2xl shadow-lg">
          <thead className="bg-secondary w-full text-lg text-white">
            <tr>
              <th className="p-3">No</th>
              <th className="py-3">Nama</th>
              <th className="py-3">Total</th>
              <th className="py-3">Tanggal</th>
              <th className="py-3">Pembayaran</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300 text-base">
            {history && history.length > 0 ? (
              history.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50">
                  <th className="p-3">{index + 1}</th>
                  <td align="center">{item.namaAplikasi}</td>
                  <td align="center">Rp. {item.totalHarga}</td>
                  <td align="center">{formatDate(item.tgl)}</td>
                  <td align="center" className="h-full justify-center py-4">
                    {item.status == "draft" ? (
                      <CustomButton
                        onClick={() => checkOut(item.transaksiID)}
                        className="bg-yellow-300 font-semibold text-yellow-700 w-36"
                      >
                        Check Out
                      </CustomButton>
                    ) : (
                      <CustomButton className="bg-green-300 cursor-default font-semibold text-green-700 w-36">
                        Lunas
                      </CustomButton>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-60 h-60">
                      <img
                        src="https://www.ubifresh.id/static/images/bg/empty-cart.png"
                        alt="troly kosong"
                        className="mt-6"
                      />
                    </div>
                    <h1 className="pb-6 text-xl">
                      Oooops! Sepertinya Keranjang Anda Kosong
                    </h1>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </ProfileLayout>
  );
};

export default History;
