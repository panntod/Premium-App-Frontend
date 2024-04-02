import {
  IoBagCheck,
  IoPeople,
  IoStar,
  IoSwapHorizontal,
} from "react-icons/io5";
import { useDashboardData } from "../hook/useDashboard";

export const CardStatistik = () => {
  const { statistik } = useDashboardData();

  const cardData = [
    {
      icon: <IoPeople className="text-white text-4xl" />,
      value: `${statistik.statistikUser}+`,
      title: "Pengguna",
    },
    {
      icon: <IoSwapHorizontal className="text-white text-4xl" />,
      value: `${statistik.statistikTransaksi}+`,
      title: "Transaksi",
    },
    {
      icon: <IoBagCheck className="text-white text-4xl" />,
      value: `${statistik.statistikApp}+`,
      title: "Layanan",
    },
    {
      icon: <IoStar className="text-white text-4xl" />,
      value: "9.5 / 10",
      title: "Kepuasan",
    },
  ];

  return (
    <div className="flex flex-wrap gap-8 md:gap-16">
      {cardData?.map((data, index) => (
        <div
          key={index}
          data-aos="fade-down"
          data-aos-delay={index * 100}
          data-aos-duration="1000"
        >
          <div className="w-[300px] md:w-[275px] h-[300px] flex-shrink-0 flex flex-col justify-center items-center bg-white rounded-2xl shadow">
            <div className="w-[80px] h-[80px] rounded-full bg-primary flex items-center justify-center mb-4">
              {data.icon}
            </div>
            <span className="text-2xl font-semibold mb-4 text-primary-dark">
              {data.value}
            </span>
            <h1 className="text-4xl font-extrabold text-primary">
              {data.title}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};
