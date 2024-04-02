import {
  IoCut,
  IoLockClosed,
  IoCall,
  IoCard,
  IoCheckmark,
  IoNotifications,
} from "react-icons/io5";

const benefits = [
  {
    icon: <IoCut className="text-white text-md md:text-2xl" />,
    title: "Hemat Hingga 70%",
  },
  {
    icon: <IoLockClosed className="text-white text-md md:text-2xl" />,
    title: "Privasi Terjamin",
  },
  {
    icon: <IoCall className="text-white text-md md:text-2xl" />,
    title: "Customer Service Responsif",
  },
  {
    icon: <IoCard className="text-white text-md md:text-2xl" />,
    title: "Beragam Metode Pembayaran",
  },
  {
    icon: <IoCheckmark className="text-white text-md md:text-2xl" />,
    title: "Layanan Legal dan Resmi",
  },
  {
    icon: <IoNotifications className="text-white text-md md:text-2xl" />,
    title: "Pengingat Pembayaran",
  },
];

export const CardBenefit = () => {
  return (
    <div>
      <img
        src="benefitPhoto.svg"
        alt="Benefit Photo"
        className="sm:block md:hidden pb-4"
      />

      <div className="flex">
        <div className="flex-col space-y-12 md:space-y-24">
          {benefits.slice(0, 3).map((benefit, index) => (
            <div
              key={index}
              className="flex justify-start"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-delay="200"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-xl mr-5 flex justify-center items-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold md:text-2xl md:font-bold text-primary w-[140px] md:w-[220px] h-[74px]">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>

        <img
          src="benefitPhoto.svg"
          alt="Benefit Photo"
          className="hidden md:block"
        />

        <div className="flex-col space-y-12 md:space-y-24">
          {benefits.slice(3).map((benefit, index) => (
            <div
              key={index}
              className="flex justify-end"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-delay="200"
            >
              <h3 className="text-xl font-semibold md:text-2xl md:font-bold text-primary text-end w-[140px] md:w-[220px] h-[74px]">
                {benefit.title}
              </h3>
              <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-xl ml-5 flex justify-center items-center">
                {benefit.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
