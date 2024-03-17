import { useEffect, useState } from "react";
import Modal from "react-modal";

import { AdminLayout } from "../../components/Layouts";
import { ToastContainer, toast } from "react-toastify";
import { CustomButton, CustomSearch } from "../../components";

import { initialNewTierState } from "../../Config";
import {
  addTier,
  deleteTier,
  fetchAllTiers,
  findTier,
  updateTier,
} from "../../utils/Tier";

const Tier = () => {
  const [tier, setTier] = useState([]);
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [newTier, setNewTier] = useState(initialNewTierState);
  const [search, setSearch] = useState("");
  const [tierID, setTierID] = useState("");
  const [action, setAction] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const dataTier = await fetchAllTiers();
    setTier(dataTier);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const dataTier = await findTier(search);
      setTier(dataTier);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdd = () => {
    setModalIsOpen(true);
    setAction("add");
  };

  const handleEdit = (item) => {
    setModalIsOpen(true);
    setAction("edit");
    setNewTier({
      nama: item.nama,
      harga: item.harga,
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah kamu yakin ingin menghapus data tier ini?")) {
      const response = await deleteTier(id);
      toast.success(response.message, { autoClose: 2000 });
      fetchData();
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (action === "add") {
      const response = await addTier(newTier);
      if (response.success === true) {
        toast.success(response.message, { autoClose: 2000 });
      } else {
        const errorMessage = response.data.errors
          ? response.data.errors
          : ["Terjadi kesalahan pada server"];

        errorMessage.forEach((message) => {
          toast.error(message, { autoClose: 2000 });
        });
      }
    } else if (action === "edit") {
      const response = await updateTier(tierID, newTier);

      if (response.success === true) {
        toast.success(response.message, { autoClose: 2000 });
      } else {
        const errorMessage = response.data.errors
          ? response.data.errors
          : ["Terjadi kesalahan pada server"];

        errorMessage.forEach((message) => {
          toast.error(message, { autoClose: 2000 });
        });
      }
    }

    setModalIsOpen(false);
    fetchData();
    setNewTier(initialNewTierState);
  };

  const handleCloseModal = () => {
    setAction("");
    setTierID("");
    setNewTier(initialNewTierState);
    setModalIsOpen(false);
  };

  return (
    <AdminLayout>
      <ToastContainer />
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-center text-3xl md:text-4xl text-primary-dark font-bold mb-16">
          Tier Panel
        </h1>
        <div className="flex flex-col md:flex-row justify-around">
          {/* Search */}
          <form
            className="flex items-center text-gray-100 px-4 w-full md:w-[500px] h-[40px] rounded-md border-2 border-primary bg-white p-4 mb-4"
            onSubmit={handleSearch}
          >
            <CustomSearch search={search} setSearch={setSearch} />
          </form>
          {/* End Search */}

          <CustomButton
            className="bg-gradient-to-r from-primary-dark to-secondary font-bold text-white w-full md:w-[220px] h-[40px] md:h-12 whitespace-nowrap"
            type="button"
            onClick={() => handleAdd()}
          >
            Tambah
          </CustomButton>
        </div>
      </header>
      {/* End Header */}

      <table className="mx-auto w-[50rem] border-collapse overflow-scroll md:overflow-hidden rounded-2xl shadow-lg">
        <thead className="bg-secondary w-full text-lg text-white">
          <tr>
            <th className="p-3">No</th>
            <th className="py-3">Nama</th>
            <th className="py-3">Harga</th>
            <th className="py-3">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300 text-base">
          {tier && tier.length > 0 ? (
            tier.map((item, index) => (
              <tr key={index} className="hover:bg-slate-50">
                <th className="p-3">{index + 1}</th>
                <td align="center">{item.nama}</td>
                <td align="center">{item.harga}</td>
                <td align="center" className="h-full justify-center">
                  <div className="flex justify-center items-center gap-2">
                    <CustomButton
                      className="bg-primary rounded-full hover:bg-secondary font-medium text-white w-28 my-2"
                      onClick={() => {
                        handleEdit(item);
                        setTierID(item.tierID);
                      }}
                    >
                      Edit
                    </CustomButton>
                    <CustomButton
                      className="bg-red-400 rounded-full hover:bg-red-500 font-medium text-white w-28"
                      onClick={() => handleDelete(item.tierID)}
                    >
                      Delete
                    </CustomButton>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-5 text-xl font-bold">
                Tier tidak ditemukan
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal */}

      <Modal
        isOpen={ModalIsOpen}
        ariaHideApp={false}
        className="flex flex-col justify-center items-center h-screen"
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="modal-content sm:w-full md:w-[30rem] bg-white rounded-lg shadow-xl px-8 sm:px-16 py-8 sm:py-16 relative">
          <h2 className="text-3xl font-bold leading-tight tracking-wide">
            {action === "add" ? "Tambah User" : "Edit User"}
          </h2>
          <button
            onClick={() => handleCloseModal()}
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
            <div className="mb-3">
              <label className="text-base font-semibold text-gray-800">
                Nama
              </label>
              <input
                type="text"
                placeholder="Nama"
                value={newTier.nama}
                onChange={(e) =>
                  setNewTier({ ...newTier, nama: e.target.value })
                }
                className="w-[22rem] px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>

            <div className="mb-3">
              <label className="text-base font-semibold text-gray-800">
                Harga
              </label>
              <input
                type="number"
                placeholder="Harga"
                value={newTier.harga}
                onChange={(e) =>
                  setNewTier({ ...newTier, harga: e.target.value })
                }
                className="w-[22rem] px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>

            <CustomButton
              className="bg-gradient-to-r from-primary-dark to-secondary font-bold text-white w-full h-[40px] md:h-12 whitespace-nowrap"
              type="submit"
            >
              Save
            </CustomButton>
          </form>
        </div>
      </Modal>
    </AdminLayout>
  );
};

export default Tier;
