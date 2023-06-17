import React from "react";
import Map from "../components/Map";
import Card from "../components/Card";
import Header from "../components/Header/Header";
import Navbar from "../components/navbar";
import Stats from "../components/Stats";
import LineGraph from "../components/LineGraph";

const Details = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="bg-blue m-auto items-center justify-center w-screen h-screen">
        {/* Navbar */}
        <div className="px-20 pt-5 pb-9 bg-[#213555] text-white">
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
        <div className="pt-16 px-40">
          <div>
            <div className="text-4xl font-bold text">Ngaliyan</div>
          </div>
        </div>
        {/* Stats */}
        <div className="flex mt-12 space-x-8 justify-center items-center flex-col">
          <div className="rounded-3xl w-fit bg-[#ffffff] drop-shadow-lg">
            <div className="flex pb-4 pt-3 px-10 flex-col">
              <div>
                <div className="stats bg-[#ffffff]">
                  <div className="stat">
                    <div className="flex">
                      <div className="flex-col text-center pt-2">
                        <div className="stat-value text-black text-5xl">969.000</div>
                        <div className="stat-title text-black text-lg">Orang dengan TBC</div>
                      </div>
                      <div className="text-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="stat">
                    <div className="flex">
                      <div className="flex-col text-center pt-2">
                        <div className="stat-value text-black text-5xl">28.000</div>
                        <div className="stat-title text-black text-lg">Orang dengan TBC Resistan Obat</div>
                      </div>
                      <div className="text-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="stat">
                    <div className="flex">
                      <div className="flex-col text-center pt-2">
                        <div className="stat-value text-black text-5xl">144.000</div>
                        <div className="stat-title text-black text-lg">Kematian Akibat TBC</div>
                      </div>
                      <div className="text-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="stat">
                    <div className="flex">
                      <div className="flex-col text-center pt-2">
                        <div className="stat-value text-black text-5xl">86</div>
                        <div className="stat-title text-black text-lg">% Keberhasilan Pengobatan</div>
                      </div>
                      <div className="text-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex-1">
            <LineGraph />
          </div>
          <div className="flex">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Dropdown button{" "}
              <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Earnings
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
