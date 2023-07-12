import React from "react";

const Stats = () => {
  return (
    <div className="stats bg-[#4F709C]" id="stats">
      <div className="stat">
        <div className="flex">
          <div className="flex-col text-center pt-2">
            <div className="stat-value text-white text-5xl">1.650.000</div>
            <div className="stat-title text-white text-lg">
              Jumlah Penduduk
            </div>
          </div>
          <div className="text-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="stat">
        <div className="flex">
          <div className="flex-col text-center pt-2">
            <div className="stat-value text-white text-5xl">28.000</div>
            <div className="stat-title text-white text-lg">
              Pasien TBC Kota Semarang
            </div>
          </div>
          <div className="text-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="stat">
        <div className="flex">
          <div className="flex-col text-center pt-2">
            <div className="stat-value text-white text-5xl">144.000</div>
            <div className="stat-title text-white text-lg">
              Kematian Akibat TBC
            </div>
          </div>
          <div className="text-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="stat">
        <div className="flex">
          <div className="flex-col text-center pt-2">
            <div className="stat-value text-white text-5xl">86</div>
            <div className="stat-title text-white text-lg">
              % Keberhasilan Pengobatan
            </div>
          </div>
          <div className="text-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
