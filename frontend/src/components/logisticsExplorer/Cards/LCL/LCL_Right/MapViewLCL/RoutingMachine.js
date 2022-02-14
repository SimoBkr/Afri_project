import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-google";
import { withLeaflet } from "react-leaflet";
import "./style_lcl.css";

class Routing extends MapLayer {
  createLeafletElement() {
    const { map, shipment } = this.props;
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
        L.latLng(shipment.portFrom.lat, shipment.portFrom.lng),
        L.latLng(shipment.portTo.lat, shipment.portTo.lng)
      ],
      lineOptions: {
        styles: [{
          className: 'animate',
          color: "green"
        }] // Adding animate class
      },
      createMarker: function (i, wp,nWps) {
        if (i == 0) {
          return L.marker(wp.latLng, { icon: greenIcon }).bindPopup(`<b>${shipment.portFrom.name}</b>`).openPopup();
        }
        if (i === nWps - 1) {
          return L.marker(wp.latLng, { icon: greenIcon }).bindPopup(`<b>${shipment.portTo.name}</b>`).openPopup();
        }
      },
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      showAlternatives: false
    }).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);