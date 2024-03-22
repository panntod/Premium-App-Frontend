import { useState, useEffect } from "react";
import AuthHelpers from "../../helpers/AuthHelpers";
import { useNavigate } from "react-router-dom";

import { CustomButton } from "../../components";
import { ToastContainer, toast } from "react-toastify";
import { imageURL } from "../../Config";
import { addTransaksi } from "../../utils/Transaksi";
import { findAppByID } from "../../utils/Aplikasi";

const Pesan = () => {
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

  const handleBeli = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userID = AuthHelpers.GetAuth("userID");
    const newTransaksi = {
      userID: userID,
      aplikasiID: application.id,
      durasi: duration,
    };

    const response = await addTransaksi(newTransaksi);
    if (response.success === true) {
      toast.success(response.message, { autoClose: 2000 });
    } else {
      const errorMessage = response.data.errors
        ? response.data.errors
        : ["Terjadi kesalahan pada server"];

      errorMessage.forEach((message) => {
        toast.error(message, { autoClose: 2000 });
      });
    }

    setTimeout(() => {
      navigate("/");
      setLoading(false);
    }, 1000);
  };
  return (
    <main className="w-full min-h-screen bg-background flex flex-col md:flex-row justify-center md:gap-12 py-12">
      <ToastContainer />
      <section className="w-full md:w-[560px]">
        {/* Application Detail */}
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="w-20 h-20 rounded-lg overflow-hidden mr-4 md:mr-0">
              <img
                src={imageURL + application.image}
                alt={application.images}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-semibold ml-4">{application.nama}</h1>
          </div>

          <h2 className="text-lg font-semibold md:text-2xl md:font-bold text-primary mb-4">
            Rp.{application.harga}{" "}
            <span className="text-gray-400 text-base">/bulan</span>
          </h2>
        {/* End Application Detail */}

        {/* Card */}
        <div className="rounded-xl overflow-hidden border bg-white border-gray-200 divide-y-2 divide-gray-200">
          {/* Card Head */}
          <div className="md:flex">
            <div className="py-3 px-5 flex gap-4">
              <div
                className={`flex items-center h-10 px-6 py-2 rounded-lg ${
                  info ? "bg-primary text-white" : "text-gray-400"
                } hover:cursor-pointer`}
                onClick={() => setInfo(true)}
              >
                <a className="text-lg font-semibold">Informasi</a>
              </div>
              <div
                className={`flex items-center h-10 px-6 py-2 rounded-lg ${
                  !info ? "bg-primary text-white" : "text-gray-400"
                } hover:cursor-pointer whitespace-nowrap`}
                onClick={() => setInfo(false)}
              >
                <a className="text-lg font-semibold">Skema Berlangganan</a>
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="md:flex-shrink-0">
            {info ? (
              <div className="p-4">
                <p className="bg-background p-4">
                  Paket Patungan pada <strong>{application?.nama}</strong>{" "}
                  merupakan produk <strong>Ready</strong>. Untuk dapat
                  berlangganan paket ini, kamu dapat langsung mendaftar dan
                  melakukan pembayaran. Kami akan langsung proses pesanan kamu
                  setelah pembayaran berhasil.
                </p>
              </div>
            ) : (
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4 w-full">
                  <span className="w-10 h-8 rounded-full flex justify-center items-center bg-secondary text-white">
                    1
                  </span>{" "}
                  Lorem membuat akun dan membeli Paket Premium di{" "}
                  {application?.nama}
                </div>
                <div className="flex items-center gap-4 w-full">
                  <span className="w-8 h-8 rounded-full flex justify-center items-center bg-secondary text-white">
                    2
                  </span>{" "}
                  Lorem bertindak sebagai user Host dalam grup
                </div>
                <div className="flex items-center gap-4 w-full">
                  <span className="w-8 h-8 rounded-full flex justify-center items-center bg-secondary text-white">
                    3
                  </span>{" "}
                  Member membuat/ menyediakan akun masing-masing
                </div>
                <div className="flex items-center gap-4 w-full">
                  <span className="w-8 h-8 rounded-full flex justify-center items-center bg-secondary text-white">
                    4
                  </span>{" "}
                  Lorem mengundang 5 member untuk join 1 grup Premium
                </div>
                <div className="flex items-center gap-4 w-full">
                  <span className="w-8 h-8 rounded-full flex justify-center items-center bg-secondary text-white">
                    5
                  </span>{" "}
                  Member yang telah join ke grup dapat menikmati fitur Premium
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* End */}

      <section className="w-full md:w-[510px] p-6">
        <div className="p-6 flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Pilih Durasi Langganan</h1>
          <div className="flex flex-col gap-4">
            {/* Radio Button */}
            <div className="flex gap-4">
              <div className="flex items-center gap-4 w-full">
                <input
                  type="radio"
                  id="1bulan"
                  name="duration"
                  value="1bulan"
                  checked={duration === 1}
                  onChange={() => setDuration(1)}
                  className="sr-only"
                />
                <label
                  htmlFor="1bulan"
                  className={`flex-1 py-2 rounded-lg text-center cursor-pointer ${
                    duration === 1
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  1 Bulan
                </label>
              </div>
              <div className="flex items-center gap-4 w-full">
                <input
                  type="radio"
                  id="3bulan"
                  name="duration"
                  value="3bulan"
                  checked={duration === 3}
                  onChange={() => setDuration(3)}
                  className="sr-only"
                />
                <label
                  htmlFor="3bulan"
                  className={`flex-1 py-2 rounded-lg text-center cursor-pointer ${
                    duration === 3
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  3 Bulan
                </label>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-4 w-full">
                <input
                  type="radio"
                  id="6bulan"
                  name="duration"
                  value="6bulan"
                  checked={duration === 6}
                  onChange={() => setDuration(6)}
                  className="sr-only"
                />
                <label
                  htmlFor="6bulan"
                  className={`flex-1 py-2 rounded-lg text-center cursor-pointer ${
                    duration === 6
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  6 Bulan
                </label>
              </div>
              <div className="flex items-center gap-4 w-full">
                <input
                  type="radio"
                  id="8bulan"
                  name="duration"
                  value="8bulan"
                  checked={duration === 8}
                  onChange={() => setDuration(8)}
                  className="sr-only"
                />
                <label
                  htmlFor="8bulan"
                  className={`flex-1 py-2 rounded-lg text-center cursor-pointer ${
                    duration === 8
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  8 Bulan
                </label>
              </div>
            </div>
            {/* End Radio Button */}

            {/* Total Section */}
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Total: </h1>
              <h1 className="text-xl font-bold">Rp {total} </h1>
            </div>
            {/* End Total Section */}

            <CustomButton
              className="bg-gradient-to-r from-primary-dark to-secondary text-white w-full h-12 mt-auto md:text-base"
              onClick={(e) => handleBeli(e)}
              loading={loading}
            >
              Beli
            </CustomButton>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pesan;
