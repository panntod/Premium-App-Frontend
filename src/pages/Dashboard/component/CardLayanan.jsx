import CustomButton from "@/components/Button";

export const CardLayanan = ({ id, image, nama, harga, deskripsi, onPesan }) => {
  return (
    <div
      key={id}
      className="w-full md:w-[370px] h-[420px] rounded-xl shadow bg-white flex flex-col p-7"
    >
      <div className="flex flex-col">
        <div className="w-20 h-20 rounded-lg overflow-hidden mr-4">
          <img
            src={image}
            alt={nama}
            className="object-contain w-full h-full"
          />
        </div>
        <h1 className="text-2xl font-semibold text-primary-dark">{nama}</h1>
        <h2 className="text-lg font-semibold md:text-2xl md:font-bold text-primary mb-2">
          Rp.{harga} <span className="text-gray-400 text-base">/bulan</span>
        </h2>
        <p className="text-lg text-gray-500">{deskripsi}</p>
      </div>
      <CustomButton
        className="bg-gradient-to-r from-primary-dark to-secondary text-white w-full h-12 mt-auto md:text-base"
        type="button"
        onClick={onPesan}
      >
        Pesan
      </CustomButton>
    </div>
  );
};
