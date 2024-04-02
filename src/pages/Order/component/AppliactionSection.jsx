import { imageURL } from "@/Config";

export const AppliactionSection = ({ application, info, setInfo }) => {
  return (
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
                <span className="w-9 h-8 rounded-full flex justify-center items-center bg-secondary text-white">
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
                <span className="w-9 h-8 rounded-full flex justify-center items-center bg-secondary text-white">
                  5
                </span>{" "}
                Member yang telah join ke grup dapat menikmati fitur Premium
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
