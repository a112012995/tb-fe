import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  { tahun: "2017", total: 3300 },
  { tahun: "2018", total: 4200 },
  { tahun: "2019", total: 5100 },
  { tahun: "2020", total: 6000 },
  { tahun: "2021", total: 5100 },
  { tahun: "2022", total: 9500 },
];

const LineGraph = () => {
  return (
    <div>
      <LineChart width={600} height={350} data={data} margin={{ top: 30, right: 30, left: 20, bottom: 10 }}>
        <Line type="monotone" dataKey="total" stroke="#2196F3" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="tahun" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default LineGraph;
