const cardData = [
  {
    icon: "pesanIcon.svg",
    text: "Pesan Layanan",
  },
  {
    icon: "pembayaranIcon.svg",
    text: "Pembayaran",
  },
  {
    icon: "prosesIcon.svg",
    text: "Menunggu Proses",
  },
  {
    icon: "pesananIcon.svg",
    text: "Pesanan Diterima",
  },
  {
    icon: "selesaiIcon.svg",
    text: "Selesai Layanan",
  },
];

export const CardBerlangganan = () => {
  return (
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
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-full md:w-48 h-56 text-center mb-8 md:mb-0"
          >
            <img src={card.icon} alt="icon" className="mx-auto mb-2" />
            <h3 className="text-primary text-2xl font-semibold">{card.text}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
