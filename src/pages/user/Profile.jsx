import { useEffect, useState } from "react";
import Modal from "react-modal";
import { CustomButton } from "../../components";
import { ToastContainer, toast } from "react-toastify";

import { getMe, topUp } from "../../utils/User";

import { IoPersonCircleSharp } from "react-icons/io5";
import ProfileLayout from "../../components/Layouts/ProfileLayout";

const Profile = () => {
  const [user, setUser] = useState({});
  const [saldo, setSaldo] = useState(0);
  const [ModalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchMe();
  }, []);

  const fetchMe = async () => {
    const result = await getMe();
    setUser(result);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const response = await topUp(saldo);
    console.log(response);
    if (response.success === true) {
      toast.success(response.message, { autoClose: 2000 });
    } else {
      const errorMessage = response.data.message
        ? response.data.message
        : ["Terjadi kesalahan pada server"];

      toast.error(errorMessage, { autoClose: 2000 });
    }

    setModalIsOpen(false);
    fetchMe();
  };

  return (
    <ProfileLayout>
      <ToastContainer />
      <section className="w-full md:w-[710px] md:h-[300px] bg-white shadow-xl rounded-xl py-12 px-10">
        <div className="flex flex-col md:flex-row pt-24 md:pt-0">
          <IoPersonCircleSharp className="text-[114px] text-secondary me-6" />

          <div className="flex gap-6">
            <div>
              <h5 className="text-gray-400 text-xl font-medium leading-normal">
                Username
              </h5>
              <h5 className="text-gray-400 text-xl font-medium leading-normal">
                Nama
              </h5>
              <h5 className="text-gray-400 text-xl font-medium leading-normal">
                Role
              </h5>
              <h5 className="text-gray-400 text-xl font-medium leading-normal">
                Saldo
              </h5>
            </div>
            <div>
              <h5 className="text-primary text-lg font-normal leading-normal mb-1">
                {user.username}
              </h5>
              <h5 className="text-primary text-lg font-normal leading-normal mb-1">
                {user.nama}
              </h5>
              <h5 className="text-primary text-lg font-normal leading-normal mb-1">
                {user.role}
              </h5>
              <h5 className="text-primary text-lg font-normal leading-normal">
                {user.saldo}
              </h5>
            </div>
          </div>
        </div>
        <CustomButton
          className="mt-14 w-full bg-gradient-to-r from-primary-dark to-secondary text-white md:text-base"
          type="button"
          onClick={() => setModalIsOpen(true)}
        >
          Top Up
        </CustomButton>
      </section>

      {/* Modal */}
      <Modal
        isOpen={ModalIsOpen}
        ariaHideApp={false}
        className="flex flex-col justify-center items-center h-screen"
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="modal-content sm:w-full md:w-[30rem] bg-white rounded-lg shadow-xl px-8 sm:px-16 py-8 sm:py-16 relative">
          <h2 className="text-3xl font-bold leading-tight tracking-wide mb-4">
            Top Up Saldo
          </h2>
          <button
            onClick={() => setModalIsOpen(false)}
            className="absolute top-8 right-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="flex-shrink-0 w-6 h-6"
            >
              <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
            </svg>
          </button>

          <form onSubmit={(e) => handleSave(e)} className="flex flex-col">
            <div className="mb-6">
              <label className="text-lg font-semibold text-gray-800">
                Nominal
              </label>
              <input
                type="number"
                placeholder="Nominal"
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
    </ProfileLayout>
  );
};

export default Profile;
