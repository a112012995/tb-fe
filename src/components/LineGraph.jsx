import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import iconGrafik from "../assets/icon-grafik.png";
import { useDispatch, useSelector } from "react-redux";
import { getPasien } from "../store/actions/pasien";
import {
  getFaskes,
  getKelurahan,
  getLocation,
} from "../store/actions/location";

const LineGraph = () => {
  // const [data, setData] = useState([]);
  const [selectedKasus, setSelectedKasus] = useState("jumlah_pasien");
  const [selectedPersebaran, setSelectedPersebaran] = useState("Domisili");
  const dispatch = useDispatch();

  useEffect(() => {
	dispatch(getPasien())
    dispatch(getLocation());
    dispatch(getKelurahan());
    dispatch(getFaskes());
  }, [dispatch]);

  const { dataKel, dataFas } = useSelector(
    (state) => state.locationReducers
  );
  const { data } = useSelector(
    (state) => state.pasienReducers
  );
  console.log(dataKel);

  const sortedData = data.sort((a, b) => {
	const months = {
	  Januari: 1, Februari: 2, Maret: 3, April: 4,
	  Mei: 5, Juni: 6, Juli: 7, Agustus: 8,
	  September: 9, Oktober: 10, November: 11, Desember: 12
	};
	return months[a.bulan] - months[b.bulan];
  });
  const groupedData = sortedData.reduce((acc, entry) => {
	const month = entry.bulan;
	if (!acc[month]) {
	  acc[month] = 0;
	}
	acc[month]++;
	return acc;
  }, {});
  
  const chartData = Object.keys(groupedData).map(month => ({
	bulan: month,
	jumlah_kasus: groupedData[month],
  }));

  // Fungsi untuk memfilter data berdasarkan opsi yang dipilih
  const filteredData = data.filter(
    (item) =>
      (selectedKasus === "tahun" && data.tahun) ||
      (selectedKasus === "Kasus Aktif" && item.kasus_aktif) ||
      (selectedKasus === "jumlah_pasien" && item.jumlah_pasien)
  );

  const [activeCollapse, setActiveCollapse] = useState(null);
  const handleCollapseClick = (index) => {
    setActiveCollapse(index === activeCollapse ? null : index);
  };

  return (
    <div className="flex gap-20">
      <div className="card bg-white drop-shadow-lg">
        <div className="card-body">
          <BarChart
            width={800}
            height={500}
            margin={{ bottom: -5 }}
            data={chartData}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="bulan"
              tick={{ fontSize: 6 }}
              angle={-90}
              textAnchor="end"
              interval={0}
            />
            <YAxis />
            <Tooltip />
            <Legend
              layout="vertical"
              align="center"
              verticalAlign="bottom"
              margin={{ bottom: 500 }}
            />
            <Bar dataKey="jumlah_kasus" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
      <div className="card bg-white drop-shadow-lg w-full">
        <div className="card-body ">
          <div className="flex gap-1">
            <img src={iconGrafik} alt="icon-grafik" className="w-6 h-6" />
            <p>Grafik</p>
          </div>
          <div className="bg-white join join-vertical w-full">
            <div
              className={`collapse join-item ${
                activeCollapse === 1 ? "border" : ""
              }`}
            >
              <input
                type="radio"
                name="my-accordion-4"
                checked={activeCollapse === 1}
                onChange={() => handleCollapseClick(1)}
              />
              <div className="collapse-title text-xl font-medium bg-[#D9D9D9]">
                Persebaran
              </div>
              <div className="collapse-content">
                <select className="select select-bordered border-2 w-full bg-white">
                  <option disabled selected>
                    Domisili
                  </option>
                  {dataKel &&
                    dataKel.map((item) => (
                      <option>{item.nama_kelurahan}</option>
                    ))}
                </select>
                <select className="select select-bordered border-2 w-full max-w-lg bg-white">
                  <option disabled selected>
                    Fasyankes
                  </option>
                  {dataFas &&
                    dataFas.map((item) => (
                      <option>{item.nama_fasyankes}</option>
                    ))}
                </select>
              </div>
            </div>

            <div
              className={`collapse join-item ${
                activeCollapse === 2 ? "border" : ""
              }`}
            >
              <input
                type="radio"
                name="my-accordion-4"
                checked={activeCollapse === 2}
                onChange={() => handleCollapseClick(2)}
              />
              <div className="collapse-title text-xl font-medium bg-[#D9D9D9]">
                Gender
              </div>
              <div className="collapse-content">
                <p className="border-2 p-1">Laki-laki</p>
                <p className="border-2 p-1">Perempuan</p>
              </div>
            </div>

            {/* <div className={`collapse collapse-arrow join-item ${activeCollapse === 3 ? 'border' : ''}`}>
							<input type="radio" name="my-accordion-4" checked={activeCollapse === 3} onChange={() => handleCollapseClick(3)} />
							<div className="collapse-title text-xl font-medium">Terapi Wajib</div>
							<div className="collapse-content">
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maiores in minima tempora rem earum veniam aliquid, ad soluta, placeat optio. Obcaecati esse at nulla quia architecto aspernatur, voluptatibus ab.</p>
							</div>
						</div> */}
          </div>

          {/* <select className="select select-info bg-[#F6F6F6] font-normal" value={selectedKasus} onChange={(e) => setSelectedKasus(e.target.value)}>
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
					</select> */}
        </div>
      </div>
    </div>
  );
};

export default LineGraph;
