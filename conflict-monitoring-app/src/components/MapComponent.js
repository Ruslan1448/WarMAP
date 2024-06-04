// src/components/MapComponent.js
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import countries from './countries.json';

const countryStyles = {
  default: {
    fillColor: 'green',
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
  },
  conflict: {
    fillColor: 'red',
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
  }
};

const conflictCountries = [
  "Afghanistan",
  "Syria",
  "Yemen",
  "Russia",
  "Ukraine",
  "Sudan",
  "South Sudan",
  "Libya",
  "Somalia",
  "Central African Republic",
  "Mali",
  "Ethiopia",
  "Iraq",
  "Democratic Republic of the Congo",
  "Myanmar",
  "Nigeria",
  "Cameroon",
  "Mozambique",
  "Burkina Faso",
  "Colombia",
  "Venezuela",
  "Palestine",
  "Israel",
  "Armenia",
  "Azerbaijan",
  "Pakistan",
  "India",
  "Kashmir"
];

const onEachCountry = (country, layer) => {
    console.log(country)
  const countryName = country.properties.admin;
  layer.bindPopup(countryName);

  if (conflictCountries.includes(countryName)) {
    layer.setStyle(countryStyles.conflict);
  } else {
    layer.setStyle(countryStyles.default);
  }

  layer.on({
    click: () => {
    //   xalert(`Country: ${countryName}`);
    }
  });
};

const SetMaxBounds = () => {
  const map = useMap();
  useEffect(() => {
    const bounds = [[-90, -180], [90, 180]]; // Межі світу
    map.setMaxBounds(bounds);
  }, [map]);
  return null;
};

const MapComponent = () => {
  return (
    <MapContainer center={[20, 0]} zoom={2} minZoom={2} style={{ height: '100vh', width: '100%' }}>
      <SetMaxBounds />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON data={countries} onEachFeature={onEachCountry} />
    </MapContainer>
  );
};

export default MapComponent;
