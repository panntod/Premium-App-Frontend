import CustomButton from "@/components/Button";

const durationOptions = [
  { value: 1, label: "1 Bulan" },
  { value: 3, label: "3 Bulan" },
  { value: 6, label: "6 Bulan" },
  { value: 8, label: "8 Bulan" },
];

export const DurationSelector = ({
  duration,
  setDuration,
  total,
  handleOrder,
  loading,
}) => {
  return (
    <section className="w-full md:w-[510px] p-6">
      <div className="p-6 flex flex-col gap-6">
        <h1 className="text-xl font-semibold">Pilih Durasi Langganan</h1>
        <div className="flex flex-col flew gap-4">
          {/* Map through duration options */}
          <div className="flex flex-wrap gap-2">
            {durationOptions.map((option) => (
              <div className="flex items-center w-[200px]" key={option.value}>
                <input
                  type="radio"
                  id={option.value}
                  name="duration"
                  value={option.value}
                  checked={duration === option.value}
                  onChange={() => setDuration(option.value)}
                  className="sr-only"
                />
                <label
                  htmlFor={option.value}
                  className={`flex-1 py-2 rounded-lg text-center cursor-pointer ${
                    duration === option.value
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
          {/* End Mapping */}

          {/* Total Section */}
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Total: </h1>
            <h1 className="text-xl font-bold">Rp {total} </h1>
          </div>
          {/* End Total Section */}

          {/* CustomButton component */}
          <CustomButton
            className="bg-gradient-to-r from-primary-dark to-secondary text-white w-full h-12 mt-auto md:text-base"
            onClick={(e) => handleOrder(e)}
            loading={loading}
          >
            Beli
          </CustomButton>
        </div>
      </div>
    </section>
  );
};
