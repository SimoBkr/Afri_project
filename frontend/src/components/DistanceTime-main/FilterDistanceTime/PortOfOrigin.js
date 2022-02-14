import React, { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Spin } from 'antd';
import { ContextDistanceTime } from '../../../contexts/ContextDistanceTime';

function PortOfOrigin() {

    const context_distance_time = useContext(ContextDistanceTime);

    const onClickPort = (port) => {
        context_distance_time.setformDistanceTime({
            ...context_distance_time.formDistanceTime,
            PortOfOrigin: port.name + ", " + port.country_iso2
        })
        context_distance_time.setdisplayPortOfOrigin(false);
    }

    return (
        <Scrollbars style={{ height: "314px" }}>
            <Spin spinning={context_distance_time.loading} >
                {context_distance_time.resultPorts && context_distance_time.resultPorts.map((port, index) => {
                    return (
                        <div className="card card-body card-border-none" key={index} onClick={() => { onClickPort(port) }}>
                            <div className="listGroup">
                                <span className={port.country_iso2 !== null ? `flag-icon flag-icon-${port.country_iso2.toLowerCase()}` : `flag-icon flag-icon-fr`}></span>
                                <div>
                                    <p className="font-weight-bold mb-0 ml-2">{port.name + " ," + port.country_name}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Spin>
        </Scrollbars >
    );
}
export default PortOfOrigin;