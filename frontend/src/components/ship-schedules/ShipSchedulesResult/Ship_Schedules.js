import React, { useState } from 'react';
import '../ShipSchedulesMain';
import { Row, Col } from 'antd';
import Collapse from 'react-collapse';
import ship from './ship_schedules.json';
import moment from 'moment';

function Ship_Schedules() {

    const [shipSchedulesActiveButton, setshipSchedulesActiveButton] = useState(false);
    const [showDetailsShip, setshowDetailsShip] = useState(false)
    const activeResult = () => {
        setshipSchedulesActiveButton(!shipSchedulesActiveButton);
        if (shipSchedulesActiveButton) setshowDetailsShip(false);
    }
    const showDetails = () => {
        setshowDetailsShip(!showDetailsShip);
    }

    return (
        <>
            <div className="Week_30" onClick={activeResult}>
                <Row>
                    <Col span={4} className="week_text">Week 30</Col>
                    <Col span={15} className="Transit_Time_days_style">
                        <span className="transit_time_text">Transit time:</span> {ship.response.routes[0].transitTime} days
                    </Col>
                    <Col span={3} className="ml-2 Resultats_23">1 Result</Col>
                    <Col span={1} className="icon_chevron">
                        {shipSchedulesActiveButton ? <i className="fas fa-chevron-up chevron_size_color"></i> : <i className="fas fa-chevron-down chevron_size_color"></i>}
                    </Col>
                </Row>
            </div>
            <Collapse isOpened={shipSchedulesActiveButton}>
                <div className="root_result_ship_schedules">
                    <div className="logo_and_shipping_line">
                        <img src="/img/container.png" className="logo_ship_schedules" />
                        <p className="shipping_line_text_in_result">SEJJ</p>
                    </div>
                    <hr className="hr_horizontal" />
                    <hr className="hr_vertical" />
                    <div className="date_place_texts">
                        <Row>
                            <Col span={8} className="date_text">30 Jul, 2021
                                <div className="place_text">
                                    {ship.response.routes[0].transShipments[0].departure.portName}, {ship.response.routes[0].transShipments[0].departure.portUnloCode.substring(0, 2)}
                                </div>
                            </Col>
                            <Col span={4} className="transit_text">{ship.response.routes[0].transitTime} days</Col>
                            <Col span={6} className="text-right date_text">24 Sep, 2021
                                <div className="place_text">
                                    {ship.response.routes[0].transShipments[ship.response.routes[0].transShipments.length - 1].arrival.portName}, {ship.response.routes[0].transShipments[ship.response.routes[0].transShipments.length - 1].arrival.portUnloCode.substring(0, 2)}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="line_ship_schedules">
                        {ship.response.routes[0].transShipments.map((transShipment, index) => {
                            return (
                                <>
                                    <div key={index} className={transShipment.vesselName === null ? "line_point_land" : "line_point_sea"}>
                                        <span className="point_text">{transShipment.departure.portUnloCode.substring(2, 5)}</span>
                                        <span className="point_icon"></span>
                                    </div>
                                    <hr className={transShipment.vesselName === null ? "line_way_land" : "line_way_sea"} />
                                </>
                            )
                        })}
                        <div className="line_point_land">
                            <span className="point_text">{ship.response.routes[0].transShipments[ship.response.routes[0].transShipments.length - 1].arrival.portUnloCode.substring(2, 5)}</span>
                            <span className="point_icon"></span>
                        </div>
                        <span className="voir_detail_icon_chevron cursor-pointer" onClick={showDetails}>
                            {showDetailsShip ? <i className="fas fa-chevron-up chevron_size_color"></i> : <i className="fas fa-chevron-down chevron_size_color"></i>}
                        </span>
                    </div>
                </div>
            </Collapse>
            <Collapse isOpened={showDetailsShip}>
                <div className="root_detail">
                    <div className="route_details">Route Details</div>
                    {ship.response.routes[0].transShipments.map((transShipment, index) => {
                        return (
                            <div className="ship_schedules_details">
                                <Row>
                                    <Col span={12} className="ship_detail_left">Vessel Name</Col>
                                    <Col span={12} className="ship_detail_right">
                                        {transShipment.vesselName === null ? "N/A" : transShipment.vesselName}
                                    </Col>
                                </Row>
                                <hr className="hr_between_details" />
                                <Row>
                                    <Col span={12} className="ship_detail_left">Voyage</Col>
                                    <Col span={12} className="ship_detail_right">
                                        {transShipment.voyage === null ? "N/A" : transShipment.voyage}
                                    </Col>
                                </Row>
                                <hr className="hr_between_details" />
                                <Row>
                                    <Col span={12} className="ship_detail_left">Service</Col>
                                    <Col span={12} className="ship_detail_right">
                                        {transShipment.service === null ? "N/A" : transShipment.service}
                                    </Col>
                                </Row>
                                <hr className="hr_between_details" />
                                <Row>
                                    <Col span={12} className="ship_detail_left">
                                        {transShipment.departure.portName}, {transShipment.departure.portUnloCode.substring(0, 2)}
                                    </Col>
                                    <Col span={12} className="ship_detail_right_normal">30 Jul, 2021</Col>
                                </Row>
                                <hr className="hr_between_details" />
                                <Row>
                                    <Col span={12} className="ship_detail_left">
                                        {transShipment.arrival.portName}, {transShipment.arrival.portUnloCode.substring(0, 2)}
                                    </Col>
                                    <Col span={12} className="ship_detail_right_normal">31 Jul, 2021</Col>
                                </Row>
                                <hr className="hr_between_details" />
                                <div className="transshipment_detail">
                                    <Row>
                                        <Col span={12} className="ship_detail_left">Transshipment</Col>
                                        <Col span={12} className="ship_detail_right_blue">1 day</Col>
                                    </Row>
                                </div>
                                <hr className="hr_between_details" />
                            </div>
                        )
                    })}
                </div>
            </Collapse>
        </>
    )


}

export default Ship_Schedules;