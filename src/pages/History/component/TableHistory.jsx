import CustomButton from "@/components/Button";

export const TableHistory = ({ history, checkOut }) => {
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <section className="w-full md:w-[840px] h-full bg-white shadow-xl rounded-xl p-12">
      <h1 className="text-2xl font-bold whitespace-nowrap text-secondary">
        Pesanan
      </h1>

      <div className="overflow-auto max-h-[400px]">
        <table className="w-full my-5 border-collapse shadow-lg">
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
                        className="bg-yellow-300 text-yellow-700 w-28"
                      >
                        Check Out
                      </CustomButton>
                    ) : (
                      <CustomButton className="bg-green-300 cursor-not-allowed text-green-700 w-28">
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
                        src="/notFound.svg"
                        alt="troly kosong"
                        className="mt-6"
                      />
                    </div>
                    <h1 className="pb-6 text-xl">
                      <strong>Oooops!</strong> Sepertinya Keranjang Anda Kosong
                    </h1>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
