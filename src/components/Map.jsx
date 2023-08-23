import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { statesData } from '../geojson/data';
import { getLocationById, getLocation } from '../store/actions/location';
import { useNavigate } from 'react-router-dom';

const Map = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(getLocation());
	}, [dispatch]);

	const [onSelect, setOnSelect] = useState(false);
	const { data, dataById, totalPas } = useSelector((state) => state.locationReducers);
	//   console.log(data);

	//   get response from api get location by id
	const getById = async (id) => {
		await dispatch(getLocationById(id))
			.then((response) => ({ response }))
			.catch((error) => ({ error }));
	};

	const rendah = data.filter((data) => data.jumlah_pasien === 0);
	const lumayan = data.filter((data) => data.jumlah_pasien < 25 && data.jumlah_pasien > 0);
	const cukup = data.filter((data) => data.jumlah_pasien < 50 && data.jumlah_pasien > 25);
	const agakRentan = data.filter((data) => data.jumlah_pasien < 80 && data.jumlah_pasien > 50);
	const rentan = data.filter((data) => data.jumlah_pasien < 125 && data.jumlah_pasien > 80);
	const iniBahaya = data.filter((data) => data.jumlah_pasien < 150 && data.jumlah_pasien > 125);
	const rentanBanget = data.filter((data) => data.jumlah_pasien < 170 && data.jumlah_pasien > 150);
	const serem = data.filter((data) => data.jumlah_pasien > 170);

	//   setting for mapping use leaflet
	const center = [-7.019679560453046, 110.39818740013446];

	let dataCase = {};
	data?.forEach((item) => {
		dataCase[item.id] = item.jumlah_pasien;
	});

	const style = (feature) => {
		let totalData = dataCase?.[feature.properties.gid];
		let colors;
		if (totalData > 170) {
			colors = '#800026';
		} else if (totalData > 150) {
			colors = '#BD0026';
		} else if (totalData > 125) {
			colors = '#E31A1C';
		} else if (totalData > 80) {
			colors = '#FC4E2A';
		} else if (totalData > 50) {
			colors = '#FD8D3C';
		} else if (totalData > 25) {
			colors = '#FEB24C';
		} else if (totalData > 0) {
			colors = '#FED976';
		} else {
			colors = '#FFEDA0';
		}
		return {
			fillColor: colors,
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '2',
			fillOpacity: 1,
		};
	};

	const highlightFeature = (e) => {
		const data = e.target.feature.properties.gid;
		var layer = e.target;
		getById(data);
		layer.setStyle({
			fillOpacity: 1,
			weight: 4,
			dashArray: '',
			color: 'black',
			// fillColor: "#D45962",
		});
		setOnSelect(true);
	};

	const resetHighlight = (e) => {
		setOnSelect(false);
		// e.target.setStyle(style(e.target.feature));
	};

	const clickHandler = (e) => {
		const data = e.target.feature.properties.gid;
		navigate('/details', {
			state: { areaId: data },
		});
	};

	const onEachFeature = (feature, layer) => {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: clickHandler,
		});
	};
	//   setting for mapping use leaflet (DONE)

	return (
		<div id="map">
			<MapContainer center={center} zoom={12} style={{ width: 'screen', height: '80vh' }}>
				<div className="flex flex-row-reverse pt-20 pr-7">
					<div className="card bg-white w-60 shadow-xl z-[999]">
						<div className="px-5 py-4">
							{onSelect ? (
								<>
									<h2 className=" text-lg font-bold">{dataById.nama_kelurahan}</h2>
									<p className="text-sm">Jumlah Kasus: {totalPas}</p>
								</>
							) : (
								<>
									<h2 className=" text-lg font-bold">Data</h2>
									<p className="text-sm">Hover on each county for more details</p>
								</>
							)}
						</div>
					</div>
				</div>
				<TileLayer
					url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=sO17qhXSqu9o3tn00q0L"
					attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
				/>
				<GeoJSON data={statesData} onEachFeature={onEachFeature} style={style} />
			</MapContainer>
			<div className="mt-2">
				<h1 className="font-semibold">Jumlah Kasus</h1>
				<div className="flex gap-5 mt-1">
					{/* ini model modal */}
					<button onClick={() => window.my_modal_1.showModal()}>
						<div className="flex items-baseline">
							<div>
								<svg height="20" width="20">
									<circle cx="12" cy="12" r="6" fill="#FFEDA0" stroke="black" />
								</svg>
							</div>
							<div className="flex-col ml-3 text-start">
								<p>0 - 0</p>
								<p>{`${rendah.length} Kelurahan`}</p>
							</div>
						</div>
					</button>
					<dialog id="my_modal_1" className="modal">
						<form method="dialog" className="modal-box rounded-md bg-[#4F709C] text-white scroll-smooth will-change-scroll h-96">
							<div className="overflow-x-auto">
								<table className="table">
									{/* head */}
									<thead>
										<tr className="font-bold text-sm text-white border-b-slate-400">
											<th>No</th>
											<th>Kelurahan</th>
											<th>Jumlah Kasus</th>
											<th>Tingkat Kerentanan</th>
										</tr>
									</thead>
									<tbody>
										{/* row 1 */}
										<tr className="text-center border-b-transparent">
											<th>1</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Rentan</td>
										</tr>
										{/* row 2 */}
										<tr className="text-center border-b-transparent">
											<th>2</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
										{/* row 3 */}
										<tr className="text-center border-b-transparent">
											<th>3</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Cukup Rentan</td>
										</tr>
										{/* row 4 */}
										<tr className="text-center border-b-transparent">
											<th>4</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Sangat Rentan</td>
										</tr>
										{/* row 5 */}
										<tr className="text-center border-b-transparent">
											<th>5</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
										{/* row 3 */}
										<tr className="text-center border-b-transparent">
											<th>3</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Cukup Rentan</td>
										</tr>
										{/* row 4 */}
										<tr className="text-center border-b-transparent">
											<th>4</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Sangat Rentan</td>
										</tr>
										{/* row 5 */}
										<tr className="text-center border-b-transparent">
											<th>5</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
						<form method="dialog" className="modal-backdrop">
							<button>close</button>
						</form>
					</dialog>
					<button onClick={() => window.my_modal_2.showModal()}>
						<div className="flex items-baseline">
							<div>
								<svg height="20" width="20">
									<circle cx="12" cy="12" r="6" fill="#FED976" stroke="black" />
								</svg>
							</div>
							<div className="flex-col ml-3 text-start">
								<p>1 - 25</p>
								<p>{`${lumayan.length} Kelurahan`}</p>
							</div>
						</div>
					</button>
					<dialog id="my_modal_2" className="modal">
						<form method="dialog" className="modal-box rounded-md bg-[#4F709C] text-white scroll-smooth will-change-scroll h-96">
							<div className="overflow-x-auto">
								<table className="table">
									{/* head */}
									<thead>
										<tr className="font-bold text-sm text-white border-b-slate-400">
											<th>No</th>
											<th>Kelurahan</th>
											<th>Jumlah Kasus</th>
											<th>Tingkat Kerentanan</th>
										</tr>
									</thead>
									<tbody>
										{/* row 1 */}
										<tr className="text-center border-b-transparent">
											<th>1</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Rentan</td>
										</tr>
										{/* row 2 */}
										<tr className="text-center border-b-transparent">
											<th>2</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
										{/* row 3 */}
										<tr className="text-center border-b-transparent">
											<th>3</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Cukup Rentan</td>
										</tr>
										{/* row 4 */}
										<tr className="text-center border-b-transparent">
											<th>4</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Sangat Rentan</td>
										</tr>
										{/* row 5 */}
										<tr className="text-center border-b-transparent">
											<th>5</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
										{/* row 3 */}
										<tr className="text-center border-b-transparent">
											<th>3</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Cukup Rentan</td>
										</tr>
										{/* row 4 */}
										<tr className="text-center border-b-transparent">
											<th>4</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Sangat Rentan</td>
										</tr>
										{/* row 5 */}
										<tr className="text-center border-b-transparent">
											<th>5</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
						<form method="dialog" className="modal-backdrop">
							<button>close</button>
						</form>
					</dialog>
					<button onClick={() => window.my_modal_3.showModal()}>
						<div className="flex items-baseline">
							<div>
								<svg height="20" width="20">
									<circle cx="12" cy="12" r="6" fill="#FEB24C" stroke="black" />
								</svg>
							</div>
							<div className="flex-col ml-3 text-start">
								<p>26 - 50</p>
								<p>{`${cukup.length} Kelurahan`}</p>
							</div>
						</div>
					</button>
					<dialog id="my_modal_3" className="modal">
						<form method="dialog" className="modal-box rounded-md bg-[#4F709C] text-white scroll-smooth will-change-scroll h-96">
							<div className="overflow-x-auto">
								<table className="table">
									{/* head */}
									<thead>
										<tr className="font-bold text-sm text-white border-b-slate-400">
											<th>No</th>
											<th>Kelurahan</th>
											<th>Jumlah Kasus</th>
											<th>Tingkat Kerentanan</th>
										</tr>
									</thead>
									<tbody>
										{/* row 1 */}
										<tr className="text-center border-b-transparent">
											<th>1</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Rentan</td>
										</tr>
										{/* row 2 */}
										<tr className="text-center border-b-transparent">
											<th>2</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
										{/* row 3 */}
										<tr className="text-center border-b-transparent">
											<th>3</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Cukup Rentan</td>
										</tr>
										{/* row 4 */}
										<tr className="text-center border-b-transparent">
											<th>4</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Sangat Rentan</td>
										</tr>
										{/* row 5 */}
										<tr className="text-center border-b-transparent">
											<th>5</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
										{/* row 3 */}
										<tr className="text-center border-b-transparent">
											<th>3</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Cukup Rentan</td>
										</tr>
										{/* row 4 */}
										<tr className="text-center border-b-transparent">
											<th>4</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Sangat Rentan</td>
										</tr>
										{/* row 5 */}
										<tr className="text-center border-b-transparent">
											<th>5</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
						<form method="dialog" className="modal-backdrop">
							<button>close</button>
						</form>
					</dialog>
					<button onClick={() => window.my_modal_4.showModal()}>
						<div className="flex items-baseline">
							<div>
								<svg height="20" width="20">
									<circle cx="12" cy="12" r="6" fill="#FD8D3C" stroke="black" />
								</svg>
							</div>
							<div className="flex-col ml-3 text-start">
								<p>51 - 80</p>
								<p>{`${agakRentan.length} Kelurahan`}</p>
							</div>
						</div>
					</button>
					<dialog id="my_modal_4" className="modal">
						<form method="dialog" className="modal-box rounded-md bg-[#4F709C] text-white scroll-smooth will-change-scroll h-96">
							<div className="overflow-x-auto">
								<table className="table">
									{/* head */}
									<thead>
										<tr className="font-bold text-sm text-white border-b-slate-400">
											<th>No</th>
											<th>Kelurahan</th>
											<th>Jumlah Kasus</th>
											<th>Tingkat Kerentanan</th>
										</tr>
									</thead>
									<tbody>
										{/* row 1 */}
										<tr className="text-center border-b-transparent">
											<th>1</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Rentan</td>
										</tr>
										{/* row 2 */}
										<tr className="text-center border-b-transparent">
											<th>2</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
										{/* row 3 */}
										<tr className="text-center border-b-transparent">
											<th>3</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Cukup Rentan</td>
										</tr>
										{/* row 4 */}
										<tr className="text-center border-b-transparent">
											<th>4</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Sangat Rentan</td>
										</tr>
										{/* row 5 */}
										<tr className="text-center border-b-transparent">
											<th>5</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
										{/* row 3 */}
										<tr className="text-center border-b-transparent">
											<th>3</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Cukup Rentan</td>
										</tr>
										{/* row 4 */}
										<tr className="text-center border-b-transparent">
											<th>4</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Sangat Rentan</td>
										</tr>
										{/* row 5 */}
										<tr className="text-center border-b-transparent">
											<th>5</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
						<form method="dialog" className="modal-backdrop">
							<button>close</button>
						</form>
					</dialog>
					<button onClick={() => window.my_modal_5.showModal()}>
						<div className="flex items-baseline">
							<div>
								<svg height="20" width="20">
									<circle cx="12" cy="12" r="6" fill="#FC4E2A" stroke="black" />
								</svg>
							</div>
							<div className="flex-col ml-3 text-start">
								<p>81 - 125</p>
								<p>{`${rentan.length} Kelurahan`}</p>
							</div>
						</div>
					</button>
					<dialog id="my_modal_5" className="modal">
						<form method="dialog" className="modal-box rounded-md bg-[#4F709C] text-white scroll-smooth will-change-scroll h-96">
							<div className="overflow-x-auto">
								<table className="table">
									{/* head */}
									<thead>
										<tr className="font-bold text-sm text-white border-b-slate-400">
											<th>No</th>
											<th>Kelurahan</th>
											<th>Jumlah Kasus</th>
											<th>Tingkat Kerentanan</th>
										</tr>
									</thead>
									<tbody>
										{/* row 1 */}
										<tr className="text-center border-b-transparent">
											<th>1</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Rentan</td>
										</tr>
										{/* row 2 */}
										<tr className="text-center border-b-transparent">
											<th>2</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
										{/* row 3 */}
										<tr className="text-center border-b-transparent">
											<th>3</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Cukup Rentan</td>
										</tr>
										{/* row 4 */}
										<tr className="text-center border-b-transparent">
											<th>4</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Sangat Rentan</td>
										</tr>
										{/* row 5 */}
										<tr className="text-center border-b-transparent">
											<th>5</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
										{/* row 3 */}
										<tr className="text-center border-b-transparent">
											<th>3</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Cukup Rentan</td>
										</tr>
										{/* row 4 */}
										<tr className="text-center border-b-transparent">
											<th>4</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Sangat Rentan</td>
										</tr>
										{/* row 5 */}
										<tr className="text-center border-b-transparent">
											<th>5</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
						<form method="dialog" className="modal-backdrop">
							<button>close</button>
						</form>
					</dialog>
					<button onClick={() => window.my_modal_6.showModal()}>
						<div className="flex items-baseline">
							<div>
								<svg height="20" width="20">
									<circle cx="12" cy="12" r="6" fill="#E31A1C" stroke="black" />
								</svg>
							</div>
							<div className="flex-col ml-3 text-start">
								<p>126 - 150</p>
								<p>{`${iniBahaya.length} Kelurahan`}</p>
							</div>
						</div>
					</button>
					<dialog id="my_modal_6" className="modal">
						<form method="dialog" className="modal-box rounded-md bg-[#4F709C] text-white scroll-smooth will-change-scroll h-96">
							<div className="overflow-x-auto">
								<table className="table">
									{/* head */}
									<thead>
										<tr className="font-bold text-sm text-white border-b-slate-400">
											<th>No</th>
											<th>Kelurahan</th>
											<th>Jumlah Kasus</th>
											<th>Tingkat Kerentanan</th>
										</tr>
									</thead>
									<tbody>
										{/* row 1 */}
										<tr className="text-center border-b-transparent">
											<th>1</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Rentan</td>
										</tr>
										{/* row 2 */}
										<tr className="text-center border-b-transparent">
											<th>2</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
										{/* row 3 */}
										<tr className="text-center border-b-transparent">
											<th>3</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Cukup Rentan</td>
										</tr>
										{/* row 4 */}
										<tr className="text-center border-b-transparent">
											<th>4</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Sangat Rentan</td>
										</tr>
										{/* row 5 */}
										<tr className="text-center border-b-transparent">
											<th>5</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
										{/* row 3 */}
										<tr className="text-center border-b-transparent">
											<th>3</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Cukup Rentan</td>
										</tr>
										{/* row 4 */}
										<tr className="text-center border-b-transparent">
											<th>4</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Sangat Rentan</td>
										</tr>
										{/* row 5 */}
										<tr className="text-center border-b-transparent">
											<th>5</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
						<form method="dialog" className="modal-backdrop">
							<button>close</button>
						</form>
					</dialog>
					<button onClick={() => window.my_modal_7.showModal()}>
						<div className="flex items-baseline">
							<div>
								<svg height="20" width="20">
									<circle cx="12" cy="12" r="6" fill="#BD0026" stroke="black" />
								</svg>
							</div>
							<div className="flex-col ml-3 text-start">
								<p>151 - 170</p>
								<p>{`${rentanBanget.length} Kelurahan`}</p>
							</div>
						</div>
					</button>
					<dialog id="my_modal_7" className="modal">
						<form method="dialog" className="modal-box rounded-md bg-[#4F709C] text-white scroll-smooth will-change-scroll h-96">
							<div className="overflow-x-auto">
								<table className="table">
									{/* head */}
									<thead>
										<tr className="font-bold text-sm text-white border-b-slate-400">
											<th>No</th>
											<th>Kelurahan</th>
											<th>Jumlah Kasus</th>
											<th>Tingkat Kerentanan</th>
										</tr>
									</thead>
									<tbody>
										{/* row 1 */}
										<tr className="text-center border-b-transparent">
											<th>1</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Rentan</td>
										</tr>
										{/* row 2 */}
										<tr className="text-center border-b-transparent">
											<th>2</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
										{/* row 3 */}
										<tr className="text-center border-b-transparent">
											<th>3</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Cukup Rentan</td>
										</tr>
										{/* row 4 */}
										<tr className="text-center border-b-transparent">
											<th>4</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Sangat Rentan</td>
										</tr>
										{/* row 5 */}
										<tr className="text-center border-b-transparent">
											<th>5</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
										{/* row 3 */}
										<tr className="text-center border-b-transparent">
											<th>3</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Cukup Rentan</td>
										</tr>
										{/* row 4 */}
										<tr className="text-center border-b-transparent">
											<th>4</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Sangat Rentan</td>
										</tr>
										{/* row 5 */}
										<tr className="text-center border-b-transparent">
											<th>5</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
						<form method="dialog" className="modal-backdrop">
							<button>close</button>
						</form>
					</dialog>
					<button onClick={() => window.my_modal_8.showModal()}>
						<div className="flex items-baseline">
							<div>
								<svg height="20" width="20">
									<circle cx="12" cy="12" r="6" fill="#800026" stroke="black" />
								</svg>
							</div>
							<div className="flex-col ml-3 text-start">
								<p>170 ++</p>
								<p>{`${serem.length} Kelurahan`}</p>
							</div>
						</div>
					</button>
					<dialog id="my_modal_8" className="modal">
						<form method="dialog" className="modal-box rounded-md bg-[#4F709C] text-white scroll-smooth will-change-scroll h-96">
							<div className="overflow-x-auto">
								<table className="table">
									{/* head */}
									<thead>
										<tr className="font-bold text-sm text-white border-b-slate-400">
											<th>No</th>
											<th>Kelurahan</th>
											<th>Jumlah Kasus</th>
											<th>Tingkat Kerentanan</th>
										</tr>
									</thead>
									<tbody>
										{/* row 1 */}
										<tr className="text-center border-b-transparent">
											<th>1</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Rentan</td>
										</tr>
										{/* row 2 */}
										<tr className="text-center border-b-transparent">
											<th>2</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
										{/* row 3 */}
										<tr className="text-center border-b-transparent">
											<th>3</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Cukup Rentan</td>
										</tr>
										{/* row 4 */}
										<tr className="text-center border-b-transparent">
											<th>4</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Sangat Rentan</td>
										</tr>
										{/* row 5 */}
										<tr className="text-center border-b-transparent">
											<th>5</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
										{/* row 3 */}
										<tr className="text-center border-b-transparent">
											<th>3</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Cukup Rentan</td>
										</tr>
										{/* row 4 */}
										<tr className="text-center border-b-transparent">
											<th>4</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Sangat Rentan</td>
										</tr>
										{/* row 5 */}
										<tr className="text-center border-b-transparent">
											<th>5</th>
											<td className="text-start">Kelurahan Ngaliyan</td>
											<td>20</td>
											<td>Tidak Rentan</td>
										</tr>
									</tbody>
								</table>
							</div>
						</form>
						<form method="dialog" className="modal-backdrop">
							<button>close</button>
						</form>
					</dialog>

					{/* ini model dropdown */}
					{/* <div className="dropdown dropdown-hover">
						<label tabIndex={0} className="cursor-pointer">
							<div className="flex items-baseline">
								<div>
									<svg height="20" width="20">
										<circle cx="12" cy="12" r="6" fill="#FFEDA0" stroke="black" />
									</svg>
								</div>
								<div className="flex-col ml-3">
									<p>0 - 0</p>
									<p>{`${rendah.length} Kelurahan`}</p>
								</div>
							</div>
						</label>
						<ul tabIndex={0} className="dropdown-content p-3 shadow-xl border-[#F6F6F6] border-2 bg-white rounded-md w-56 ml-3">
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Cangkiran</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Wonolopo</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Manyaran</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Karanganyar gunung</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Pedurungan Tengah</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Tambak Harjo</li>
						</ul>
					</div>
					<div className="dropdown dropdown-hover">
						<label tabIndex={0} className="cursor-pointer">
							<div className="flex items-baseline">
								<div>
									<svg height="20" width="20">
										<circle cx="12" cy="12" r="6" fill="#FED976" stroke="black" />
									</svg>
								</div>
								<div className="flex-col ml-3">
									<p>1 - 25</p>
									<p>{`${lumayan.length} Kelurahan`}</p>
								</div>
							</div>
						</label>
						<ul tabIndex={0} className="dropdown-content p-3 shadow-xl border-[#F6F6F6] border-2 bg-white rounded-md w-56 ml-3">
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Cangkiran</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Wonolopo</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Manyaran</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Karanganyar gunung</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Pedurungan Tengah</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Tambak Harjo</li>
						</ul>
					</div>
					<div className="dropdown dropdown-hover">
						<label tabIndex={0} className="cursor-pointer">
							<div className="flex items-baseline">
								<div>
									<svg height="20" width="20">
										<circle cx="12" cy="12" r="6" fill="#FEB24C" stroke="black" />
									</svg>
								</div>
								<div className="flex-col ml-3">
									<p>26 - 50</p>
									<p>{`${cukup.length} Kelurahan`}</p>
								</div>
							</div>
						</label>
						<ul tabIndex={0} className="dropdown-content p-3 shadow-xl border-[#F6F6F6] border-2 bg-white rounded-md w-56 ml-3">
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Cangkiran</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Wonolopo</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Manyaran</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Karanganyar gunung</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Pedurungan Tengah</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Tambak Harjo</li>
						</ul>
					</div>
					<div className="dropdown dropdown-hover">
						<label tabIndex={0} className="cursor-pointer">
							<div className="flex items-baseline">
								<div>
									<svg height="20" width="20">
										<circle cx="12" cy="12" r="6" fill="#FD8D3C" stroke="black" />
									</svg>
								</div>
								<div className="flex-col ml-3">
									<p>51 - 80</p>
									<p>{`${agakRentan.length} Kelurahan`}</p>
								</div>
							</div>
						</label>
						<ul tabIndex={0} className="dropdown-content p-3 shadow-xl border-[#F6F6F6] border-2 bg-white rounded-md w-56 ml-3">
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Cangkiran</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Wonolopo</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Manyaran</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Karanganyar gunung</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Pedurungan Tengah</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Tambak Harjo</li>
						</ul>
					</div>
					<div className="dropdown dropdown-hover">
						<label tabIndex={0} className="cursor-pointer">
							<div className="flex items-baseline">
								<div>
									<svg height="20" width="20">
										<circle cx="12" cy="12" r="6" fill="#FC4E2A" stroke="black" />
									</svg>
								</div>
								<div className="flex-col ml-3">
									<p>81 - 125</p>
									<p>{`${rentan.length} Kelurahan`}</p>
								</div>
							</div>
						</label>
						<ul tabIndex={0} className="dropdown-content p-3 shadow-xl border-[#F6F6F6] border-2 bg-white rounded-md w-56 ml-3">
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Cangkiran</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Wonolopo</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Manyaran</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Karanganyar gunung</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Pedurungan Tengah</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Tambak Harjo</li>
						</ul>
					</div>
					<div className="dropdown dropdown-hover">
						<label tabIndex={0} className="cursor-pointer">
							<div className="flex items-baseline">
								<div>
									<svg height="20" width="20">
										<circle cx="12" cy="12" r="6" fill="#E31A1C" stroke="black" />
									</svg>
								</div>
								<div className="flex-col ml-3">
									<p>126 - 150</p>
									<p>{`${iniBahaya.length} Kelurahan`}</p>
								</div>
							</div>
						</label>
						<ul tabIndex={0} className="dropdown-content p-3 shadow-xl border-[#F6F6F6] border-2 bg-white rounded-md w-56 ml-3">
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Cangkiran</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Wonolopo</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Manyaran</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Karanganyar gunung</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Pedurungan Tengah</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Tambak Harjo</li>
						</ul>
					</div>
					<div className="dropdown dropdown-hover">
						<label tabIndex={0} className="cursor-pointer">
							<div className="flex items-baseline">
								<div>
									<svg height="20" width="20">
										<circle cx="12" cy="12" r="6" fill="#BD0026" stroke="black" />
									</svg>
								</div>
								<div className="flex-col ml-3">
									<p>151 - 170</p>
									<p>{`${rentanBanget.length} Kelurahan`}</p>
								</div>
							</div>
						</label>
						<ul tabIndex={0} className="dropdown-content p-3 shadow-xl border-[#F6F6F6] border-2 bg-white rounded-md w-56 ml-3">
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Cangkiran</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Wonolopo</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Manyaran</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Karanganyar gunung</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Pedurungan Tengah</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Tambak Harjo</li>
						</ul>
					</div>
					<div className="dropdown dropdown-hover">
						<label tabIndex={0} className="cursor-pointer">
							<div className="flex items-baseline">
								<div>
									<svg height="20" width="20">
										<circle cx="12" cy="12" r="6" fill="#800026" stroke="black" />
									</svg>
								</div>
								<div className="flex-col ml-3">
									<p>170 ++</p>
									<p>{`${serem.length} Kelurahan`}</p>
								</div>
							</div>
						</label>
						<ul tabIndex={0} className="dropdown-content p-3 shadow-xl border-[#F6F6F6] border-2 bg-white rounded-md w-56 ml-3">
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Cangkiran</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Wonolopo</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Manyaran</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Karanganyar gunung</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Pedurungan Tengah</li>
							<li className="bg-[#F6F6F6] mb-1 pl-5 p-2 rounded-lg">Tambak Harjo</li>
						</ul>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Map;
