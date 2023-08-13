import React, { useState, useEffect } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Button, Collapse, Form, Select } from 'antd';
import iconGrafik from '../assets/icon-grafik.png';
import iconsSearch from '../assets/search-icons.png';
import { useDispatch, useSelector } from 'react-redux';
import { getPasien } from '../store/actions/pasien';
import { getFaskes, getKelurahan, getLocation } from '../store/actions/location';

const LineGraph = () => {
	// const [data, setData] = useState([]);
	const [selectedKasus, setSelectedKasus] = useState('jumlah_pasien');
	const [selectedPersebaran, setSelectedPersebaran] = useState('Domisili');
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPasien());
		dispatch(getLocation());
		dispatch(getKelurahan());
		dispatch(getFaskes());
	}, [dispatch]);

	const { dataKel, dataFas } = useSelector((state) => state.locationReducers);
	const { data } = useSelector((state) => state.pasienReducers);
	console.log(dataKel);

	const sortedData = data.sort((a, b) => {
		const months = {
			Januari: 1,
			Februari: 2,
			Maret: 3,
			April: 4,
			Mei: 5,
			Juni: 6,
			Juli: 7,
			Agustus: 8,
			September: 9,
			Oktober: 10,
			November: 11,
			Desember: 12,
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

	const chartData = Object.keys(groupedData).map((month) => ({
		bulan: month,
		jumlah_kasus: groupedData[month],
	}));

	// Fungsi untuk memfilter data berdasarkan opsi yang dipilih
	const filteredData = data.filter((item) => (selectedKasus === 'tahun' && data.tahun) || (selectedKasus === 'Kasus Aktif' && item.kasus_aktif) || (selectedKasus === 'jumlah_pasien' && item.jumlah_pasien));

	const [activeCollapse, setActiveCollapse] = useState(null);
	const handleCollapseClick = (index) => {
		setActiveCollapse(index === activeCollapse ? null : index);
	};

	//yang dipake di antd
	const itemsAccordion = [
		{
			key: '1',
			label: <div className="text-white">Tahun</div>,
			children: (
				<Select
					placeholder=<div className="text-black">Pilih Tahun</div>
					optionFilterProp="children"
					className="w-full"
					options={[
						{ value: '2021', label: '2021' },
						{ value: '2022', label: '2022' },
						{ value: '2023', label: '2023' },
					]}
				/>
			),
			showArrow: false,
		},
		{
			key: '2',
			label: <div className="text-white">Persebaran</div>,
			children: (
				<div className="flex flex-col">
					<Select
						showSearch
						placeholder=<div className="text-black">Domisili</div>
						optionFilterProp="children"
						filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
						options={
							dataKel &&
							dataKel.map((item) => ({
								value: item.id,
								label: item.nama_kelurahan,
							}))
						}
					/>
					<br />
					<Select
						showSearch
						placeholder=<div className="text-black">Fasyankes</div>
						optionFilterProp="children"
						filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
						options={
							dataFas &&
							dataFas.map((item) => ({
								value: item.id,
								label: item.nama_fasyankes,
							}))
						}
					/>
				</div>
			),
			showArrow: false,
		},
		{
			key: '3',
			label: <div className="text-white">Gender</div>,
			children: (
				<Select
					placeholder=<div className="text-black">Pilih Gender</div>
					optionFilterProp="children"
					className="w-full"
					options={[
						{ value: 'Laki-Laki', label: 'Laki-Laki' },
						{ value: 'Perempuan', label: 'Perempuan' },
					]}
				/>
			),
			showArrow: false,
		},
	];

	const onChange = (value) => {
		console.log(`selected ${value}`);
	};
	const onSearch = (value) => {
		console.log('search:', value);
	};

	return (
		<div className="flex gap-20">
			<div className="card bg-white drop-shadow-lg">
				<div className="card-body">
					<BarChart width={800} height={500} margin={{ bottom: -5 }} data={chartData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="bulan" tick={{ fontSize: 6 }} angle={-90} textAnchor="end" interval={0} />
						<YAxis />
						<Tooltip />
						<Legend layout="vertical" align="center" verticalAlign="bottom" margin={{ bottom: 500 }} />
						<Bar dataKey="jumlah_kasus" fill="#8884d8" />
					</BarChart>
				</div>
			</div>
			<div className="card bg-white drop-shadow-lg w-full">
				<div className="card-body ">
					<div className="flex gap-1">
						<img src={iconGrafik} alt="icon-grafik" className="w-6 h-6" />
						<p>Filter</p>
					</div>
					<Form>
						<Form.Item>
							<div className="bg-[#4F709C] collapse">
								<Collapse items={itemsAccordion} />
							</div>
						</Form.Item>
						<Form.Item className="justify-center p-5">
							<Button htmlType="submit" className="flex gap-2 items-center border-[#4F709C] bg-[#4F709C] text-white hover:bg-[#4F709C] hover:border-[#4F709C] hover:text-white">
								<img src={iconsSearch} alt="icon-search" className="w-4 h-4" />
								Pratinjau
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default LineGraph;
