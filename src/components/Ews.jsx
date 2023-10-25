import React from "react";
// import { getLocationById } from "../store/actions/location";
import { useSelector } from "react-redux";

const Ews = () => {
  const { survei } = useSelector((state) => state.locationReducers);
  console.log(survei);
  return (
    <div className="flex md:flex-row min-[240px]:flex-col min-[240px]:px-4 md:px-52 mt-16 gap-5">
      <div className="p-6 rounded-md border-2 bg-white w-full space-y-8">
        <h4 className="font-semibold text-2xl">Literasi</h4>
        <div className="flex space-x-6">
          <div
            className="radial-progress text-[#1565C0]"
            style={{
              "--value": `${Math.round(survei.persentase_literasi * 100)}`,
              "--size": "8rem",
              "--thickness": "0.75rem",
            }}
          ></div>
          <div className="place-self-center space-y-4">
            <h2 className="text-[#1CD1A1] text-6xl font-semibold ">{Math.round(survei.persentase_literasi * 100)}%</h2>
            <h4 className="font-bold">{survei.avg_literasi}</h4>
          </div>
        </div>
      </div>
      <div className="p-6 rounded-md border-2 bg-white w-full space-y-8">
        <h4 className="font-semibold text-2xl">Stigma</h4>
        <div className="flex space-x-6">
          <div
            className="radial-progress text-[#1565C0]"
            style={{
              "--value": `${Math.round(survei.persentase_stigma * 100)}`,
              "--size": "8rem",
              "--thickness": "0.75rem",
            }}
          ></div>
          <div className="place-self-center space-y-4">
            <h2 className="text-[#1CD1A1] text-6xl font-semibold ">{Math.round(survei.persentase_stigma * 100)}%</h2>
            <h4 className="font-bold">{survei.avg_stigma}</h4>
          </div>
        </div>
      </div>
      <div className="p-6 rounded-md border-2 bg-white w-full space-y-8">
        <h4 className="font-semibold text-2xl">Pengetahuan</h4>
        <div className="flex space-x-6">
          <div
            className="radial-progress text-[#1565C0]"
            style={{
              "--value": `${Math.round(survei.persentase_pengetahuan * 100)}`,
              "--size": "8rem",
              "--thickness": "0.75rem",
            }}
          ></div>
          <div className="place-self-center space-y-4">
            <h2 className="text-[#1CD1A1] text-6xl font-semibold ">{Math.round(survei.persentase_pengetahuan * 100)}%</h2>
            <h4 className="font-bold">{survei.avg_pengetahuan}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ews;
