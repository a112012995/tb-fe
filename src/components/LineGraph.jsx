import React, { useState, useEffect } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import iconGrafik from "../assets/icon-grafik.png";
import { useDispatch, useSelector } from "react-redux";
// import { getPasien } from "../store/actions/pasien";
import { getLocation } from "../store/actions/location";

const LineGraph = () => {
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);

  const { data } = useSelector((state) => state.locationReducers);
  console.log(data);

  return (
    <div className="flex gap-20">
      <div className="card bg-white drop-shadow-lg">
        <div className="card-body">
          <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nama_kelurahan" tick={{ fontSize: 8 }} angle={-90} textAnchor="end" interval={0} />
            <YAxis dataKey="jumlah_pasien" />
            <Tooltip />
            <Legend />
            <Bar dataKey="jumlah_pasien" fill="#8884d8" />
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
          </BarChart>
        </div>
      </div>
      <div className="card bg-white drop-shadow-lg w-full">
        <div className="card-body ">
          <div className="flex gap-1">
            <img src={iconGrafik} alt="icon-grafik" className="w-6 h-6" />
            <p>Grafik</p>
          </div>
          <select className="select select-info bg-[#F6F6F6] font-normal">
            <option disabled selected>
              Jumlah Kasus
            </option>
            <option>English</option>
            <option>Japanese</option>
            <option>Italian</option>
          </select>
          <select className="select select-info bg-[#F6F6F6] font-normal">
            <option disabled selected>
              Angka Kesembuhan
            </option>
            <option>English</option>
            <option>Japanese</option>
            <option>Italian</option>
          </select>
          <select className="select select-info bg-[#F6F6F6] font-normal">
            <option disabled selected>
              Angka Kematian
            </option>
            <option>English</option>
            <option>Japanese</option>
            <option>Italian</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LineGraph;
