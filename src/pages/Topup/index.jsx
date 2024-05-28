/* eslint-disable react-hooks/rules-of-hooks */
import { CustomButton } from "@/components";
import { AdminLayout } from "@/components/Layouts";
import { useTopupData } from "./hooks/useTopup";

export default function index() {
  const { topup, handleUpdate, handleDelete } = useTopupData();

  return (
    <AdminLayout>
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-center text-3xl md:text-4xl text-primary-dark font-bold mb-16">
          Topup Panel
        </h1>
      </header>
      {/* End Header */}

      <table className="w-full my-5 border-collapse overflow-scroll md:overflow-hidden rounded-2xl shadow-lg">
        <thead className="bg-secondary w-full text-lg text-white">
          <tr>
            <th className="p-3">No</th>
            <th className="py-3">Nama</th>
            <th className="py-3">Saldo</th>
            <th className="py-3">Status</th>
            <th className="py-3">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300 text-base">
          {topup && topup.length > 0 ? (
            topup?.map((item, index) => (
              <tr key={index} className="hover:bg-slate-50">
                <th className="p-3">{index + 1}</th>
                <td align="center">
                  <p className="text-lg">{item.username}</p>
                </td>
                <td align="center">
                  <p className="text-lg">{item.saldo}</p>
                </td>
                <td align="center">
                  <p className="text-lg">{item.status}</p>
                </td>
                <td align="center" className="h-full w-96 justify-center">
                  <div className="flex justify-center items-center gap-2">
                    {item.status === "approved" ? (
                      ""
                    ) : (
                      <CustomButton
                        className="bg-primary rounded-full hover:bg-secondary text-white w-28 my-2"
                        onClick={() => {
                          handleUpdate(item.topupID);
                        }}
                      >
                        Accept
                      </CustomButton>
                    )}

                    <CustomButton
                      className="bg-red-400 rounded-full hover:bg-red-500 text-white w-28"
                      onClick={() => handleDelete(item.topupID)}
                    >
                      Delete
                    </CustomButton>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-60 h-60">
                    <img
                      src="/notFound.svg"
                      alt="troly kosong"
                      className="mt-6"
                    />
                  </div>
                  <h1 className="pb-6 text-xl">
                    <strong>Oooops!</strong> Sepertinya tidak ada topup yang
                    ditemukan
                  </h1>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </AdminLayout>
  );
}
