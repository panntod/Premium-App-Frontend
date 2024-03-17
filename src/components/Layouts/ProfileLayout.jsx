import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";
import { IoExit } from "react-icons/io5";

const ProfileLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <main className="h-screen bg-background flex flex-col justify-center items-center">
      <div className="w-full md:max-w-[1260px] mx-auto">
        <header className="flex justify-between mb-4 md:mb-12">
          <h1 className="text-primary font-extrabold text-3xl">Lorem</h1>
          <button onClick={handleBack}>
            <IoExit className="text-4xl text-secondary" />
          </button>
        </header>

        <section className="flex flex-col-reverse md:flex-row gap-4 ">
          <Sidebar />
          <div className="mt-20 md:mt-0">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default ProfileLayout;
