import React from "react";
import bannerVector from "../assets/bannerImg.png";
import bannerImg from "../assets/Rectangle-86.png";

const Banner = () => {
  return (
    <div
      className="h-[60x0px] bg-no-repeat w-full bg-cover bg-bottom"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="container flex flex-row">
        <div className="mt-[246px]">
          <p className="ml-24 text-[36px] text-black font-bold leading-[90px]">
            Berantas Tuberkulosis!
          </p>
          <p className="text-black text-[14px] w-[468px] ml-24 font-sans">
            Bersama-sama, mari kita berantas tuberkulosis (TBC) dan menjaga
            dunia bebas dari penyakit yang mengancam ini! Wujudkan dalam gerakan
            kami untuk vaksinasi, edukasi, dan perawatan yang menyeluruh, demi
            mewujudkan masa depan yang sehat bagi semua.
          </p>
          <p className="text-[#FF4E4E] text-[18px] ml-24 font-bold">
            Bersatu Kita Kalahkan TBC
          </p>
        </div>
        <div className="w-[735px] h-[425px] ml-[87px] mt-[165px]">
          <img src={bannerVector} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
