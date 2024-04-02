import { imageURL } from "@/Config";
import CustomButton from "@/components/Button";

export const TableTransaction = ({ transaksi }) => {
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <table className="w-full my-5 border-collapse overflow-scroll md:overflow-hidden rounded-2xl shadow-lg">
      <thead className="bg-secondary w-full text-lg text-white">
        <tr>
          <th className="p-3">No</th>
          <th className="py-3">Transaksi</th>
          <th className="py-3">Harga</th>
          <th className="py-3">Total</th>
          <th className="py-3">User</th>
          <th className="py-3">Tanggal</th>
          <th className="py-3">Status</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-300 text-base">
        {transaksi && transaksi.length > 0 ? (
          transaksi.map((item, index) => (
            <tr key={index} className="hover:bg-slate-50">
              <th className="p-3">{index + 1}</th>
              <td className="py-2 w-[20rem]">
                <div className="flex items-center gap-4 ">
                  <div className="w-14 h-14 rounded">
                    <img src={imageURL + item.imageApp} alt={item.namaApp} />
                  </div>
                  <h1 className="font-bold">{item.namaApp}</h1>
                </div>
              </td>
              <td align="center">Rp. {item.harga}</td>
              <td align="center">Rp. {item.totalHarga}</td>
              <td align="center">{item.username}</td>
              <td align="center">{formatDate(item.tgl)}</td>
              <td align="center" className="h-full justify-center py-4">
                {item.status == "draft" ? (
                  <CustomButton className="bg-yellow-300 cursor-default text-yellow-600 w-28">
                    Draft
                  </CustomButton>
                ) : (
                  <CustomButton className="bg-green-300 cursor-default text-green-600 w-28">
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
                  <strong>Oooops!</strong> Sepertinya tidak ada transaksi yang
                  ditemukan
                </h1>
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
