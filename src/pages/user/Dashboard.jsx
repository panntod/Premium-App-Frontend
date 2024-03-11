import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/Layouts";
import { fetchAllApp, fetchStatistik, findApp } from "../../utils/Aplikasi";
import {
  CardLayanan,
  CardStatistik,
  CustomButton,
  CustomSearch,
} from "../../components";
import { imageURL } from "../../Config";

import benefitPhoto from "../../assets/benefitPhoto.svg";
import mainPhoto from "../../assets/mainPhoto.svg";
import prosesIcon from "../../assets/prosesIcon.svg";
import pembayaranIcon from "../../assets/pembayaranIcon.svg";
import pesanIcon from "../../assets/pesanIcon.svg";
import pesananIcon from "../../assets/pesananIcon.svg";
import selesaiIcon from "../../assets/selesaiIcon.svg";
import {
  IoPeople,
  IoSwapHorizontal,
  IoBagCheck,
  IoStar,
  IoLockClosed,
  IoCall,
  IoCheckmark,
  IoCard,
  IoNotifications,
  IoCut,
} from "react-icons/io5";

const Dashboard = () => {
  const [statistik, setStatistik] = useState({});
  const [layanan, setLayanan] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [dataStatistik, dataLayanan] = await Promise.all([
        fetchStatistik(),
        fetchAllApp(),
      ]);

      setStatistik(dataStatistik);
      setLayanan(dataLayanan);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const result = await findApp(search);
      setLayanan(result);
    } catch (error) {
      console.error(error);
    }
  };

  const cardData = [
    {
      id: 1,
      icon: <IoPeople className="text-white text-4xl" />,
      value: `${statistik.statistikUser}+`,
      title: "Pengguna",
    },
    {
      id: 2,
      icon: <IoSwapHorizontal className="text-white text-4xl" />,
      value: `${statistik.statistikTransaksi}+`,
      title: "Transaksi",
    },
    {
      id: 3,
      icon: <IoBagCheck className="text-white text-4xl" />,
      value: `${statistik.statistikApp}+`,
      title: "Layanan",
    },
    {
      id: 4,
      icon: <IoStar className="text-white text-4xl" />,
      value: "9.5 / 10",
      title: "Kepuasan",
    },
  ];

  return (
    <MainLayout>
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
            className="bg-gradient-to-r from-primary-dark to-secondary font-bold text-white w-[160px] md:w-[220px] h-[40px] md:h-12 whitespace-nowrap"
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
      {/* End Landing Page */}

      {/* Information Section */}
      <section
        id="information"
        className="flex flex-col justify-center items-center"
      >
        <div className="text-center md:w-[680px] mb-14">
          <h1 className="text-3xl md:text-4xl text-primary-dark font-bold mb-6">
            Jadilah Bagian Dari Lorem!
          </h1>
          <p className="text-lg md:text-xl text-primary md:font-semibold">
            Dapatkan manfaat Patungan Berlangganan. Nikmati layanan premium
            dengan lebih hemat, aman dan legal
          </p>
        </div>

        {/* Card Container*/}
        <div className="flex flex-wrap gap-8 md:gap-16 mb-36">
          <div className="flex flex-wrap gap-8 md:gap-16">
            {cardData?.map((data) => (
              <CardStatistik data={data} />
            ))}
          </div>
        </div>
        {/* End Card Container */}

        <div className="mb-36">
          <h1 className="text-2xl md:text-4xl text-primary-dark font-bold mb-6 text-center">
            Beragam Manfaat <br /> Yang Bisa Kamu Dapatkan
          </h1>

          {/* Benefit Section */}
          <div id="benefit">
            <img
              src={benefitPhoto}
              alt="Benefit Photo"
              className="sm:block md:hidden mb-4"
            />

            <div className="flex">
              <div className="flex-col space-y-12 md:space-y-24">
                <div className="flex justify-start">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-xl mr-5 flex justify-center items-center">
                    <IoCut className="text-white text-md md:text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold md:text-2xl md:font-bold text-primary w-[140px] md:w-[220px] h-[74px]">
                    Hemat Hingga 70%
                  </h3>
                </div>
                <div className="flex justify-start">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-xl mr-5 flex justify-center items-center">
                    <IoLockClosed className="text-white text-md md:text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold md:text-2xl md:font-bold text-primary w-[140px] md:w-[220px] h-[74px]">
                    Privasi Terjamin
                  </h3>
                </div>
                <div className="flex justify-start">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-xl mr-5 flex justify-center items-center">
                    <IoCall className="text-white text-md md:text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold md:text-2xl md:font-bold text-primary w-[140px] md:w-[220px] h-[74px]">
                    Customer Service <br />
                    Responsif
                  </h3>
                </div>
              </div>

              <img
                src={benefitPhoto}
                alt="Benefit Photo"
                className="hidden md:block"
              />

              <div className="flex-col space-y-12 md:space-y-24">
                <div className="flex justify-end">
                  <h3 className="text-xl font-semibold md:text-2xl md:font-bold text-primary w-[140px] md:w-[220px] h-[74px]">
                    Beragam Metode Pembayaran
                  </h3>
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-xl ml-5 flex justify-center items-center">
                    <IoCard className="text-white text-md md:text-2xl" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <h3 className="text-xl font-semibold md:text-2xl md:font-bold text-primary w-[140px] md:w-[220px] h-[74px]">
                    Layanan Legal dan Resmi
                  </h3>
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-xl ml-5 flex justify-center items-center">
                    <IoCheckmark className="text-white text-md md:text-2xl" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <h3 className="text-xl font-semibold md:text-2xl md:font-bold text-primary w-[140px] md:w-[220px] h-[74px]">
                    Pengingat Pembayaran
                  </h3>
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-xl ml-5 flex justify-center items-center">
                    <IoNotifications className="text-white text-md md:text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Benefit Section */}
        </div>
      </section>
      {/* End Information Section */}

      {/* Layanan Container */}
      <section id="layanan" className="w-full md:w-[1270px] mx-auto mb-36">
        <header className="w-full mb-12">
          <h1 className="text-2xl md:text-4xl text-primary-dark font-bold mb-6">
            Belangganan Produk Digital
          </h1>
          <form
            className="flex items-center text-gray-100 px-4 w-full md:w-[500px] h-[40px] rounded-md border-2 border-primary bg-white p-4"
            onSubmit={handleSearch}
          >
            <CustomSearch search={search} setSearch={setSearch} />
          </form>
        </header>

        <main className="flex flex-wrap items-start gap-8 md:gap-20">
          {layanan && layanan.length > 0 ? (
            layanan.map((data) => (
              <CardLayanan
                key={data.id}
                id={data.id}
                nama={data.nama}
                tier={data.tier}
                harga={data.harga}
                image={data.image ? imageURL + data.image : null}
                onPesan={() => null}
              />
            ))
          ) : (
            <div className="w-full md:w-[370px] h-[420px] rounded-xl shadow bg-white flex flex-col p-7">
              <div className="flex items-center justify-center h-full">
                <h1 className="text-4xl font-semibold text-center text-primary">
                  Tidak ada layanan yang ditemukan.
                </h1>
              </div>
            </div>
          )}
        </main>
      </section>
      {/* End Layanan Container */}

      {/* Cara Berlangganan Section */}
      <section
        id="caraBerlangganan"
        className="flex flex-col items-center justify-center py-8 md:py-12"
      >
        <h1 className="text-3xl md:text-4xl text-primary-dark font-bold mb-6">
          Cara Berlangganan
        </h1>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <div className="w-48 h-56 text-center">
            <img src={pesanIcon} alt="pesan icon" />
            <h3 className="text-primary text-2xl font-semibold">
              Pesan Layanan
            </h3>
          </div>
          <div className="w-48 h-56 text-center">
            <img src={pembayaranIcon} alt="pembayaran icon" />
            <h3 className="text-primary text-2xl font-semibold">Pembayaran</h3>
          </div>
          <div className="w-48 h-56 text-center">
            <img src={prosesIcon} alt="proses icon" />
            <h3 className="text-primary text-2xl font-semibold">
              Menunggu Proses
            </h3>
          </div>
          <div className="w-48 h-56 text-center">
            <img src={pesananIcon} alt="pesanan icon" />
            <h3 className="text-primary text-2xl font-semibold">
              Pesanan Diterima
            </h3>
          </div>
          <div className="w-48 h-56 text-center">
            <img src={selesaiIcon} alt="Selesai icon" />
            <h3 className="text-primary text-2xl font-semibold">
              Selesai Layanan
            </h3>
          </div>
        </div>
      </section>
      {/* End Cara Berlangganan Section */}
    </MainLayout>
  );
};

export default Dashboard;
