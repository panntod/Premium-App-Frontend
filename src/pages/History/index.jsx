import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchAllTransaksiById, updateStatus } from "@/utils/Transaksi";
import AuthHelpers from "@/utils/helpers/AuthHelpers";
import ProfileLayout from "@/components/Layouts/ProfileLayout";
import { TableHistory } from "./component/TableHistory";

const History = () => {
  const [history, setHistory] = useState([]);
  const [userID, setUserID] = useState("");

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    const userID = AuthHelpers.GetAuth("userID");
    const dataHistory = await fetchAllTransaksiById(userID);

    setUserID(userID);
    setHistory(dataHistory);
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
      <TableHistory
        history={history}
        checkOut={checkOut}
      />
    </ProfileLayout>
  );
};

export default History;
