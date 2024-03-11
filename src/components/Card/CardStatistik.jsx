import React from "react";

const CardStatistik = ({ data }) => {
  return (
    <div
      key={data.id}
      className="w-full md:w-[275px] h-[300px] flex-shrink-0 flex flex-col justify-center items-center bg-white rounded-2xl shadow"
    >
      <div className="w-[80px] h-[80px] rounded-full bg-primary flex items-center justify-center mb-4">
        {data.icon}
      </div>
      <span className="text-2xl font-semibold mb-4 text-primary-dark">
        {data.value}
      </span>
      <h1 className="text-4xl font-extrabold text-primary">{data.title}</h1>
    </div>
  );
};

export default CardStatistik;
