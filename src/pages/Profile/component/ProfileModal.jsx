import Modal from "react-modal";
import CustomButton from "@/components/Button";

export const ProfileModal = ({
  modalIsOpen,
  toggleModal,
  handleSave,
  saldo,
  setSaldo,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      className="flex flex-col justify-center items-center h-screen"
      onRequestClose={toggleModal}
    >
      <div className="modal-content sm:w-full md:w-[30rem] bg-white rounded-lg shadow-xl px-8 sm:px-16 py-8 sm:py-16 relative">
        <h2 className="text-3xl font-bold leading-tight tracking-wide mb-4">
          Top Up Saldo
        </h2>
        <button onClick={toggleModal} className="absolute top-8 right-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="flex-shrink-0 w-6 h-6"
          >
            <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
          </svg>
        </button>

        <form onSubmit={handleSave} className="flex flex-col">
          <div className="mb-6">
            <label className="text-lg font-semibold text-gray-800">
              Nominal
            </label>
            <input
              type="number"
              placeholder="Nominal"
              value={saldo}
              onChange={(e) => setSaldo(e.target.value)}
              className="mt-4 w-[22rem] px-4 py-2 text-lg text-gray-700 bg-white border border-gray-400 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>

          <CustomButton
            className="bg-gradient-to-r from-primary-dark to-secondary font-bold text-white w-full h-[40px] md:h-12 md:text-base"
            type="submit"
          >
            Save
          </CustomButton>
        </form>
      </div>
    </Modal>
  );
};
