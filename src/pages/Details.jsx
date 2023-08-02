import React, { useEffect } from "react";
import OrderTerms from "../components/Accordion";
import Footer from "../components/Footer";
import TableDet from "../components/TabelDet";
import { useLocation, useNavigate } from "react-router-dom";
import { getLocationById } from "../store/actions/location";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/auth";
import { getPasienByIdKel } from "../store/actions/pasien";

const Details = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const history = useNavigate();
  useEffect(() => {
    dispatch(getLocationById(state.areaId));
    dispatch(getPasienByIdKel(state.areaId));
  }, [dispatch, state]);
  const { dataById, totalPas } = useSelector((state) => state.locationReducers);
  const { dataByIdKel } = useSelector((state) => state.pasienReducers);
  console.log(dataByIdKel)
  let sembuh = {};
  let gagal = {}
  let meninggal ={}
  if (dataByIdKel) {
    sembuh = dataByIdKel.filter(
      (data) => data.hasil_akhir === "Sembuh"
    );
    gagal = dataByIdKel.filter(
      (data) => data.hasil_akhir === "Gagal"
    );
    meninggal = dataByIdKel.filter(
      (data) => data.hasil_akhir === "Meninggal"
    );
  }
  return (
    <div className="bg-[#F6F6F6] m-auto items-center justify-center max-w-screen min-h-screen">
      {/* Navbar */}
      <div className="px-20 pt-12 pb-9 bg-[#213555] text-white">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="flex items-center">
              <div>
                <img src="/logo_dkk.png" alt="logo" className="w-28 h-24" />
              </div>
              <div className="flex-col">
                <div className="font-semibold text-2xl">SDKPT</div>
                <div className="font-semibold text-2xl">Kota Semarang</div>
              </div>
            </div>
          </div>
          <div className="navbar-end gap-12">
            <a
              href="/dashboard"
              className="text-2xl font-semibold scroll-smooth"
            >
              Home
            </a>
            <button>
              <div
                className="text-2xl font-semibold scroll-smooth"
                onClick={() => dispatch(logout(history))}
              >
                Logout
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Daerah */}
      <div className="py-12 px-40">
        <div>
          <div className="text-4xl font-bold text-black">
            Detail Daerah {dataById.nama_kelurahan}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex space-x-8 justify-center items-center flex-col">
        <div className="rounded-3xl w-fit bg-[#FFFFFF] drop-shadow-lg">
          <div className="flex pb-4 pt-3 px-10 flex-col">
            <div>
              <div className="stats bg-[#FFFFFF] ">
                <div className="stat">
                  <div className="flex">
                    <div className="flex-col text-center  pt-2">
                      <div className="stat-value text-black font-bold text-5xl">
                        {totalPas}
                      </div>
                      <div className="stat-title text-black text-lg">
                        Jumlah Kasus
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
                    <div className="flex-col text-center  pt-2">
                      <div className="stat-value text-black font-bold text-5xl">
                        {sembuh.length}
                      </div>
                      <div className="stat-title text-black text-lg">
                        Pasien Sembuh
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
                    <div className="flex-col text-center  pt-2">
                      <div className="stat-value text-black font-bold text-5xl">
                        {gagal.length}
                      </div>
                      <div className="stat-title text-black text-lg">
                        Pengobatan Gagal
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
                    <div className="flex-col text-center  pt-2">
                      <div className="stat-value text-black font-bold text-5xl">
                        {meninggal.length}
                      </div>
                      <div className="stat-title text-black text-lg">
                        Pasien Meninggal
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
            </div>
          </div>
        </div>
      </div>

      <TableDet />
      <Footer />
      {/* Intervensi */}
    </div>
  );
};

export default Details;
