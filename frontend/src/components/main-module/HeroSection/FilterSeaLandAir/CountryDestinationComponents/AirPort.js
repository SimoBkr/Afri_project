import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Spin } from 'antd';

function AirPort(props) {

    const { resultPorts, setformData, formData, loading, displayComponentsDestination, setdisplayComponentsDestination, 
        latlng, setlatlng } = props;

    const showMap = () => {
        setdisplayComponentsDestination({
            ...displayComponentsDestination,
            displayMapPort: true
        })
    }

    const hidePortsMap = () => {
        setdisplayComponentsDestination({
            ...displayComponentsDestination,
            displayAirPorts: false,
            displayMapPort: false
        })
    }

    return (
        <Scrollbars style={{ height: "314px", borderRadius: "10px" }}>
            <Spin spinning={loading} >
                {resultPorts.type === "city" && (
                    <div>
                        <div className="card card-body card-border-none"
                            onMouseEnter={() => {
                                showMap();
                                setlatlng({ ...latlng, latTo: resultPorts.cityInfo.lat, lngTo: resultPorts.cityInfo.lng })
                            }}
                            onClick={() => {
                                setformData({ ...formData, countryDestination: resultPorts.cityInfo.name + " ," + resultPorts.cName });
                                hidePortsMap();
                            }}
                        >
                            <div className="listGroup">
                                <img src="img/cityInfo.png" alt="" style={{ width: "30px", height: "30px" }} />
                                <div>
                                    <p className="font-weight-bold mb-0 ml-2">{" " + resultPorts.cityInfo.name}</p>
                                    <p className="font-weight-normal mt-0 ml-2 mb-0">{resultPorts.cityInfo.name + " ," + resultPorts.cName}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {resultPorts?.seaPorts?.map((port, i) => {
                    return (
                        <div>
                            <div className="card card-body card-border-none" key={i}
                                onMouseEnter={() => {
                                    showMap();
                                    setlatlng({ ...latlng, latTo: port.lat, lngTo: port.lng })
                                }}
                                onClick={() => {
                                    setformData({ ...formData, countryDestination: "Port Of " + port.name + " ," + resultPorts.cName });
                                    hidePortsMap();
                                }}
                            >
                                <div className="listGroup">
                                    <img src="img/port.jpg" alt="" style={{ width: "30px", height: "30px" }} />
                                    <div>
                                        <p className="font-weight-bold mb-0 ml-2">{" " + port.name}</p>
                                        <p className="font-weight-normal mt-0 ml-2 mb-0">{" " + " Port Of " + resultPorts.cName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {resultPorts?.airPorts?.map((port, i) => {
                    return (
                        <div>
                            <div className="card card-body card-border-none" key={i}
                                onMouseEnter={() => {
                                    showMap();
                                    setlatlng({ ...latlng, latTo: port.lat, lngTo: port.lng })
                                }}
                                onClick={() => {
                                    setformData({ ...formData, countryDestination: "AirPort Of " + port.name + " ," + resultPorts.cName });
                                    hidePortsMap();
                                }} >
                                <div className="listGroup">
                                    <img src="img/airport.png" alt="" style={{ width: "30px", height: "30px" }} />
                                    <div>
                                        <p className="font-weight-bold mb-0 ml-2">{" " + port.name}</p>
                                        <p className="font-weight-normal mt-0 ml-2 mb-0">{" " + " AirPort Of " + resultPorts.cName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Spin>
        </Scrollbars>
    );
}
export default AirPort;