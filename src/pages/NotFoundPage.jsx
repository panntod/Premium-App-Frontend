import { CustomButton } from "../components";
import { handleBackHome } from "@/utils/helpers/Response";

const NotFoundPage = () => {
  const handlePrev = () => {
    window.history.go(-1);
  };
  return (
    <section className="bg-background">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="px-9 py-4 mb-4 text-6xl font-medium  rounded-full text-white bg-primary">
            !
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-primary-dark md:text-3xl">
            Something Missing
          </h1>
          <p className="mt-4 text-gray-400 text-xl mb-8 whitespace-nowrap">
            We can&apos;t seem to find you&apos;re looking
          </p>

          <div className="flex gap-4">
            <CustomButton
              className="flex items-center justify-center gap-x-2 hover:bg-primary-dark hover:text-white bg-white text-primary-dark px-6 py-4 md:text-base"
              onClick={handlePrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              Go Back
            </CustomButton>
            <CustomButton
              className="flex items-center justify-center gap-x-2 hover:bg-primary-dark bg-primary px-6 py-4 md:text-base"
              onClick={handleBackHome}
            >
              Go Home
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
