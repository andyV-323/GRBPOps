import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';

const NonGeographicalMap = ({
  onClose,
  bounds,
  locationsInProvince,
  imgURL,
}) => {
  const mapRef = useRef(null);
  const coordinatesRef = useRef(null);
  useEffect(() => {
    if (!bounds || !imgURL) {
      return;
    }

    const map = L.map(mapRef.current, {
      center: [bounds[1][0] / 2, bounds[1][1] / 2],
      zoom: -1,
      crs: L.CRS.Simple,
      dragging: true,
      zoomControl: false, // Disable zoom control
      scrollWheelZoom: false, // Disable scroll wheel zoom
    });
    // Since zooming is disabled, setting a fixed zoom level that won't change.
    map.setMinZoom(map.getZoom());
    map.setMaxZoom(map.getZoom());
    L.imageOverlay(imgURL, bounds).addTo(map);

    locationsInProvince.forEach((mark) => {
      L.circleMarker(mark.coordinates, {
        radius: 50, // Radius in pixels
        fillColor: 'white',
        color: 'cyan',
        weight: 5,
        opacity: 1,
        fillOpacity: 0.3,
      })

        .bindPopup(`<b>${mark.name}</b><br>${mark.description}.`, {
          maxWidth: 200,
          className: 'custom-popup',
        })
        .addTo(map);
    });

    const coordinatesControl = L.control({
      position: 'bottomright',
    });

    coordinatesControl.onAdd = () => {
      const container = L.DomUtil.create('div', 'coordinates-container');
      coordinatesRef.current = container;
      return container;
    };

    coordinatesControl.updateCoordinates = (latlng) => {
      if (coordinatesRef.current) {
        coordinatesRef.current.textContent = `Latitude: ${latlng.lat.toFixed(
          0
        )}, Longitude: ${latlng.lng.toFixed(0)}`;
      }
    };

    coordinatesControl.addTo(map);

    map.on('mousemove', (e) => {
      coordinatesControl.updateCoordinates(e.latlng);
    });

    return () => {
      map.remove();
    };
  }, [bounds, locationsInProvince, imgURL]);

  return (
    <div className="map">
      <button
        className="bg-gray-100 hover:bg-cyan-200 border border-gray-300 rounded-lg p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
        onClick={onClose}
      >
        X
      </button>

      <div
        ref={mapRef}
        id="leaflet-map"
        style={{ background: 'black', width: '800px', height: '700px' }}
      ></div>
    </div>
  );
};

export default NonGeographicalMap;
