import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { statesData } from "../geojson/data";
import { getLocationById } from "../store/actions/location";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [onSelect, setOnSelect] = useState(false);
  const [modal, setModal] = useState(false);
  const { data, dataById, totalPas, survei } = useSelector(
    (state) => state.locationReducers
  );

  //   get response from api get location by id
  const getById = async (id) => {
    await dispatch(getLocationById(id))
      .then((response) => ({ response }))
      .catch((error) => ({ error }));
  };

  const rendah = data.filter((data) => data.jumlah_pasien === 0);
  const lumayan = data.filter(
    (data) => data.jumlah_pasien < 25 && data.jumlah_pasien > 0
  );
  const cukup = data.filter(
    (data) => data.jumlah_pasien < 50 && data.jumlah_pasien > 25
  );
  const agakRentan = data.filter(
    (data) => data.jumlah_pasien < 80 && data.jumlah_pasien > 50
  );
  const rentan = data.filter(
    (data) => data.jumlah_pasien < 125 && data.jumlah_pasien > 80
  );
  const iniBahaya = data.filter(
    (data) => data.jumlah_pasien < 150 && data.jumlah_pasien > 125
  );
  const rentanBanget = data.filter(
    (data) => data.jumlah_pasien < 170 && data.jumlah_pasien > 150
  );
  const serem = data.filter((data) => data.jumlah_pasien > 170);

  // console.log(cukup);

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
      colors = "#800026";
    } else if (totalData > 150) {
      colors = "#BD0026";
    } else if (totalData > 125) {
      colors = "#E31A1C";
    } else if (totalData > 80) {
      colors = "#FC4E2A";
    } else if (totalData > 50) {
      colors = "#FD8D3C";
    } else if (totalData > 25) {
      colors = "#FEB24C";
    } else if (totalData > 0) {
      colors = "#FED976";
    } else {
      colors = "#FFEDA0";
    }
    return {
      fillColor: colors,
      weight: 1,
      opacity: 1,
      color: "white",
      dashArray: "2",
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
      dashArray: "",
      color: "black",
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
    navigate("/details", {
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

  const modalHandler = (range) => {
    setModal(range);
  };

  // console.log(modal)
  //   setting for mapping use leaflet (DONE)

  return (
    <>
      <div id="map">
        <MapContainer
          center={center}
          // maxZoom={11.5}
          zoom={11.5}
          style={{ width: "screen", height: "80vh" }}
        >
          <div className="flex flex-row-reverse min-[240px]:hidden md:flex pt-20 pr-7">
            <div className="card bg-white w-60 shadow-xl z-[999]">
              <div className="px-5 py-4">
                {onSelect ? (
                  <>
                    <h2 className=" text-lg font-bold">
                      {dataById.nama_kelurahan}
                    </h2>
                    <p className="text-sm">Jumlah Kasus: {totalPas}</p>
                    <div className="mt-3">
                      <div className="flex justify-between">
                        <span>Tingkat Literasi</span>
                        <p>{Math.round(survei.persentase_literasi * 100)}%</p>
                      </div>
                      <progress
                        className="progress progress-primary w-full"
                        value={Math.round(survei.persentase_literasi * 100)}
                        max="100"
                      ></progress>
                      <div className="flex justify-between">
                        <span>Stigma Masyarakat</span>
                        <p>{Math.round(survei.persentase_stigma * 100)}%</p>
                      </div>
                      <progress
                        className="progress progress-primary w-full"
                        value={Math.round(survei.persentase_stigma * 100)}
                        max="100"
                      ></progress>
                      <div className="flex justify-between">
                        <span>Tingkat Pengetahuan</span>
                        <p>
                          {Math.round(survei.persentase_pengetahuan * 100)}%
                        </p>
                      </div>
                      <progress
                        className="progress progress-primary w-full"
                        value={Math.round(survei.persentase_pengetahuan * 100)}
                        max="100"
                      ></progress>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className=" text-lg font-bold">Data</h2>
                    <p className="text-sm">
                      Hover on each county for more details
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          <TileLayer
            url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=sO17qhXSqu9o3tn00q0L"
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />
          <GeoJSON
            data={statesData}
            onEachFeature={onEachFeature}
            style={style}
          />
        </MapContainer>
        <div className="mt-2">
          <h1 className="font-semibold">Jumlah Kasus</h1>
          <div className="grid min-[240px]:grid-cols-2 md:flex gap-5 mt-1">
            {/* ini model modal */}
            <button onClick={() => modalHandler(rendah)}>
              <div className="flex items-baseline">
                <div>
                  <svg height="20" width="20">
                    <circle
                      cx="12"
                      cy="12"
                      r="6"
                      fill="#FFEDA0"
                      stroke="black"
                    />
                  </svg>
                </div>
                <div className="flex-col ml-3 text-start">
                  <p>0 - 0</p>
                  <p>{`${rendah.length} Kelurahan`}</p>
                </div>
              </div>
            </button>

            <button onClick={() => modalHandler(lumayan)}>
              <div className="flex items-baseline">
                <div>
                  <svg height="20" width="20">
                    <circle
                      cx="12"
                      cy="12"
                      r="6"
                      fill="#FED976"
                      stroke="black"
                    />
                  </svg>
                </div>
                <div className="flex-col ml-3 text-start">
                  <p>1 - 25</p>
                  <p>{`${lumayan.length} Kelurahan`}</p>
                </div>
              </div>
            </button>
            <button onClick={() => modalHandler(cukup)}>
              <div className="flex items-baseline">
                <div>
                  <svg height="20" width="20">
                    <circle
                      cx="12"
                      cy="12"
                      r="6"
                      fill="#FEB24C"
                      stroke="black"
                    />
                  </svg>
                </div>
                <div className="flex-col ml-3 text-start">
                  <p>26 - 50</p>
                  <p>{`${cukup.length} Kelurahan`}</p>
                </div>
              </div>
            </button>
            <button onClick={() => modalHandler(agakRentan)}>
              <div className="flex items-baseline">
                <div>
                  <svg height="20" width="20">
                    <circle
                      cx="12"
                      cy="12"
                      r="6"
                      fill="#FD8D3C"
                      stroke="black"
                    />
                  </svg>
                </div>
                <div className="flex-col ml-3 text-start">
                  <p>51 - 80</p>
                  <p>{`${agakRentan.length} Kelurahan`}</p>
                </div>
              </div>
            </button>
            <button onClick={() => modalHandler(rentan)}>
              <div className="flex items-baseline">
                <div>
                  <svg height="20" width="20">
                    <circle
                      cx="12"
                      cy="12"
                      r="6"
                      fill="#FC4E2A"
                      stroke="black"
                    />
                  </svg>
                </div>
                <div className="flex-col ml-3 text-start">
                  <p>81 - 125</p>
                  <p>{`${rentan.length} Kelurahan`}</p>
                </div>
              </div>
            </button>

            <button onClick={() => modalHandler(iniBahaya)}>
              <div className="flex items-baseline">
                <div>
                  <svg height="20" width="20">
                    <circle
                      cx="12"
                      cy="12"
                      r="6"
                      fill="#E31A1C"
                      stroke="black"
                    />
                  </svg>
                </div>
                <div className="flex-col ml-3 text-start">
                  <p>126 - 150</p>
                  <p>{`${iniBahaya.length} Kelurahan`}</p>
                </div>
              </div>
            </button>

            <button onClick={() => modalHandler(rentanBanget)}>
              <div className="flex items-baseline">
                <div>
                  <svg height="20" width="20">
                    <circle
                      cx="12"
                      cy="12"
                      r="6"
                      fill="#BD0026"
                      stroke="black"
                    />
                  </svg>
                </div>
                <div className="flex-col ml-3 text-start">
                  <p>151 - 170</p>
                  <p>{`${rentanBanget.length} Kelurahan`}</p>
                </div>
              </div>
            </button>

            <button onClick={() => modalHandler(serem)}>
              <div className="flex items-baseline">
                <div>
                  <svg height="20" width="20">
                    <circle
                      cx="12"
                      cy="12"
                      r="6"
                      fill="#800026"
                      stroke="black"
                    />
                  </svg>
                </div>
                <div className="flex-col ml-3 text-start">
                  <p>170 ++</p>
                  <p>{`${serem.length} Kelurahan`}</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {modal && (
        <div class="fixed inset-0 flex items-center justify-center z-[1000]">
          <div class="modal-box rounded-md bg-[#4F709C] text-white scroll-smooth will-change-scroll h-96 relative">
            <div class="overflow-x-auto">
              <table class="table">
                <thead>
                  <tr class="font-bold text-sm text-white border-b-slate-400">
                    <th>No</th>
                    <th>Kelurahan</th>
                    <th>Jumlah Kasus</th>
                    <th>Tingkat Kerentanan</th>
                  </tr>
                </thead>
                <tbody>
                  {modal &&
                    modal?.map((item, no) => (
                      <tr className="text-center border-b-transparent">
                        <th>{no + 1}</th>
                        <td className="text-start">{item.nama_kelurahan}</td>
                        <td>{item.jumlah_pasien}</td>
                        <td>Rentan</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="modal-backdrop fixed inset-0 bg-black opacity-50"
            onClick={() => setModal(false)}
          ></div>
        </div>
      )}
    </>
  );
};

export default Map;
