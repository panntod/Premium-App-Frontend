import { AdminLayout } from "@/components/Layouts";
import { CustomButton } from "@/components";
import { useTransaksi } from "./hook/useTransaksi";
import { TableTransaction } from "./component/TableTransaction";

const Transaksi = () => {
  const {
    transaksi,
    totalPendapatan,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    handleFilter,
  } = useTransaksi();

  return (
    <AdminLayout>
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
                <label
                  htmlFor="startDate"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Tanggal Awal:
                </label>
                <input
                  id="startDate"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="endDate"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Tanggal Akhir:
                </label>
                <input
                  id="endDate"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                />
              </div>
            </div>

            <CustomButton
              onClick={handleFilter}
              className="bg-blue-400 hover:bg-blue-500 text-white w-28 md:text-base"
              type={"submit"}
            >
              Filter
            </CustomButton>
          </div>
        </div>
        {/* End Search */}
      </header>
      {/* End Header */}

      <TableTransaction transaksi={transaksi} />
    </AdminLayout>
  );
};

export default Transaksi;
