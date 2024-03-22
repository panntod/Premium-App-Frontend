import CustomButton from "../Button";
import { imageURL } from "../../Config";

const CardAplikasi = (props) => {
  return (
    <div
      key={props.id}
      className="w-full md:w-[605px] h-full rounded-xl shadow bg-white flex flex-col p-7 mb-8"
    >
      <section className="flex flex-col md:flex-row mb-auto">
        {/* Image */}
        <div className="w-28 h-28 rounded-lg overflow-hidden mr-4">
          <img
            src={imageURL + props.image}
            alt={props.nama}
            className="object-contain w-full h-full"
          />
        </div>
        {/* End Image */}

        {/* Section Desc */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-primary-dark mb-2">
            {props.nama}
          </h1>
          <h5 className="text-base font-semibold md:text-lg mb-2">
            Tier: <span className="font-normal">{props.tier}</span>
          </h5>
          <h5 className="text-lg font-semibold md:text-lg mb-2">
            Harga: <span className="font-normal">Rp.{props.harga}</span>
          </h5>
          <h5 className="text-lg font-normal md:text-lg">{props.deskripsi}</h5>
        </div>
        {/* End Section Desc */}
      </section>

      <div className="flex gap-4 pt-6">
        <CustomButton
          className="bg-primary hover:bg-secondary text-white w-1/2 md:text-base"
          type="button"
          onClick={props.onEdit}
        >
          Edit
        </CustomButton>

        <CustomButton
          className="bg-red-400 hover:bg-red-500 text-white w-1/2 md:text-base"
          type="button"
          onClick={props.onHapus}
        >
          Hapus
        </CustomButton>
      </div>
    </div>
  );
};

export default CardAplikasi;
