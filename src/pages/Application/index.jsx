import Modal from "react-modal";

import { AdminLayout } from "@/components/Layouts";
import { CustomButton, CustomSearch } from "@/components";
import { imageURL } from "@/Config";

import { IoCamera } from "react-icons/io5";
import CardAplikasi from "./component/CardAplikasi";
import { useAplikasiHooks } from "./hook/useApplication";

const Aplikasi = () => {
  const {
    aplikasi,
    search,
    setSearch,
    ModalIsOpen,
    newAplikasi,
    setNewAplikasi,
    action,
    setAplikasiID,
    handleSearch,
    handleAdd,
    handleEdit,
    handleDelete,
    handleSave,
    handleClose,
    handleSelectPhoto,
    handleFileInputChange,
  } = useAplikasiHooks();

  return (
    <AdminLayout>
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-center text-3xl md:text-4xl text-primary-dark font-bold mb-16">
          Aplikasi Panel
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
            className="bg-gradient-to-r from-primary-dark to-secondary font-bold text-white w-full md:w-[220px] h-[40px] md:h-12 md:text-base"
            type="button"
            onClick={() => handleAdd()}
          >
            Tambah
          </CustomButton>
        </div>
      </header>
      {/* End Header */}

      <main className="flex flex-wrap justify-center gap-8">
        {aplikasi && aplikasi.length > 0 ? (
          aplikasi.map((data) => (
            <CardAplikasi
              key={data.aplikasiID}
              nama={data.nama}
              image={data.image}
              harga={data.harga}
              deskripsi={data.deskripsi}
              onEdit={() => {
                handleEdit(data);
                setAplikasiID(data.aplikasiID);
              }}
              onHapus={() => handleDelete(data.aplikasiID)}
            />
          ))
        ) : (
          <div className="w-full h-[280px] rounded-xl shadow bg-slate-50 flex flex-col p-7">
            <div className="flex items-center justify-center h-full">
              <h1 className="text-4xl font-semibold text-center text-gray-500">
                Tidak ada aplikasi yang ditemukan.
              </h1>
            </div>
          </div>
        )}
      </main>

      {/* Modals */}

      <Modal
        isOpen={ModalIsOpen}
        ariaHideApp={false}
        className="flex justify-center items-center h-screen"
        onRequestClose={() => handleClose()}
      >
        <div className="modal-content sm:w-full md:w-[80rem] bg-white rounded-lg shadow-xl px-8 sm:px-16 py-8 sm:py-16 relative">
          <h2 className="text-3xl font-bold leading-tight tracking-wide">
            {action === "add" ? "Tambah Aplikasi" : "Edit Aplikasi"}
          </h2>
          <div>
            <button onClick={() => handleClose()}>
              <a className="absolute top-8 right-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                </svg>
              </a>
            </button>
          </div>

          <form onSubmit={handleSave} className="flex items-center">
            <div className="me-6">
              <label
                htmlFor="fileInput"
                className="text-lg font-semibold text-gray-800"
              >
                Images
              </label>
              <img
                src={
                  newAplikasi.image
                    ? typeof newAplikasi.image === "string"
                      ? imageURL + newAplikasi.image
                      : URL.createObjectURL(newAplikasi.image)
                    : "https://via.placeholder.com/300x300"
                }
                alt={newAplikasi.image}
                className="max-w-xs rounded-md object-contain"
              />
              <button
                type="button"
                onClick={handleSelectPhoto}
                className="w-full whitespace-nowrap py-2 px-4 bg-primary hover:bg-secondary mt-2 flex items-center text-white text-2xl gap-4 rounded-full"
              >
                <IoCamera /> <span className="text-base">Select Photo</span>
              </button>

              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileInputChange}
              />
            </div>

            <div className="flex-col w-full">
              <div className="mb-3">
                <label
                  htmlFor="Nama"
                  className="text-base font-semibold text-gray-800"
                >
                  Nama
                </label>
                <input
                  id="Nama"
                  type="text"
                  className="block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  onChange={(e) =>
                    setNewAplikasi({ ...newAplikasi, nama: e.target.value })
                  }
                  value={newAplikasi.nama}
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="Harga"
                  className="text-base font-semibold text-gray-800"
                >
                  Harga
                </label>
                <input
                  id="Harga"
                  type="number"
                  className="block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  onChange={(e) =>
                    setNewAplikasi({ ...newAplikasi, harga: e.target.value })
                  }
                  value={newAplikasi.harga}
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="Deskripsi"
                  className="text-base font-semibold text-gray-800"
                >
                  Deskripsi
                </label>
                <textarea
                  id="Deskripsi"
                  className="block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 h-24"
                  onChange={(e) =>
                    setNewAplikasi({
                      ...newAplikasi,
                      deskripsi: e.target.value,
                    })
                  }
                  value={newAplikasi.deskripsi}
                  required
                />
              </div>

              <CustomButton
                className="bg-gradient-to-r from-primary-dark to-secondary font-bold text-white w-full md:w-[220px] h-[40px] md:h-12 md:text-base"
                type="submit"
              >
                Save
              </CustomButton>
            </div>
          </form>
        </div>
      </Modal>
    </AdminLayout>
  );
};

export default Aplikasi;
