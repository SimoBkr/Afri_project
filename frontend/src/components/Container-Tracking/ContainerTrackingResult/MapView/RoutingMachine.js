import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-google";
import { withLeaflet } from "react-leaflet";
import './map_style_container.css';


class Routing extends MapLayer {
  createLeafletElement() {

    const { map, context_container } = this.props;
    var redIcon = new L.divIcon({
      className: "icon_signal_red",
      iconSize: [20, 20],
      iconAnchor: [12, 10],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    var greenIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    let leafletElement = L.Routing.control({
      waypoints: context_container.dataContainer.data.locations.map(latlong => L.latLng(latlong.lat, latlong.lng)),
      lineOptions: {
        styles: [
          {
            color: "green",
            opacity: 0.6,
            weight: 3,
            className: "animate"
          }
        ]
      },
      createMarker: function (i, wp) {
        if (i === 0) {
          return L.marker(wp.latLng, { icon: redIcon }).bindPopup(`<b>${context_container.dataContainer.data.locations[i].name + ", " + context_container.dataContainer.data.locations[i].country}</b>`).openPopup();
        } 
        else {
          return L.marker(wp.latLng, { icon: greenIcon}).bindPopup(`<b>${context_container.dataContainer.data.locations[i].name + ", " + context_container.dataContainer.data.locations[i].country}</b>`).openPopup();
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