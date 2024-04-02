import { useEffect, useState } from "react";
import { getMe, topUp } from "@/utils/User";
import { handleApiResponse } from "@/utils/helpers/Response";

export const useProfileData = () => {
  const [user, setUser] = useState({});
  const [saldo, setSaldo] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
    handleApiResponse(response, () => {
      setSaldo(0);
      toggleModal();
      fetchMe();
    });
  };

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return {
    user,
    saldo,
    modalIsOpen,
    setSaldo,
    handleSave,
    toggleModal,
  };
};
