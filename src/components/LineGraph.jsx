import React, { useState, useEffect } from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import iconGrafik from "../assets/icon-grafik.png";
import { useDispatch, useSelector } from "react-redux";
// import { getPasien } from "../store/actions/pasien";
import { getLocation } from "../store/actions/location";

const LineGraph = () => {
  // const [data, setData] = useState([]);
  const [selectedKasus, setSelectedKasus] = useState("jumlah_pasien");
  const [selectedPersebaran, setSelectedPersebaran] = useState("Domisili");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocation());
    // dispatch(getPasien());
  }, [dispatch]);

  const { data } = useSelector((state) => state.locationReducers);
  // const { dataPasien } = useSelector((state) => state.pasienReducers);
  console.log(data);

  // Fungsi untuk memfilter data berdasarkan opsi yang dipilih
  const filteredData = data.filter((item) => (selectedKasus === "tahun" && data.tahun) || (selectedKasus === "Kasus Aktif" && item.kasus_aktif) || (selectedKasus === "jumlah_pasien" && item.jumlah_pasien));

  return (
    <div className="flex gap-20">
      <div className="card bg-white drop-shadow-lg">
        <div className="card-body">
          <BarChart width={800} height={500} margin={{ bottom: -5 }} data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nama_kelurahan" tick={{ fontSize: 6 }} angle={-90} textAnchor="end" interval={0} />
            <YAxis dataKey={selectedKasus} />
            <Tooltip />
            <Legend layout="vertical" align="center" verticalAlign="bottom" margin={{ bottom: 500 }} />
            <Bar dataKey={selectedKasus} fill="#8884d8" />
          </BarChart>
        </div>
      </div>
      <div className="card bg-white drop-shadow-lg w-full">
        <div className="card-body ">
          <div className="flex gap-1">
            <img src={iconGrafik} alt="icon-grafik" className="w-6 h-6" />
            <p>Grafik</p>
          </div>
          <select className="select select-info bg-[#F6F6F6] font-normal" value={selectedKasus} onChange={(e) => setSelectedKasus(e.target.value)}>
            <option disabled selected>
              Jumlah Kasus
            </option>
            <option value="tahun">Kasus Baru</option>
            <option value="Kasus Aktif">Kasus Aktif</option>
          </select>
          <select className="select select-info bg-[#F6F6F6] font-normal" value={selectedPersebaran} onChange={(e) => setSelectedPersebaran(e.target.value)}>
            <option disabled selected>
              Persebaran
            </option>
            <option value="Domisili">Domisili</option>
            <option value="Fasyankes">Fasyankes</option>
          </select>
          <select className="select select-info bg-[#F6F6F6] font-normal">
            <option disabled selected>
              Gender
            </option>
            <option>Perempuan</option>
            <option>Lak-laki</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LineGraph;
