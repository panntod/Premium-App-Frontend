import React from "react";

import { CustomButton, Navbar } from "../../components";
import mainPhoto from "../../assets/mainPhoto.svg";

const Dashboard = () => {
  return (
    <Navbar>
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
          <img
            src={mainPhoto}
            alt="main photo"
          />
        </div>
      </main>
    </Navbar>
  );
};

export default Dashboard;
