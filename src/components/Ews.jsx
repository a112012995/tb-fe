import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Ews = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const { hit } = useSelector((state) => state.locationReducers);
  const { survey } = useSelector((state) => state.surveyReducers);

  const literasiData = [
    { name: "Excellent", value: survey.pasien_kategori_literasi_excellent },
    { name: "Inadequate", value: survey.pasien_kategori_literasi_inadequate },
    { name: "Problematic", value: survey.pasien_kategori_literasi_problematic },
    { name: "Sufficient", value: survey.pasien_kategori_literasi_sufficient },
  ];

  const stigmaData = [
    { name: "Tidak Stigma", value: survey.pasien_kategori_stigma_tidak_stigma },
    {
      name: "Stigma Rendah",
      value: survey.pasien_kategori_stigma_stigma_rendah,
    },
    {
      name: "Stigma Sangat Rendah",
      value: survey.pasien_kategori_stigma_stigma_sangat_rendah,
    },
    {
      name: "Stigma Sedang",
      value: survey.pasien_kategori_stigma_stigma_sedang,
    },
    {
      name: "Stigma Tinggi",
      value: survey.pasien_kategori_stigma_stigma_tinggi,
    },
  ];

  const pengetahuanData = [
    { name: "Baik", value: survey.pasien_kategori_pengetahuan_baik },
    { name: "Buruk", value: survey.pasien_kategori_pengetahuan_buruk },
    { name: "Cukup", value: survey.pasien_kategori_pengetahuan_cukup },
    { name: "Kurang", value: survey.pasien_kategori_pengetahuan_kurang },
  ];

  return (
    <div className="flex min-[240px]:flex-col min-[240px]:px-4 md:px-72 mt-16 gap-5">
      <div className="w-full flex flex-wrap justify-center">
        <div className="p-6 rounded-md border-2 bg-white w-fit space-y-8">
          <h4 className="font-semibold text-2xl">Literasi</h4>
          <div className="flex">
            <PieChart width={650} height={300}>
              <Pie
                data={literasiData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {literasiData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
            {/* <div className="place-self-center space-y-4">
            <h2 className="text-[#1CD1A1] text-6xl font-semibold ">
              {Math.round(hit.persentase_literasi * 100)}%
            </h2>
            <h4 className="font-bold">{hit.avg_literasi}</h4>
          </div> */}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center">
        <div className="p-6 rounded-md border-2 bg-white w-fit space-y-8">
          <h4 className="font-semibold text-2xl">Stigma</h4>
          <div className="flex">
            <PieChart width={650} height={300}>
              <Pie
                data={stigmaData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {stigmaData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
            {/* <div className="place-self-center space-y-4">
            <h2 className="text-[#1CD1A1] text-6xl font-semibold ">
              {Math.round(hit.persentase_stigma * 100)}%
            </h2>
            <h4 className="font-bold">{hit.avg_stigma}</h4>
          </div> */}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center">
        <div className="p-6 rounded-md border-2 bg-white w-fit space-y-8">
          <h4 className="font-semibold text-2xl">Pengetahuan</h4>
          <div className="flex">
            <PieChart width={650} height={300}>
              <Pie
                data={pengetahuanData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {pengetahuanData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
            {/* <div className="place-self-center space-y-4">
            <h2 className="text-[#1CD1A1] text-6xl font-semibold ">
              {Math.round(hit.persentase_pengetahuan * 100)}%
            </h2>
            <h4 className="font-bold">{hit.avg_pengetahuan}</h4>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ews;
