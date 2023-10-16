import React, { useState } from "react";
import { useSelector } from "react-redux";
import symbol from "../assets/search.svg";
import icon from "../assets/plusIcon.svg";

const Pkp = () => {
  const { locFaskes } = useSelector((state) => state.locationReducers);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the data based on the search query
  const filteredData = locFaskes.filter((item) =>
    item.nama_fasyankes.toLowerCase().includes(searchQuery.toLowerCase())
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
          <div className="divide-y-2 overflow-auto h-72 px-4">
            {filteredData?.map((item) => (
              <div key={item.id} className="py-2">
                <button className="text-left w-full">
                  <h2 className="text-lg font-semibold">
                    {item.nama_fasyankes}
                  </h2>
                  <p className="text-zinc-400">{item.jumlah_pasien} kasus</p>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-white p-2 rounded-lg shadow-md px-8 py-6">
          <h2 className="text-2xl font-semibold">Cakupan Pemberian Zn</h2>
          <div className="flex flex-row mt-4">
            <div className="space-y-4">
              <button className="text-left flex space-x-2 border-2 rounded-md w-72">
                <img className="w-14" src={icon} alt="" />
                <div className="pr-8">
                  <h2 className="font-semibold text-lg">Sasaran 100%</h2>
                  <p>6</p>
                </div>
              </button>
              <button className="text-left flex space-x-2 border-2 rounded-md w-72">
                <img className="w-14" src={icon} alt="" />
                <div className="pr-8">
                  <h2 className="font-semibold text-lg">ABS Target Sasaran</h2>
                  <p>6</p>
                </div>
              </button>
              <button className="text-left flex space-x-2 border-2 rounded-md w-72">
                <img className="w-14" src={icon} alt="" />
                <div className="pr-8">
                  <h2 className="font-semibold text-lg">
                    Realisasi Sampai Juli
                  </h2>
                  <p>5</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pkp;
