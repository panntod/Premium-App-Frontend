import React from "react";

import { IoPeople, IoSwapHorizontal, IoBagCheck, IoStar } from "react-icons/io5";
import { CustomButton, Navbar } from "../../components";
import mainPhoto from "../../assets/mainPhoto.svg";

const dumpDataLayanan = [
  {
    nama: "Youtube",
    image: "",
    deskripsi: "Youtube Pro",
    tier: "pro",
    harga: 70000,
  },
];

const dumpData = [
  {
    jumlah: 350,
  },
  {
    jumlah: 35000,
  },
];

const Dashboard = () => {
  return (
    <Navbar>
      {/* Landing Page */}
      <main className="h-screen flex flex-col-reverse items-center justify-center sm:flex-row">
        <section className="md:w-[600px]">
          <h1 className="text-primary-dark font-extrabold text-4xl md:text-6xl mb-6">
            Patungan Layanan Premium Legal
          </h1>
          <p className="text-primary text-xl font-medium mb-6">
            Cek pilihan layanan di Lorem sekarang
          </p>
          <CustomButton
            className="bg-gradient-to-r from-primary-dark to-secondary font-bold text-white w-[200px] h-[40px] md:w-[240px] md:h-[50px]"
            type="button"
            onClick={null}
          >
            Lihat Layanan
          </CustomButton>
        </section>
        <div className="md:h-[600px] md:w-[600px] flex items-center justify-end">
          <img src={mainPhoto} alt="main photo" />
        </div>
      </main>

      {/* Information Section */}
      <section
        id="information"
        className="flex md:flex-col justify-center items-center"
      >
        <div className="text-center w-[680px] mb-14">
          <h1 className="text-4xl text-primary-dark font-bold mb-6">
            Jadilah Bagian Dari Lorem!
          </h1>
          <p className="text-xl text-primary font-semibold">
            Dapatkan manfaat Patungan Berlangganan. Nikmati layanan premium
            dengan lebih hemat, aman dan legal
          </p>
        </div>

        {/* Card Container */}
        <div className="flex gap-16">

          {/* Card */}
          <div className="w-[275px] h-[300px] flex-shrink-0 flex flex-col justify-center items-center bg-white rounded-2xl shadow-xl">
            <div className="w-[100px] h-[100px] rounded-full bg-primary-dark flex items-center justify-center mb-4">
              <IoPeople className="text-white text-6xl" />
            </div>
            <span className="text-2xl font-semibold mb-4 text-primary-dark">{dumpData[0].jumlah}+</span>
            <h1 className="text-4xl font-extrabold text-primary-dark">Pengguna</h1>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="w-[275px] h-[300px] flex-shrink-0 flex flex-col justify-center items-center bg-white rounded-2xl shadow-xl">
            <div className="w-[100px] h-[100px] rounded-full bg-primary-dark flex items-center justify-center mb-4">
              <IoSwapHorizontal className="text-white text-6xl" />
            </div>
            <span className="text-2xl font-semibold mb-4 text-primary-dark">{dumpData[1].jumlah}+</span>
            <h1 className="text-4xl font-extrabold text-primary-dark">Transaksi</h1>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="w-[275px] h-[300px] flex-shrink-0 flex flex-col justify-center items-center bg-white rounded-2xl shadow-xl">
            <div className="w-[100px] h-[100px] rounded-full bg-primary-dark flex items-center justify-center mb-4">
              <IoBagCheck className="text-white text-6xl" />
            </div>
            <span className="text-2xl font-semibold mb-4 text-primary-dark">{dumpData[1].jumlah}+</span>
            <h1 className="text-4xl font-extrabold text-primary-dark">Layanan</h1>
          </div>
          {/* End Card */}

          {/* Card */}
          <div className="w-[275px] h-[300px] flex-shrink-0 flex flex-col justify-center items-center bg-white rounded-2xl shadow-xl">
            <div className="w-[100px] h-[100px] rounded-full bg-primary-dark flex items-center justify-center mb-4">
              <IoStar className="text-white text-6xl" />
            </div>
            <span className="text-2xl font-semibold mb-4 text-primary-dark">9.5 / 10</span>
            <h1 className="text-4xl font-extrabold text-primary-dark">Kepuasan</h1>
          </div>
          {/* End Card */}

        </div>
      </section>
    </Navbar>
  );
};

export default Dashboard;
