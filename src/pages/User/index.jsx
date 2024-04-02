import Modal from "react-modal";
import { AdminLayout } from "@/components/Layouts";
import { CustomButton, CustomSearch } from "@/components";
import { useUserData } from "./hook/useUser";

const User = () => {
  const {
    user,
    ModalIsOpen,
    newUser,
    search,
    action,
    setUserID,
    setModalIsOpen,
    setNewUser,
    setSearch,
    handleSearch,
    handleAdd,
    handleEdit,
    handleDelete,
    handleSave,
    handleCloseModal,
  } = useUserData();

  return (
    <AdminLayout>
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-center text-3xl md:text-4xl text-primary-dark font-bold mb-16">
          User Panel
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
            className="bg-gradient-to-r from-primary-dark to-secondary text-white w-full md:w-[220px] h-[40px] md:h-12 md:text-base"
            type="button"
            onClick={() => handleAdd()}
          >
            Tambah
          </CustomButton>
        </div>
      </header>
      {/* End Header */}

      <table className="w-full my-5 border-collapse overflow-scroll md:overflow-hidden rounded-2xl shadow-lg">
        <thead className="bg-secondary w-full text-lg text-white">
          <tr>
            <th className="p-3">No</th>
            <th className="py-3">Nama</th>
            <th className="py-3">role</th>
            <th className="py-3">Username</th>
            <th className="py-3">Saldo</th>
            <th className="py-3">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300 text-base">
          {user && user.length > 0 ? (
            user?.map((item, index) => (
              <tr key={index} className="hover:bg-slate-50">
                <th className="p-3">{index + 1}</th>
                <td align="center">
                  <p className="text-lg">{item.nama}</p>
                </td>
                <td align="center">
                  <p className="text-lg">{item.role}</p>
                </td>
                <td align="center">
                  <p className="text-lg">{item.username}</p>
                </td>
                <td align="center">
                  <p className="text-lg">{item.saldo}</p>
                </td>
                <td align="center" className="h-full w-96 justify-center">
                  <div className="flex justify-center items-center gap-2">
                    <CustomButton
                      className="bg-primary rounded-full hover:bg-secondary text-white w-28 my-2"
                      onClick={() => {
                        handleEdit(item);
                        setUserID(item.userID);
                      }}
                    >
                      Edit
                    </CustomButton>
                    {item.role === "admin" ? (
                      ""
                    ) : (
                      <CustomButton
                        className="bg-red-400 rounded-full hover:bg-red-500 text-white w-28"
                        onClick={() => handleDelete(item.userID)}
                      >
                        Delete
                      </CustomButton>
                    )}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-60 h-60">
                    <img
                      src="/notFound.svg"
                      alt="troly kosong"
                      className="mt-6"
                    />
                  </div>
                  <h1 className="pb-6 text-xl">
                    <strong>Oooops!</strong> Sepertinya tidak ada user yang
                    ditemukan
                  </h1>
                </div>
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
                value={newUser.nama}
                onChange={(e) =>
                  setNewUser({ ...newUser, nama: e.target.value })
                }
                className="w-[22rem] px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mb-3">
              <label className="text-base font-semibold text-gray-800">
                Role
              </label>
              <select
                className="w-[22rem] px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                value={newUser.role}
                onChange={(e) =>
                  setNewUser({ ...newUser, role: e.target.value })
                }
              >
                <option value="" disabled hidden>
                  ~Choose~
                </option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="text-base font-semibold text-gray-800">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                value={newUser.username}
                onChange={(e) =>
                  setNewUser({ ...newUser, username: e.target.value })
                }
                className="w-[22rem] px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mb-3">
              <label className="text-base font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
                className="w-[22rem] px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mb-3">
              <label className="text-base font-semibold text-gray-800">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setNewUser({ ...newUser, confirmPassword: e.target.value })
                }
                className="w-[22rem] px-4 py-2 text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <CustomButton
              className="bg-gradient-to-r from-primary-dark to-secondary font-bold text-white w-full h-[40px] md:h-12"
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

export default User;
