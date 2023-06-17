import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const apidata = {
  status: "OK",
  message: "Success",
  data: [
    {
      tahun: 2016,
      total: 2571,
    },
    {
      tahun: 2017,
      total: 3295,
    },
    {
      tahun: 2018,
      total: 3492,
    },
    {
      tahun: 2019,
      total: 133,
    },
    {
      tahun: 2020,
      total: 1898,
    },
    {
      tahun: 2021,
      total: 1109,
    },
    {
      tahun: 2022,
      total: 4834,
    },
    {
      tahun: 2023,
      total: 1367,
    },
  ],
};

const LineGraph = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/total")
  //     .then((response) => response.json())
  //     .then((data) => setData(data.data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  return (
    <div>
      <LineChart
        width={600}
        height={350}
        data={apidata.data}
        margin={{ top: 30, right: 30, left: 20, bottom: 10 }}
      >
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
