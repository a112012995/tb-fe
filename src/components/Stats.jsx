import React from "react";
import {  useSelector } from "react-redux";
import LoadData from "../components/UI/LoadData";

const Stats = () => {

  const { totalData, data, loading } = useSelector(
    (state) => state.pasienReducers
  );
  // console.log(data);
  const statData = (val) => {
    const newData = data.filter((data) => data.hasil_akhir === `${val}`)
    return(newData.length)
  }

  return (
    <>
      {loading && <LoadData />}
      {totalData && (
        <>
          <div
            className="stats stats-vertical lg:stats-horizontal bg-[#4F709C]"
            id="stats"
          >
            <div className="stat">
              <div className="flex justify-center">
                <div className="flex-col text-center pt-2">
                  <div className="stat-value text-white min-[240px]:text-4xl md:text-5xl">
                    1,650,000
                  </div>
                  <div className="stat-title text-white text-lg">
                    Jumlah Penduduk
                  </div>
                </div>
                <div className="text-warning min-[240px]:hidden md:flex">
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
              <div className="flex justify-center">
                <div className="flex-col text-center pt-2">
                  <div className="stat-value text-white min-[240px]:text-4xl md:text-5xl">
                    {new Intl.NumberFormat().format(totalData)}
                  </div>
                  <div className="stat-title text-white text-lg">
                    Kasus Aktif
                  </div>
                </div>
                <div className="text-warning min-[240px]:hidden md:flex">
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
              <div className="flex justify-center">
                <div className="flex-col text-center pt-2">
                  <div className="stat-value text-white min-[240px]:text-4xl md:text-5xl">
                    {new Intl.NumberFormat().format(statData("Sembuh"))}
                  </div>
                  <div className="stat-title text-white text-lg">
                    Pasien Sembuh
                  </div>
                </div>
                <div className="text-warning min-[240px]:hidden md:flex">
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
              <div className="flex justify-center">
                <div className="flex-col text-center pt-2">
                  <div className="stat-value text-white min-[240px]:text-4xl md:text-5xl">
                  {new Intl.NumberFormat().format(statData("Meninggal"))}
                  </div>
                  <div className="stat-title text-white text-lg">
                    Pasien Meninggal
                  </div>
                </div>
                <div className="text-warning min-[240px]:hidden md:flex">
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
              <div className="flex justify-center">
                <div className="flex-col text-center pt-2">
                  <div className="stat-value text-white min-[240px]:text-4xl md:text-5xl">
                  {new Intl.NumberFormat().format(statData(`Gagal`))}
                  </div>
                  <div className="stat-title text-white text-lg">
                    Pengobatan Gagal
                  </div>
                </div>
                <div className="text-warning min-[240px]:hidden md:flex">
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
        </>
      )}
    </>
  );
};

export default Stats;
