import { imageURL } from "@/Config";
import { MainLayout } from "@/components/Layouts";
import { CustomButton, CustomSearch } from "@/components";

import { useDashboardData } from "./hook/useDashboard";
import { CardBenefit } from "./component/CardBenefit";
import { CardLayanan } from "./component/CardLayanan";
import { CardStatistik } from "./component/CardStatistik";
import { CardBerlangganan } from "./component/CardBerlangganan";

const Dashboard = () => {
  const { layanan, search, setSearch, handleSearch, handlePesan } =
    useDashboardData();

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
            src="/mainPhoto.svg"
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

        <CardStatistik />
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

          <CardBenefit />
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
                key={data.aplikasiID}
                id={data.aplikasiID}
                nama={data.nama}
                harga={data.harga}
                deskripsi={data.deskripsi}
                image={imageURL + data.image || null}
                onPesan={() => handlePesan(data.aplikasiID)}
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

      <CardBerlangganan />
    </MainLayout>
  );
};

export default Dashboard;
