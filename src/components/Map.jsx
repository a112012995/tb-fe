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
				<h1 className='font-semibold'>Jumlah Kasus</h1>
				<div className="flex gap-5 mt-1">
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
				</div>
			</div>
		</div>
	);
};

export default Map;
