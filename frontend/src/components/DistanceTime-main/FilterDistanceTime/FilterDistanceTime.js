import React, { useContext } from 'react';
import { Select, AutoComplete, Form, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import '../../../components/main-module/Main.css';
import '../DistanceTimeMain.css';
import { ContextDistanceTime } from '../../../contexts/ContextDistanceTime';
import PortOfOrigin from './PortOfOrigin';

function FilterDistanceTime() {

    const { Option } = Select;
    const context_distance_time = useContext(ContextDistanceTime);

    const HandleChangeSelect = (e, name) => {
        context_distance_time.setformDistanceTime({
            ...context_distance_time.formDistanceTime,
            [name]: e
        })
    }

    const ChangePorts = () => {
        const PortOfDestination = context_distance_time.formDistanceTime.PortOfDestination;
        const PortOfOrigin = context_distance_time.formDistanceTime.PortOfOrigin;
        context_distance_time.setformDistanceTime({
            ...context_distance_time.formDistanceTime,
            PortOfOrigin: PortOfDestination,
            PortOfDestination: PortOfOrigin
        })
    }

    const onChangeAverageSpeed = (value) => {
        context_distance_time.setformDistanceTime({
            ...context_distance_time.formDistanceTime,
            AverageSpeed: value
        })
    }

    // Display Components Of CountrySource 
    const displayPorts = (e) => {
        if (e.length === 0) { context_distance_time.setdisplayPortOfOrigin(false); }
        else { context_distance_time.setdisplayPortOfOrigin(true); }
    }

    return (
        <>
            <br /> <br />
            <div>
                <div className="filter_distance">
                    <div className="container">
                        <div className="row_filter row">
                            <Form
                                name="basic"
                                layout="inline">
                                <div className="col col_search">
                                    <ul className="filter_ul_sea_land_air" style={{ cursor: "pointer" }}>

                                        <li onClick={() => {
                                            context_distance_time.setSelectedImage("Sea")
                                        }} className="filter_li_sea_land_air">

                                            {context_distance_time.selectedImage === "Sea"
                                                ?
                                                <img src="img/Sea_ON.png" className="image_sea"></img>
                                                :
                                                <img src="img/Sea_OFF.png" className="image_sea"></img>
                                            }

                                        </li>
                                        <li onClick={() => {
                                            context_distance_time.setSelectedImage("Land")
                                        }} className="filter_li_sea_land_air">

                                            {context_distance_time.selectedImage === "Land"
                                                ?
                                                <img src="img/LAND_ON.png" className="image_land"></img>
                                                :
                                                <img src="img/LAND_OFF.png" className="image_land"></img>
                                            }
                                        </li>
                                        <li onClick={() => {
                                            context_distance_time.setSelectedImage("Air")
                                        }} className="filter_li_sea_land_air">

                                            {context_distance_time.selectedImage === "Air"
                                                ?
                                                <img src="img/AIR_ON.png"></img>
                                                :
                                                <img src="img/AIR_OFF.png"></img>
                                            }
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="countryfilter_distance_time">
                                        <li className="date_distance_time">
                                            <img src="img/Coountry.png" alt="Not Found ..." className="image_left_world_distance_and_time" />
                                        </li>

                                        <li className="filter_li_sea_land_air">
                                            <Form.Item name="PortOfOrigin" rules={[{
                                                required: true,
                                                message: "Please Input this Field !"
                                            }]}>
                                                <AutoComplete
                                                    style={{
                                                        width: 200,
                                                    }}
                                                    placeholder="City, Port, Country"
                                                    value={context_distance_time.formDistanceTime.PortOfOrigin}
                                                    onChange={(e) => {
                                                        HandleChangeSelect(e, "PortOfOrigin");
                                                        context_distance_time.searchPorts(e);
                                                        displayPorts(e);
                                                    }}
                                                />
                                            </Form.Item>
                                        </li>

                                        <li className="filter_li_sea_land_air arrowimage_distance_time">
                                            <a onClick={ChangePorts}>
                                                <img src="img/arrows.png" id="arrowid_distance_time"></img>
                                            </a>
                                        </li>

                                        <li className="date_distance_time">
                                            <img src="img/Coountry.png" alt="Not Found ..." className="image_left_world_distance_and_time" />
                                        </li>

                                        <li className="filter_li_sea_land_air">
                                            <Form.Item name="PortOfDestination" rules={[{
                                                required: true,
                                                message: "Please Input this Field !"
                                            }]}>
                                                <AutoComplete
                                                    style={{
                                                        width: 200,
                                                    }}
                                                    rules
                                                    placeholder="City, Port, Country"
                                                    value={context_distance_time.formDistanceTime.PortOfDestination}
                                                    onChange={(e) => {
                                                        HandleChangeSelect(e, "PortOfDestination");
                                                        context_distance_time.searchPorts(e);
                                                    }}
                                                />
                                            </Form.Item>
                                        </li>

                                    </ul>
                                </div>

                                <div className="col-md-auto">
                                    <ul className="seaLines_ul">
                                        <li className="seaLines_li">
                                            <div className="select_average_speed">
                                                <p className="Average_Speed_text">Average Speed</p>
                                                <div className="Input_Number_Average_Speed">
                                                    <InputNumber
                                                        min={1}
                                                        defaultValue={context_distance_time.formDistanceTime.AverageSpeed}
                                                        value={context_distance_time.formDistanceTime.AverageSpeed}
                                                        bordered={false}
                                                        onChange={onChangeAverageSpeed}
                                                    />
                                                </div>
                                                {context_distance_time.selectedImage === "Sea" && <p>Knots</p>}
                                                {context_distance_time.selectedImage === "Land" && <p>KM / H</p>}
                                                {context_distance_time.selectedImage === "Air" && <p>KM / H</p>}
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-sm-1 button_search_distance_time">
                                    <div className="search_container">
                                        <Form.Item>
                                            <button className="button_search_container_tracking">
                                                <img id="searchicon" src="img/loop.png" alt="Not Found ..." />
                                            </button>
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className="div_port_of_origin">
                                    {context_distance_time.displayPortOfOrigin && 
                                       <PortOfOrigin />
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

export default FilterDistanceTime;