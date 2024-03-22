import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { MainLayout } from "../../components/Layouts";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
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

  const handlePesan = (id) => {
    navigate(`/pesan?id=${id}`);
  };

  return (
    <MainLayout>
      {/* Landing Page */}
      <main className="min-h-screen flex flex-col-reverse sm:flex-row items-center justify-center mb-12 md:mb-0">
        <section
          data-aos="fade-right"
          data-aos-duration="1500"
          className="w-full md:w-[600px]"
        >
          <h1 className="text-primary-dark font-extrabold text-4xl md:text-6xl mb-6">
            Patungan Layanan Premium Legal
          </h1>
          <p className="text-primary text-xl font-medium mb-6">
            Cek pilihan layanan di Lorem sekarang
          </p>
          <div data-aos="fade-up" data-aos-duration="2000">
            <CustomButton
              className="md:text-base bg-gradient-to-r from-primary-dark to-secondary text-white w-[160px] md:w-[220px] h-[40px] md:h-12"
              onClick={(e) => {
                e.preventDefault();
                const caraPesanSection = document.getElementById("layanan");
                caraPesanSection.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Lihat Layanan
            </CustomButton>
          </div>
        </section>
        <div className="md:h-[600px] md:w-[600px] flex items-center justify-end">
          <img
            data-aos="fade-up"
            data-aos-duration="1500"
            src={mainPhoto}
            alt="main photo"
          />
        </div>
      </main>
      {/* End Landing Page */}

      {/* Information Section */}
      <section
        id="pengguna"
        className="flex flex-col min-h-screen justify-center items-center bg-inherit md:bg-gradient-to-b md:from-primary-dark md:to-secondary"
      >
        <header
          data-aos="fade-down"
          data-aos-duration="1500"
          className="text-center md:w-[680px] mb-14"
        >
          <h1 className="text-3xl md:text-4xl md:text-white text-primary-dark font-bold mb-6">
            Jadilah Bagian Dari Lorem!
          </h1>
          <p className="text-lg md:text-xl text-primary md:text-white md:font-semibold">
            Dapatkan manfaat Patungan Berlangganan. Nikmati layanan premium
            dengan lebih hemat, aman dan legal
          </p>
        </header>

        {/* Card Container*/}
        <div className="flex flex-wrap gap-8 md:gap-16">
          {cardData?.map((data, index) => (
            <div
              key={data.id}
              data-aos="fade-down"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
            >
              <CardStatistik data={data} />
            </div>
          ))}
        </div>
        {/* End Card Container */}
      </section>
      {/* End Information Section */}

      <section
        id="benefit"
        className="flex flex-col justify-center items-center min-h-screen mb-6"
      >
        <div data-aos="fade-down" data-aos-duration="2000">
          <h1 className="text-2xl md:text-4xl text-primary-dark font-bold py-12 text-center">
            Beragam Manfaat <br /> Yang Bisa Kamu Dapatkan
          </h1>

          {/* Benefit Section */}
          <div id="benefit">
            <img
              src={benefitPhoto}
              alt="Benefit Photo"
              className="sm:block md:hidden pb-4"
            />

            <div className="flex">
              <div className="flex-col space-y-12 md:space-y-24">
                <div
                  className="flex justify-start"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                >
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-xl mr-5 flex justify-center items-center">
                    <IoCut className="text-white text-md md:text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold md:text-2xl md:font-bold text-primary w-[140px] md:w-[220px] h-[74px]">
                    Hemat Hingga 70%
                  </h3>
                </div>
                <div
                  className="flex justify-start"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                >
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-xl mr-5 flex justify-center items-center">
                    <IoLockClosed className="text-white text-md md:text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold md:text-2xl md:font-bold text-primary w-[140px] md:w-[220px] h-[74px]">
                    Privasi Terjamin
                  </h3>
                </div>
                <div
                  className="flex justify-start"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                >
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
                <div
                  className="flex justify-end"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                >
                  <h3 className="text-xl font-semibold md:text-2xl md:font-bold text-primary w-[140px] md:w-[220px] h-[74px]">
                    Beragam Metode Pembayaran
                  </h3>
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-xl ml-5 flex justify-center items-center">
                    <IoCard className="text-white text-md md:text-2xl" />
                  </div>
                </div>
                <div
                  className="flex justify-end"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                >
                  <h3 className="text-xl font-semibold md:text-2xl md:font-bold text-primary w-[140px] md:w-[220px] h-[74px]">
                    Layanan Legal dan Resmi
                  </h3>
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-xl ml-5 flex justify-center items-center">
                    <IoCheckmark className="text-white text-md md:text-2xl" />
                  </div>
                </div>
                <div
                  className="flex justify-end"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                >
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

      {/* Layanan Container */}
      <section
        id="layanan"
        className="w-full md:w-[1270px] min-h-screen flex flex-col items-center justify-center mx-auto"
      >
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

        <main className="flex flex-wrap items-start gap-8 md:gap-20 w-full md:w-[1270px]">
          {layanan && layanan.length > 0 ? (
            layanan.map((data) => (
              <CardLayanan
                key={data.id}
                id={data.id}
                nama={data.nama}
                tier={data.tier}
                harga={data.harga}
                deskripsi={data.deskripsi}
                image={data.image ? imageURL + data.image : null}
                onPesan={() => handlePesan(data.id)}
              />
            ))
          ) : (
            <div className="w-full h-[420px] flex flex-col rounded-xl shadow justify-center items-center bg-slate-50 p-7">
              <h1 className="text-4xl font-semibold text-center text-gray-500">
                Tidak ada aplikasi yang ditemukan.
              </h1>
            </div>
          )}
        </main>
      </section>
      {/* End Layanan Container */}

      {/* Cara Berlangganan Section */}
      <section
        data-aos="zoom-out"
        data-aos-duration="1000"
        id="caraPesan"
        className="flex flex-col items-center justify-center py-8 md:py-24"
      >
        <h1 className="text-3xl md:text-4xl text-primary-dark font-bold mb-6">
          Cara Berlangganan
        </h1>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <div className="w-full md:w-48 h-56 text-center mb-8 md:mb-0">
            <img src={pesanIcon} alt="pesan icon" className="mx-auto mb-2" />
            <h3 className="text-primary text-2xl font-semibold">
              Pesan Layanan
            </h3>
          </div>
          <div className="w-full md:w-48 h-56 text-center mb-8 md:mb-0">
            <img
              src={pembayaranIcon}
              alt="pembayaran icon"
              className="mx-auto mb-2"
            />
            <h3 className="text-primary text-2xl font-semibold">Pembayaran</h3>
          </div>
          <div className="w-full md:w-48 h-56 text-center mb-8 md:mb-0">
            <img src={prosesIcon} alt="proses icon" className="mx-auto mb-2" />
            <h3 className="text-primary text-2xl font-semibold">
              Menunggu Proses
            </h3>
          </div>
          <div className="w-full md:w-48 h-56 text-center mb-8 md:mb-0">
            <img
              src={pesananIcon}
              alt="pesanan icon"
              className="mx-auto mb-2"
            />
            <h3 className="text-primary text-2xl font-semibold">
              Pesanan Diterima
            </h3>
          </div>
          <div className="w-full md:w-48 h-56 text-center">
            <img
              src={selesaiIcon}
              alt="Selesai icon"
              className="mx-auto mb-2"
            />
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
