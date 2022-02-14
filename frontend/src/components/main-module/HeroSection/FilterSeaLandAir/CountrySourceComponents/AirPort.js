import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Spin } from 'antd';

function AirPort(props) {

    const { resultPorts, setformData, formData, loading, displayComponentsSource, setdisplayComponentsSource, latlng, setlatlng } = props;

    const showMap = () => {
        setdisplayComponentsSource({
            ...displayComponentsSource,
            displayMapPort: true
        })
    }

    const hidePortsMap = () => {
        setdisplayComponentsSource({
            ...displayComponentsSource,
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
                                setlatlng({ ...latlng, latFrom: resultPorts.cityInfo.lat, lngFrom: resultPorts.cityInfo.lng })
                            }}
                            onClick={() => {
                                setformData({ ...formData, countrySource: resultPorts.cityInfo.name + " ," + resultPorts.cityInfo.name });
                                hidePortsMap();
                            }}
                        >
                            <div className="listGroup">
                                <img src="img/cityInfo.png" alt="" style={{ width: "30px", height: "30px" }} />
                                <div>
                                    <p className="font-weight-bold mb-0 ml-2">{" " + resultPorts.cityInfo.name}</p>
                                    <p className="font-weight-normal mt-0 ml-2 mb-0">{resultPorts.cityInfo.name + " ,Rabat" }</p>
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
                                    setlatlng({ ...latlng, latFrom: port.lat, lngFrom: port.lng })
                                }}
                                onClick={() => {
                                    setformData({ ...formData, countrySource: "Port Of " + port.name + " ," + port.name });
                                    hidePortsMap();
                                }}
                            >
                                <div className="listGroup">
                                    <img src="img/port.jpg" alt="" style={{ width: "30px", height: "30px" }} />
                                    <div>
                                        <p className="font-weight-bold mb-0 ml-2">{" " + port.name}</p>
                                        <p className="font-weight-normal mt-0 ml-2 mb-0">{" " + " Port Of " + port.name}</p>
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
                                    setlatlng({ ...latlng, latFrom: port.lat, lngFrom: port.lng })
                                }}
                                onClick={() => {
                                    setformData({ ...formData, countrySource: "AirPort Of " + port.name + " ," + port.name });
                                    hidePortsMap();
                                }} >
                                <div className="listGroup">
                                    <img src="img/airport.png" alt="" style={{ width: "30px", height: "30px" }} />
                                    <div>
                                        <p className="font-weight-bold mb-0 ml-2">{" " + port.name}</p>
                                        <p className="font-weight-normal mt-0 ml-2 mb-0">{" " + " AirPort Of " + port.name}</p>
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