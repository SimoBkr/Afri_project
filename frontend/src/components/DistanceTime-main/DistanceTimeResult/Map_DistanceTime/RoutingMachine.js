import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-google";
import { withLeaflet } from "react-leaflet";
import './map_style_distance.css';
import data from '../distance_api.json';

class Routing extends MapLayer {

  createLeafletElement() {
    const { map } = this.props;

    var greenIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    var redIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    let leafletElement = L.Routing.control({
      waypoints: [
        L.latLng(data.road_from.lat, data.road_from.lng),
        L.latLng(data.sea.from_lat, data.sea.from_lng),
        L.latLng(data.road_to.lat, data.road_to.lng),
        L.latLng(data.sea.to_lat, data.sea.to_lng),
      ],
      lineOptions: {
        styles: [
          {
            color: "green",
            opacity: 0.6,
            weight: 4,
            className: "animate"
          }
        ]
      },
      createMarker: function (i, wp, nWps) {
        if (i === 0) {
          return L.marker(wp.latLng, { icon: greenIcon }).bindPopup(`<b>${data.sea.from_name}</b>`).openPopup();
        }
        else if (i === 1) {
          return L.marker(wp.latLng, { icon: redIcon }).bindPopup(`<b>${data.sea.to_name}</b>`).openPopup();
        }
        else if (i === 2) {
          return L.marker(wp.latLng, { icon: greenIcon }).bindPopup(`<b>${data.sea.to_name}</b>`).openPopup();
        }
        else if (i === nWps - 1) {
          return L.marker(wp.latLng, { icon: redIcon }).bindPopup(`<b>${data.sea.to_name}</b>`).openPopup();
        }
      },
    }).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
