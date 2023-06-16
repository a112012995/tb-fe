import React from 'react';
import { MapContainer, Polygon, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { statesData } from '../geojson/data';

const Map = () => {
	const center = [-7.019679560453046, 110.39818740013446];

	return (
		<div>
			<MapContainer center={center} zoom={12} style={{ width: 'screen', height: '80vh' }}>
				<TileLayer
					url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=sO17qhXSqu9o3tn00q0L"
					attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
				/>
				{statesData.features.map((state) => {
					const coordinate = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);

					return (
						<Polygon
							pathOptions={{
								fillColor: '#FD8D3C',
								fillOpacity: 0.7,
								weight: 2,
								opacity: 1,
								dashArray: 3,
								color: 'white',
							}}
							positions={coordinate}
							eventHandlers={{
								mouseover: (e) => {
									const layer = e.target;
									layer.setStyle({
										fillOpacity: 1,
										weight: 5,
										dashArray: '',
										color: 'black',
										fillColor: '#D45962',
									});
								},
								mouseout: (e) => {
									const layer = e.target;
									layer.setStyle({
										fillOpacity: 0.7,
										weight: 2,
										dashArray: '3',
										color: 'white',
										fillColor: '#FD8D3C',
									});
								},
								click: (e) => {},
							}}
						/>
					);
				})}
			</MapContainer>
			<div className="mt-20">
				<h1>Jumlah Kasus</h1>
				<div className="flex gap-5 mt-4">
					<div className="flex items-baseline">
						<div>
							<svg height="20" width="20">
								<circle cx="12" cy="12" r="6" fill="#F8D7BE" stroke="black" />
							</svg>
						</div>
						<div className="flex-col ml-3">
							<p>0 - 0</p>
							<p>( 0 Kota/Kabupaten)</p>
						</div>
					</div>
					<div className="flex items-baseline">
						<div>
							<svg height="20" width="20">
								<circle cx="12" cy="12" r="6" fill="#EEBD97" stroke="black" />
							</svg>
						</div>
						<div className="flex-col ml-3">
							<p>1 - 215</p>
							<p>( 18 Kota/Kabupaten)</p>
						</div>
					</div>
					<div className="flex items-baseline">
						<div>
							<svg height="20" width="20">
								<circle cx="12" cy="12" r="6" fill="#BB763A" stroke="black" />
							</svg>
						</div>
						<div className="flex-col ml-3">
							<p>216 - 430</p>
							<p>( 8 Kota/Kabupaten)</p>
						</div>
					</div>
					<div className="flex items-baseline">
						<div>
							<svg height="20" width="20">
								<circle cx="12" cy="12" r="6" fill="#8C4F16" stroke="black" />
							</svg>
						</div>
						<div className="flex-col ml-3">
							<p>431 - 645</p>
							<p>( 0 Kota/Kabupaten)</p>
						</div>
					</div>
					<div className="flex items-baseline">
						<div>
							<svg height="20" width="20">
								<circle cx="12" cy="12" r="6" fill="#723F0D" stroke="black" />
							</svg>
						</div>
						<div className="flex-col ml-3">
							<p>646 - 860</p>
							<p>( 0 Kota/Kabupaten)</p>
						</div>
					</div>
					<div className="flex items-baseline">
						<div>
							<svg height="20" width="20">
								<circle cx="12" cy="12" r="6" fill="#572F09" stroke="black" />
							</svg>
						</div>
						<div className="flex-col ml-3">
							<p>861 - 1.291</p>
							<p>( 2 Kota/Kabupaten)</p>
						</div>
					</div>
				</div>
				{/* <div className="card bg-white shadow-xl">
					<div className="card-body">
						<h2 className="card-title">Keterangan</h2>
						<div className="flex gap-10">
							<div className="flex items-baseline">
								<div>
									<svg height="20" width="20">
										<circle cx="12" cy="12" r="6" fill="#2DC937" />
									</svg>
								</div>
								<div className="flex-col ml-3">
									<p>Rendah</p>
									<p>0 - 10</p>
								</div>
							</div>
							<div className="flex items-baseline">
								<div>
									<svg height="20" width="20">
										<circle cx="12" cy="12" r="6" fill="#DB7B2B" />
									</svg>
								</div>
								<div className="flex-col ml-3">
									<p>Sedang</p>
									<p>11 - 25</p>
								</div>
							</div>
							<div className="flex items-baseline">
								<div>
									<svg height="20" width="20">
										<circle cx="12" cy="12" r="6" fill="#CC3232" />
									</svg>
								</div>
								<div className="flex-col ml-3">
									<p>Tinggi</p>
									<p>26 - 70</p>
								</div>
							</div>
						</div>
					</div> */}
			</div>
		</div>
	);
};

export default Map;
