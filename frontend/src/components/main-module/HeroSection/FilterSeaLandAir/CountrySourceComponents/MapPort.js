import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
import iconHover from "../markerHover.png";
import iconDefault from "../markerDefault.jpg";

const markerIconDefault = new L.icon({
  iconUrl: iconDefault,
  iconSize: [25, 20]
});

const markerIconHover = new L.icon({
  iconUrl: iconHover,
  iconSize: [35, 30]
})

function MapPort(props) {

  const { resultPorts, latlng } = props;
  console.log(resultPorts);

  const markerCityInfo = () => {

    if (resultPorts.type === "city") {

      let markerDefault = markerIconDefault;
      if (latlng.latFrom === resultPorts.cityInfo.lat && latlng.lngFrom === resultPorts.cityInfo.lng) {
        markerDefault = markerIconHover;
      }
      return (
        <Marker
          key={`${resultPorts.cityInfo.name}`}
          position={[resultPorts.cityInfo.lat, resultPorts.cityInfo.lng]}
          icon={markerDefault} >
          <Popup>
            <p style={{ fontSize: "20px", color: "#d89216" }}>{resultPorts.cityInfo.name}</p>
          </Popup>
        </Marker>
      )
    }
  };

  const markerPorts = resultPorts.seaPorts.map(location => {

    let markerDefault = markerIconDefault;
    if (latlng.latFrom === location.lat && latlng.lngFrom === location.lng) {
      markerDefault = markerIconHover;
    }
    return (
      <Marker
        key={`${location.name}`}
        position={[location.lat, location.lng]}
        icon={markerDefault} >
        <Popup>
          <p style={{ fontSize: "20px", color: "#d89216" }}>{location.name}</p>
        </Popup>
      </Marker>
    )
  });

  const markerAirPorts = resultPorts.airPorts.map(location => {

    let markerDefault = markerIconDefault;
    if (latlng.latFrom === location.lat && latlng.lngFrom === location.lng) {
      markerDefault = markerIconHover;
    }
    return (
      <Marker
        key={`${location.name}`}
        position={[location.lat, location.lng]}
        icon={markerDefault} >
        <Popup>
          <p style={{ fontSize: "35px", textAlign: "center" }}>{location.name}</p>
        </Popup>
      </Marker>
    )
  });

  return (
    <div>
      <Map style={{ width: "408px", height: "314px", borderRadius: "10px" }} center={[latlng.latFrom, latlng.lngFrom]} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markerCityInfo()}
        {markerPorts}
        {markerAirPorts}
      </Map>
    </div>
  );
}

export default MapPort;
