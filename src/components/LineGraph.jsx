import React, { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import iconGrafik from '../assets/icon-grafik.png';

const apidata = {
	status: 'OK',
	message: 'Success',
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
		<div className="flex gap-20">
			<div className="card bg-white drop-shadow-lg">
				<div className="card-body">
					<LineChart width={800} height={400} data={apidata.data} margin={{ top: 30, right: 30, left: 20, bottom: 10 }}>
						<Line type="monotone" dataKey="total" stroke="#2196F3" />
						<CartesianGrid stroke="#ccc" />
						<XAxis dataKey="tahun" />
						<YAxis />
						<Tooltip />
						<Legend />
					</LineChart>
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
