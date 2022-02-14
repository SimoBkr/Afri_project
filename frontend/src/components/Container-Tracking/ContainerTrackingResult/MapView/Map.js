import React, { Component, useContext } from "react";
import { Map, TileLayer, withLeaflet, MapControl } from "react-leaflet";
import Routing from "./RoutingMachine";
import '../../ContainerTrackingMain.css'
import './map_style_container.css';
import { ContextContainer } from "../../../../contexts/ContextContainer";

class MapComponent extends React.Component {

  static contextType = ContextContainer

  constructor() {
    super();
    this.state = {
      zoom: 10,
      isMapInit: false
    };
  }

  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true
    });
  };

  render() {
    const context_container = this.context;
    const { zoom } = this.state;
    const position = [context_container.dataContainer.data.locations[0].lat, context_container.dataContainer.data.locations[0].lng];

    return (
      <Map center={position} zoom={zoom} ref={this.saveMap} scrollWheelZoom={true} className="map_container_tracking_style">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {this.state.isMapInit && <Routing map={this.map} context_container={context_container}/>}
      </Map>
    );
  }
}

export default MapComponent;