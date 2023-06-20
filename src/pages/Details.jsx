import React, { useEffect } from "react";
import LineGraph from "../components/LineGraph";
import DropdownMenu from "../components/DropdownMenu";
import DropdownMenu1 from "../components/DropdownMenu1";
import OrderTerms from "../components/Accordion";
import Footer from "../components/Footer";

const Details = () => {
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
            <a href="#" className="text-2xl font-semibold scroll-smooth">
              Tentang
            </a>
            <a href="#" className="text-2xl font-semibold scroll-smooth">
              Peta
            </a>
          </div>
        </div>
      </div>

      {/* Daerah */}
      <div className="py-12 px-40">
        <div>
          <div className="text-4xl font-bold text-black">
            Detail Daerah {"Ngaliyan"}
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
                      <div className="stat-value text-black text-5xl">
                        969.000
                      </div>
                      <div className="stat-title text-black text-lg">
                        Orang dengan TBC
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
                      <div className="stat-value text-black text-5xl">
                        969.000
                      </div>
                      <div className="stat-title text-black text-lg">
                        Orang dengan TBC
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
                      <div className="stat-value text-black text-5xl">
                        969.000
                      </div>
                      <div className="stat-title text-black text-lg">
                        Orang dengan TBC
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
                      <div className="stat-value text-black text-5xl">
                        969.000
                      </div>
                      <div className="stat-title text-black text-lg">
                        Orang dengan TBC
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

      {/* Chart */}
      <div className="flex space-x-8 justify-center items-center flex-col">
        <div className="flex my-12">
          {/* Chart */}
          <div className="flex-2">
            <LineGraph />
          </div>
          {/* Filter */}
          <div className="bg-primary-content flex-1">
            <div className="text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100" id="signal"><path d="M58 38H42c-1.1 0-2 .9-2 2v40c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V40c0-1.1-.9-2-2-2zm-2 40H44V42h12v36zM32 58H16c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V60c0-1.1-.9-2-2-2zm-2 20H18V62h12v16zm54-60H68c-1.1 0-2 .9-2 2v60c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V20c0-1.1-.9-2-2-2zm-2 60H70V22h12v56z"></path><path fill="#00F" d="M944-1070V614H-840v-1684H944m8-8H-848V622H952v-1700z"></path></svg>
              Grafik
            </div>
            <DropdownMenu />
            <DropdownMenu1 />
          </div>
        </div>
      </div>
      <div >
        <OrderTerms />
      </div>
      <Footer />
      {/* Intervensi */}
    </div>
    
  );
};

export default Details;
