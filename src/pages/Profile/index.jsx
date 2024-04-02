import { IoPersonCircleSharp } from "react-icons/io5";
import { CustomButton } from "@/components";
import { useProfileData } from "./hook/useProfile";
import { ProfileModal } from "./component/ProfileModal";
import ProfileLayout from "@/components/Layouts/ProfileLayout";

const Profile = () => {
  const { user, modalIsOpen, saldo, setSaldo, handleSave, toggleModal } =
    useProfileData();

  return (
    <ProfileLayout>
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
          onClick={toggleModal}
        >
          Top Up
        </CustomButton>
      </section>

      <ProfileModal
        modalIsOpen={modalIsOpen}
        toggleModal={toggleModal}
        handleSave={handleSave}
        saldo={saldo}
        setSaldo={setSaldo}
      />
    </ProfileLayout>
  );
};

export default Profile;
