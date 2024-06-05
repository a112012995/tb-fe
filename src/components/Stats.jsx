import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadData from "../components/UI/LoadData";
import { getAllPasienMl } from "../store/actions/predict";

const Stats = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPasienMl());
  }, [dispatch]);

  const { totalData, data, loading } = useSelector(
    (state) => state.pasienReducers
  );
  const { pasienMlAll } = useSelector((state) => state.pasienMlReducers);
  // console.log(pasienMlAll);
  // const statData = (val) => {
  //   const newData = data.filter((data) => data.hasil_akhir === `${val}`);
  //   return newData.length;
  // };

  return (
    <>
      {loading && <LoadData />}
      {pasienMlAll && (
      <>
        <div
          className="stats stats-vertical lg:stats-horizontal bg-[#4F709C]"
          id="stats"
        >
          <div className="stat">
            <div className="flex justify-center">
              <div className="flex-col text-center pt-2">
                <div className="stat-value text-white min-[240px]:text-3xl md:text-4xl">
                  1,653,967
                </div>
                <div className="stat-title text-white text-md">
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
                <div className="stat-value text-white min-[240px]:text-3xl md:text-4xl">
                  {pasienMlAll.jumlah_kasus}
                </div>
                <div className="stat-title text-white text-md">Kasus Aktif</div>
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
                <div className="stat-value text-white min-[240px]:text-3xl md:text-4xl">
                  1,520
                </div>
                <div className="stat-title text-white text-md">Kasus Baru</div>
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
                <div className="stat-value text-white min-[240px]:text-3xl md:text-4xl">
                  {pasienMlAll.sembuh}
                </div>
                <div className="stat-title text-white text-md">
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
                <div className="stat-value text-white min-[240px]:text-3xl md:text-4xl">
                  {pasienMlAll.meninggal}
                </div>
                <div className="stat-title text-white text-md">
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
                <div className="stat-value text-white min-[240px]:text-3xl md:text-4xl">
                  {pasienMlAll.gagal}
                </div>
                <div className="stat-title text-white text-md">
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
