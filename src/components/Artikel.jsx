import React from "react";
import icon from "../assets/ellipse-art.svg";
import img1 from "../assets/imgArt.png";
import img2 from "../assets/imgHml.png";
import img3 from "../assets/imgKmbh.png";
import arrow from "../assets/arrow.svg"

const Artikel = () => {
  return (
    <div className="mt-[105px] px-[150px]">
      <div className="flex flex-row">
        <img src={icon} alt="" />
        <h4 className="ml-4 text-[28px] font-medium">Artikel</h4>
        <h6 className="mt-1 ml-1 text-[22px] font-medium">
          - Informasi Seputar TBC
        </h6>
      </div>
      <div className="flex flex-row space-x-[75px] mt-6 mb-5">
        <div className="card w-[353px] h-[260px] rounded-2xl bg-white shadow-md">
          <img src={img1} className="h-[141px] rounded-t-2xl" alt="" />
          <div className=" mt-5 border-b-2">
            <p className="ml-[30px] w-[228px] mb-2 text-sm font-semibold">
              Waspada dengan Bakteri Penyebab Tuberkulosis!
            </p>
          </div>
          <p className="ml-[30px] my-4 text-sm font-extralight ">26 Mei 2023</p>
        </div>
        <div className="card w-[353px] h-[260px] rounded-2xl bg-white shadow-md">
          <img src={img2} className="h-[141px] rounded-t-2xl" alt="" />
          <div className=" mt-5 border-b-2">
            <p className="ml-[30px] w-[228px] mb-7 text-sm font-semibold">
              Tuberkulosis pada Kehamilan
            </p>
          </div>
          <p className="ml-[30px] my-4 text-sm font-extralight ">26 Mei 2023</p>
        </div>
        <div className="card w-[353px] h-[260px] rounded-2xl bg-white shadow-md">
          <img src={img3} className="h-[141px] rounded-t-2xl" alt="" />
          <div className=" mt-5 border-b-2">
            <p className="ml-[30px] w-[228px] mb-2 text-sm font-semibold">
              Apakah TBC dapat Kambuh Kembali?
            </p>
          </div>
          <p className="ml-[30px] my-4 text-sm font-extralight ">26 Mei 2023</p>
        </div>
      </div>
      <button className="px-5 py-[10px] bg-[#5CB85F] flex flex-row rounded-[25px] text-lg font-light text-white">
        Artikel Lainnya 
        <img src={arrow} className="mt-[6px] w-[18px] ml-4" alt="" />
      </button>
    </div>
  );
};

export default Artikel;
