import CustomButton from "../Button";

const CardLayanan = (props) => {
  return (
    <div
      key={props.id}
      className="w-full md:w-[370px] h-[420px] rounded-xl shadow bg-white flex flex-col p-7"
    >
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <div className="w-20 h-20 rounded-lg overflow-hidden mr-4">
            <img
              src={props.image}
              alt={props.nama}
              className="object-contain w-full h-full"
            />
          </div>
          <h1 className="text-2xl font-semibold text-primary-dark">
            {props.nama}
          </h1>
        </div>
        <span className="text-base font-semibold md:text-lg md:font-bold text-primary mb-2">
          {props.tier}
        </span>
        <h2 className="text-lg font-semibold md:text-2xl md:font-bold text-primary mb-2">
          Rp.{props.harga}{" "}
          <span className="text-gray-400 text-base">/bulan</span>
        </h2>
        <p className="text-lg ">{props.deskripsi}</p>
      </div>
      <CustomButton
        className="bg-gradient-to-r from-primary-dark to-secondary text-white w-full h-12 mt-auto md:text-base"
        type="button"
        onClick={props.onPesan}
      >
        Pesan
      </CustomButton>
    </div>
  );
};

export default CardLayanan;
