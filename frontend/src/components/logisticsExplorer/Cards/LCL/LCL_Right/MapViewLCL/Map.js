import React, { Component } from "react";
import { Map, TileLayer, withLeaflet, MapControl } from "react-leaflet";
import Routing from "./RoutingMachine";
import "./style_lcl.css";

class MapComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      zoom: 6,
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
    const { zoom } = this.state;
    const { shipment } = this.props;

    return (
      <Map center={[shipment.portFrom.lat, shipment.portFrom.lng]} zoom={zoom} ref={this.saveMap} className="style_margin_map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {this.state.isMapInit && <Routing map={this.map} shipment={shipment}/>}
      </Map>
    );
  }
}

export default MapComponent;