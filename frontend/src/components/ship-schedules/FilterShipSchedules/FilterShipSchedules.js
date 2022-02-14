import React, { useState, useEffect, useContext } from 'react';
import { Select, Form, AutoComplete, DatePicker } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import { ContextShip } from '../../../contexts/ContextShip';
import ShippingLines from './ShippingLines';

function FilterShipSchedules() {

    const { Option } = Select;
    const dateFormat = 'DD-MM-YYYY';
    const context_ship = useContext(ContextShip);

    const ChangeStateformShip = (e, name) => {
        context_ship.setformShip({
            ...context_ship.formShip,
            [name]: e
        })
    }

    const ChangeStateDateShip = (date, dateString) => {
        context_ship.setformShip({
            ...context_ship.formShip,
            dateOfShip: dateString
        })
    }

    const exChangeValuePorts = () => {
        const portOfDeparture = context_ship.formShip.portOfDeparture;
        const portOfArrival = context_ship.formShip.portOfArrival;
        context_ship.setformShip({
            ...context_ship.formShip,
            portOfDeparture: portOfArrival,
            portOfArrival: portOfDeparture
        })
    }

    return (
        <>
            <br /> <br />
            <div>
                <div className="filter_ship_schedules">
                    <div className="container">
                        <div className="filter_ship_row row">
                            <Form
                                name="basic"
                                layout="inline"
                                initialValues={{
                                    remember: true,
                                }}>
                                <div className="distance_right">
                                    <ul className="countryfilter_ship_schedules">
                                        <li className="date_ship_schedules">
                                            <img src="img/Coountry.png" alt="Not Found ..." className="image_left_world_ship_schedules" />
                                        </li>

                                        <li>
                                            <Form.Item name="portOfDeparture" rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input this field!',
                                                },
                                            ]}>
                                                <AutoComplete
                                                    style={{
                                                        width: 210,
                                                    }}
                                                    placeholder="Port Of Departure"
                                                    value={context_ship.formShip.portOfDeparture}
                                                    onChange={(e)=>ChangeStateformShip(e,"portOfDeparture")}
                                                />
                                            </Form.Item>
                                        </li>

                                        <li className="arrowimage_distance_time">
                                            <a onClick={exChangeValuePorts}>
                                                <img src="img/arrows.png" id="arrowid_distance_time"></img>
                                            </a>
                                        </li>

                                        <li className="date_ship_schedules">
                                            <img src="img/Coountry.png" alt="Not Found ..." className="image_left_world_distance_and_time" />
                                        </li>

                                        <li>
                                            <Form.Item name="portOfArrival" rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input this field!',
                                                },
                                            ]}>
                                                <AutoComplete
                                                    style={{
                                                        width: 210,
                                                    }}
                                                    placeholder="Port Of Arrival"
                                                    value={context_ship.formShip.portOfArrival}
                                                    onChange={(e)=>ChangeStateformShip(e,"portOfArrival")}

                                                />
                                            </Form.Item>
                                        </li>

                                    </ul>
                                </div>

                                <div className="distance_right">
                                    <ul className="date_ship">
                                        <li className="date_ship_li">
                                            <img src="img/Date.png" alt="Not Found ..." className="image-left" />
                                        </li>
                                        <li className="date_ship_li">
                                            <div className="datePicker ant-select-selection">
                                                <DatePicker style={{ width: 150 }} defaultValue={moment(new Date(), dateFormat)} format={dateFormat}
                                                onChange={ChangeStateDateShip}
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="distance_right">
                                    <ul className="weeks_ul">
                                        <li className="weeks_li">
                                            <div className="SelectOptions">
                                                <Select
                                                    showSearch
                                                    placeholder="Weeks"
                                                    className="select_field_weeks"
                                                    onChange={(e)=>ChangeStateformShip(e,"selectWeeks")}
                                                >
                                                    <Option value="1">1 Week</Option>
                                                    <Option value="2">2 Weeks</Option>
                                                    <Option value="3">3 Weeks</Option>
                                                    <Option value="4">4 Weeks</Option>
                                                    <Option value="5">5 Weeks</Option>
                                                    <Option value="6">6 Weeks</Option>
                                                </Select>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="distance_right">
                                    <div className="search_services">
                                        <Form.Item>
                                            <div className="button_search_services_ship" onClick={()=>context_ship.setshippingLinesDiv(!context_ship.shippingLinesDiv)}>
                                                <img id="service_svg" src="/img/service.svg" alt="Not Found ..." />
                                            </div>
                                        </Form.Item>
                                    </div>
                                </div>

                                <div>
                                    <div className="search_ship">
                                        <Form.Item>
                                            <button className="button_search_ship_schedules">
                                                <img id="searchicon" src="img/loop.png" alt="Not Found ..." />
                                            </button>
                                        </Form.Item>
                                    </div>
                                </div>

                                <div>
                                    {context_ship.shippingLinesDiv && 
                                       <div className="shipping_lines_div">
                                           <ShippingLines />
                                       </div>
                                    }
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterShipSchedules;