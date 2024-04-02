import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { initialNewAplikasiState } from "@/Config";
import {
  addApp,
  deleteApp,
  fetchAllApp,
  findApp,
  updateApp,
} from "@/utils/Aplikasi";
import { handleApiResponse } from "@/utils/helpers/Response";

export const useAplikasiHooks = () => {
  const [search, setSearch] = useState("");
  const [aplikasi, setAplikasi] = useState([]);
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [newAplikasi, setNewAplikasi] = useState(initialNewAplikasiState);
  const [aplikasiID, setAplikasiID] = useState("");
  const [action, setAction] = useState("");

  useEffect(() => {
    fetchApp();
  }, []);

  const fetchApp = async () => {
    const dataApp = await fetchAllApp();
    setAplikasi(dataApp);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const result = await findApp(search);
      setAplikasi(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAdd = () => {
    setAction("add");
    setNewAplikasi(initialNewAplikasiState);
    setModalIsOpen(true);
  };

  const handleEdit = (item) => {
    setAction("edit");
    setModalIsOpen(true);
    setNewAplikasi({
      nama: item.nama,
      harga: item.harga,
      deskripsi: item.deskripsi,
      image: item.image,
    });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah kamu yakin ingin menghapus aplikasi ini?")) {
      const response = await deleteApp(id);
      if (response.success == true) {
        toast.success(response.message, {
          autoClose: 3000,
        });
      } else {
        if (response.data.errors.name == "SequelizeForeignKeyConstraintError")
          toast.info("Terdapat transaksi menggunakan data ini", {
            autoClose: 3000,
          });
        else {
          toast.error("Terjadi kesalahan pada server. Silakan coba lagi.", {
            autoClose: 3000,
          });
        }
      }

      fetchApp();
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("nama", newAplikasi.nama);
    data.append("harga", newAplikasi.harga);
    data.append("deskripsi", newAplikasi.deskripsi);
    data.append("image", newAplikasi.image);

    let response;
    if (action === "add") {
      response = await addApp(data);
    } else if (action === "edit") {
      response = await updateApp(aplikasiID, data);
    }

    handleApiResponse(response, () => {
      setModalIsOpen(false);
      setNewAplikasi(initialNewAplikasiState);
      fetchApp();
    });
  };

  const handleClose = () => {
    setAction("");
    setModalIsOpen(false);
  };

  const handleSelectPhoto = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileInputChange = (e) => {
    setNewAplikasi({ ...newAplikasi, image: e.target.files[0] });
  };

  return {
    search,
    setSearch,
    aplikasi,
    setAplikasi,
    ModalIsOpen,
    setModalIsOpen,
    newAplikasi,
    setNewAplikasi,
    aplikasiID,
    setAplikasiID,
    action,
    setAction,
    fetchApp,
    handleSearch,
    handleAdd,
    handleEdit,
    handleDelete,
    handleSave,
    handleClose,
    handleSelectPhoto,
    handleFileInputChange,
  };
};
