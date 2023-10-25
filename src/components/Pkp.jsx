import React, { useState } from "react";
import { useSelector } from "react-redux";
import symbol from "../assets/search.svg";
// import icon from "../assets/plusIcon.svg";

const Pkp = () => {
  const { locFaskes } = useSelector((state) => state.locationReducers);
  console.log(locFaskes);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the data based on the search query
  const filteredData = locFaskes.filter((item) =>
    item.nama_pusk.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-20">
      <h2 className="text-xl font-bold mb-4 text-[#293241] underline">
        Penilaian Faskes
      </h2>
      <div className="flex min-[240px]:flex-col md:flex-row md:space-x-10 min-[240px]:space-y-8 md:space-y-0">
        <div className=" bg-white shadow-md rounded-lg ">
          <div className="flex flex-row space-x-4 bg-[#4F709C] p-3 rounded-t-md justify-between">
            <h4 className="text-xl font-semibold text-white">Faskes</h4>
            <div class="flex bg-white input input-sm input-bordered border-gray-300 rounded-md space-x-3 mx-5 w-44">
              <img src={symbol} className="w-4" alt="" />
              <input
                type="text"
                placeholder="Cari"
                className="focus:outline-none bg-white w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />{" "}
            </div>
          </div>
          <div className="divide-y-2 overflow-auto h-[340px] px-4">
            {filteredData?.map((item) => (
              <div key={item.id} className="py-2">
                <button className="text-left w-full">
                  <h2 className="text-lg font-semibold">{item.nama_pusk}</h2>
                  <p className="text-zinc-400">
                    Kode Puskesmas {item.kode_pusk}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[1000px] bg-white rounded-lg shadow-md py-4 px-8">
          <div className="flex justify-between border-b-2 pb-2">
            <div>
              <h2 className="text-xl font-semibold ">Puskesmas Poncol</h2>
              <p>Rata-rata 70%</p>
            </div>
            {/* <h4 className="place-self-center underline font-bold">
              Selengkapnya
            </h4> */}
          </div>
          <div className="grid auto-cols-[308px] grid-flow-col gap-6 overflow-x-auto mt-4">
            <div className="border-2 p-3 rounded-md">
              <h2 className="font-bold">
                 Standar Pelayanan Minimal (SPM)
              </h2>
              <div className="flex flex-row mt-4">
                <div className="space-y-4">
                  <button className="text-left border-2 rounded-md w-full px-4 py-1">
                    <h2 className="font-semibold">
                      ABS Target Sasaran
                    </h2>
                    <p>93,4792%</p>
                  </button>
                  <button className="text-left border-2 rounded-md w-full px-4 py-1">
                    <h2 className="font-semibold">Realisasi</h2>
                    <p>100</p>
                  </button>
                  <button className="text-left border-2 rounded-md w-full px-4 py-1">
                    <h2 className="font-semibold">Nilai</h2>
                    <p>100%</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="border-2 p-3 rounded-md">
              <h2 className="font-bold">
                Cakupan Terapi Pencegahan TB
              </h2>
              <div className="flex flex-row mt-4">
                <div className="space-y-4">
                  <button className="text-left border-2 rounded-md w-full px-4 py-1">
                    <h2 className="font-semibold">
                      ABS Target Sasaran
                    </h2>
                    <p>2</p>
                  </button>
                  <button className="text-left border-2 rounded-md w-full px-4 py-1">
                    <h2 className="font-semibold">Realisasi</h2>
                    <p>0</p>
                  </button>
                  <button className="text-left border-2 rounded-md w-full px-4 py-1">
                    <h2 className="font-semibold">Nilai</h2>
                    <p>0%</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="border-2 p-3 rounded-md">
              <h2 className="font-bold">
                Cakupan Penyuluhan
              </h2>
              <div className="flex flex-row mt-4">
                <div className="space-y-4">
                  <button className="text-left border-2 rounded-md w-full px-4 py-1">
                    <h2 className="font-semibold">
                      ABS Target Sasaran
                    </h2>
                    <p>12</p>
                  </button>
                  <button className="text-left border-2 rounded-md w-full px-4 py-1">
                    <h2 className="font-semibold">Realisasi</h2>
                    <p>12</p>
                  </button>
                  <button className="text-left border-2 rounded-md w-full px-4 py-1">
                    <h2 className="font-semibold">Nilai</h2>
                    <p>100%</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="border-2 p-3 rounded-md">
              <h2 className="font-bold">
                Cakupan Skrining TB
              </h2>
              <div className="flex flex-row mt-4">
                <div className="space-y-4">
                  <button className="text-left border-2 rounded-md w-full px-4 py-1">
                    <h2 className="font-semibold">
                      ABS Target Sasaran
                    </h2>
                    <p>2234,25</p>
                  </button>
                  <button className="text-left border-2 rounded-md w-full px-4 py-1">
                    <h2 className="font-semibold">Realisasi</h2>
                    <p>1291</p>
                  </button>
                  <button className="text-left border-2 rounded-md w-full px-4 py-1">
                    <h2 className="font-semibold">Nilai</h2>
                    <p>57,8%</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pkp;
