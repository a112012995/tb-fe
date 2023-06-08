import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { GeoJSON } from "react-leaflet";

const point = [-7.023, 110.391];
const zoom = 11;

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current).setView(point, zoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "",
    }).addTo(map);

    // Fetch boundary data from an API endpoint
    fetch(
      "https://overpass-api.de/api/interpreter?data=%5Bout%3Ajson%5D%3B%0Aarea%5Bname%3D%22Semarang%22%5D-%3E.a%3B%0Arelation%28area.a%29%5Badmin_level%3D9%5D%3B%0Aout%20geom%3B%0A"
    )
      .then((response) => response.json())
      .then((data) => {
        const boundaryGeoJSON = data.elements[0].geometry; // Extract the GeoJSON from the API response

        L.geoJSON(boundaryGeoJSON).addTo(map);
      });
    // TODO: Fix and make it work

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md">
      <div ref={mapRef} className="h-full" />
    </div>
  );
};

export default Map;
