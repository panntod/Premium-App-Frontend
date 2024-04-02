import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  addUser,
  deleteUser,
  fetchAllUsers,
  findUser,
  updateUser,
} from "@/utils/User";
import { initialNewUserState } from "@/Config";
import { handleApiResponse } from "@/utils/helpers/Response";

export const useUserData = () => {
  const [user, setUser] = useState([]);
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [newUser, setNewUser] = useState(initialNewUserState);
  const [search, setSearch] = useState("");
  const [userID, setUserID] = useState("");
  const [action, setAction] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const dataUser = await fetchAllUsers();
    setUser(dataUser);
  };

  const handleSearch = async (searchTerm) => {
    try {
      const result = await findUser(searchTerm);
      setUser(result);
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
    setNewUser({
      username: "",
      nama: item.nama,
      role: item.role,
      password: "",
      confirmPassword: "",
    });
    setUserID(item.userID);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah kamu yakin ingin menghapus data user ini?")) {
      const response = await deleteUser(id);
      if (response.success == true) {
        toast.success(response.message, {
          autoClose: 3000,
        });
      } else {
        if (response.data.errors.name == "SequelizeForeignKeyConstraintError")
          toast.info("Terdapat transaksi menggunakan data ini", {
            autoClose: 3000,
          });
      }
      fetchData();
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    let response;
    if (action === "add") {
      response = await addUser(newUser);
    } else if (action === "edit") {
      response = await updateUser(userID, newUser);
    }

    handleApiResponse(response, () => {
      setNewUser(initialNewUserState);
      setModalIsOpen(false);
      fetchData();
    });
  };

  const handleCloseModal = () => {
    setAction("");
    setUserID("");
    setNewUser(initialNewUserState);
    setModalIsOpen(false);
  };

  return {
    user,
    ModalIsOpen,
    newUser,
    search,
    userID,
    action,
    setModalIsOpen,
    setNewUser,
    setSearch,
    setUserID,
    handleSearch,
    handleAdd,
    handleEdit,
    handleDelete,
    handleSave,
    handleCloseModal,
  };
};
