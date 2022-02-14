import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import '../../Main.css';
import { Select, DatePicker, AutoComplete } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import axios from 'axios';
import MapPort from './CountrySourceComponents/MapPort';
import AirPort from './CountrySourceComponents/AirPort';
import Countries from './CountrySourceComponents/Countries';
import MapPortDestination from './CountryDestinationComponents/MapPort';
import AirPortDestination from './CountryDestinationComponents/AirPort';
import CountriesDestination from './CountryDestinationComponents/Countries';
import OutsideClickHandler from 'react-outside-click-handler';
import { ContextFilter } from '../../../../contexts/ContextFilter';
import { Form } from 'antd';

function Filter() {

    const context = useContext(ContextFilter);

    const { Option } = Select;
    const dateFormat = 'YYYY/MM/DD';
    // InitialState
    let initialFilter = {
        placeId: "",
        city: "",
        country: "",
        place_type: "",
        counrty_code: "",
        code: "",
        flag: ""
    }
    //Initial Search Button 
    let initialSearch = {
        latFrom: "",
        lngFrom: "",
        latTo: "",
        lngTo: "",
        type: ""
    }
    //Filtering Data of Sea, Land and Air For example : Sea has => FCL, LCL, BULk ...
    let FilterData = [
        {
            name: "Sea",
            value: [{
                name: "FCL",
                img: "img/FCL.png"
            }
                , {
                name: "LCL",
                img: "img/LCL.png"
            }, {
                name: "BULK",
                img: "img/BULK.png"
            }]
        },
        {
            name: "Land",
            value: [{
                name: "FTL",
                img: "img/FTL.png"
            }
                , {
                name: "LTL",
                img: "img/LTL.png"
            }, {
                name: "FWL",
                img: "img/FWL.png"
            }, {
                name: "FCL",
                img: "img/FCL.png"
            }]
        },
        {
            name: "Air",
            value: [{
                name: "AIR",
                img: "img/AIR.png"
            }]
        }
    ]
    const [optionsData, setoptionsData] = useState({
        name: "Sea",
        value: [{
            name: "FCL",
            img: "img/FCL.png"
        }
            , {
            name: "LCL",
            img: "img/LCL.png"
        }, {
            name: "BULK",
            img: "img/BULK.png"
        }]
    })
    //Image Sea, Air and Land Selected 
    const [selectedImage, setSelectedImage] = useState("Sea");
    // Display Components Countries - AirPorts - MapPort
    let displayInitial = {
        displayCountry: false,
        displayAirPorts: false,
        displayMapPort: false
    }
    const [displayComponentsSource, setdisplayComponentsSource] = useState(displayInitial);
    const [displayComponentsDestination, setdisplayComponentsDestination] = useState(displayInitial);

    const [formData, setformData] = useState({
        countrySource: "",
        countryDestination: "",
        datePicker: "",
        selectImg: "FCL"
    })
    // Data Fetching From API
    const [resultCountries, setresultCountries] = useState([]);
    //Show loading after fetching Data from API
    const [loading, setloading] = useState(false);

    const [stateCountry, setStateCountry] = useState(initialFilter);
    // Data Fetching From API
    const [resultPorts, setresultPorts] = useState({});
    // Get Lat Lng to draw markers on the MapView 
    const [latlng, setlatlng] = useState({
        latFrom: "",
        lngFrom: "",
        latTo: "",
        lngTo: ""
    })

    const onChangeSelect = (n) => {
        setSelectedImage(n);
        let resFilter = FilterData.filter((v, i) => {
            return v.name === n
        });
        setoptionsData(resFilter[0]);
    }
    // Change country -- Country Source and Country Destination -----//
    const changeCountry = () => {
        const countryDestination = formData.countryDestination;
        const countrySource = formData.countrySource;
        setformData({
            ...formData,
            countrySource: countryDestination,
            countryDestination: countrySource
        })
    }

    const HandleChangeSelect = (e, name) => {
        setformData({
            ...formData,
            [name]: e
        })
    }
    const searchCountries = (e) => {
        setloading(true);
        axios.post(`http://localhost:9000/api/geocode/autocomplete?input=${e}`)
            .then(res => {
                setresultCountries(res.data);
                setloading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    // Display Components Of CountrySource 
    const displaySource = (e) => {
        if (e.length === 0) {
            setdisplayComponentsSource({ ...displayComponentsSource, displayCountry: false, displayAirPorts: false, displayMapPort: false })
        } else {
            setdisplayComponentsSource({ ...displayComponentsSource, displayCountry: true, displayAirPorts: false, displayMapPort: false })
        }
    }
    // Display Components Of CountryDestination
    const displayDestination = (e) => {
        if (e.length === 0) {
            setdisplayComponentsDestination({ ...displayComponentsDestination, displayCountry: false, displayAirPorts: false, displayMapPort: false })
        } else {
            setdisplayComponentsDestination({ ...displayComponentsDestination, displayCountry: true, displayAirPorts: false, displayMapPort: false })
        }
    }
    const HandleChangeDatePicker = (date, dateString) => {
        setformData({
            ...formData,
            datePicker: dateString
        })
    }

    const outsideClick = () => {
        setdisplayComponentsSource(displayInitial);
        setdisplayComponentsDestination(displayInitial);
    }

    const searchPorts = (result) => {
        setStateCountry({
            placeId: result.placeId,
            city: result.city,
            country: result.country,
            place_type: result.place_type,
            counrty_code: result.counrty_code,
            code: result.code,
            flag: result.flag
        })
    }

    useEffect(() => {
        axios.post("http://localhost:9000/api/geocode/coding", stateCountry)
            .then(res => {
                setresultPorts(res.data);
                setloading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [stateCountry])

    const DefaultValueOfSelect = optionsData?.value?.map((option, n) => {

        if (selectedImage === optionsData.name) {
            return (
                <div key={option.name} >
                    <img src={option.img} alt="Not Found ..." style={{ width: "36px" }} />
                    &nbsp; &nbsp; &nbsp; {option.name}
                </div>
            )
        }
    })

    const history = useHistory();
    const onFinish = () => {
        history.push("/logistics-explorer");
        context.setDistanceandtimeParams({
            ...context.DistanceandtimeParams,
            latFrom: latlng.latFrom,
            lngFrom: latlng.lngFrom,
            latTo: latlng.latTo,
            lngTo: latlng.lngTo,
            type: selectedImage.toLowerCase(),
            moyenTransport: formData.selectImg.toLowerCase()
        })
        context.setDate({
            ...context.Date,
            datePicker: formData.datePicker
        })
    };

    return (
        <OutsideClickHandler onOutsideClick={() => { outsideClick() }}>
            <br /><br />
            <div className="Filter">
                <div className="container col-12">
                    <div className="row rowFilter">
                        <Form name="basic"
                            layout="inline"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}>
                            <div className="col-xs-3" style={{ marginRight: "27px" }}>
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <ul className="filter-ul" style={{ cursor: "pointer" }}>

                                            <li onClick={() => {
                                                onChangeSelect("Sea");
                                                setformData({ ...formData, selectImg: "FCL" })

                                            }} className="filter-li">

                                                {selectedImage === "Sea"
                                                    ?
                                                    <img src="img/Sea_ON.png" style={{ width: "40px", marginLeft: "5px", height: "30px" }}></img>
                                                    :
                                                    <img src="img/Sea_OFF.png" style={{ width: "40px", marginLeft: "5px", height: "30px" }}></img>
                                                }

                                            </li>
                                            <li onClick={() => {
                                                onChangeSelect("Land")
                                                setformData({ ...formData, selectImg: "FTL" })

                                            }} className="filter-li">

                                                {selectedImage === "Land"
                                                    ?
                                                    <img src="img/LAND_ON.png" style={{ marginLeft: "5px" }}></img>
                                                    :
                                                    <img src="img/LAND_OFF.png" style={{ marginLeft: "5px" }}></img>
                                                }
                                            </li>
                                            <li onClick={() => {
                                                onChangeSelect("Air");
                                                setformData({ ...formData, selectImg: "AIR" })

                                            }} className="filter-li">

                                                {selectedImage === "Air"
                                                    ?
                                                    <img src="img/AIR_ON.png"></img>
                                                    :
                                                    <img src="img/AIR_OFF.png"></img>
                                                }
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-7" style={{ marginRight: "27px" }}>
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <ul className="countryfilter">
                                            <li className="date">
                                                <img src="img/Coountry.png" alt="Not Found ..." className="image-left" />
                                            </li>

                                            <li className="filter-li">
                                                <Form.Item name="countrySource" rules={[{
                                                    required: true,
                                                    message: "Please Input this Field !"
                                                }]}>
                                                    <AutoComplete
                                                        style={{
                                                            width: 200,
                                                        }}
                                                        value={formData.countrySource}
                                                        defaultValue={formData.countrySource}
                                                        placeholder="City, Port, Country"
                                                        onChange={(e) => {
                                                            HandleChangeSelect(e, "countrySource");
                                                            searchCountries(e);
                                                            displaySource(e);
                                                        }}
                                                    />
                                                </Form.Item>
                                            </li>

                                            <li className="filter-li arrowimage">
                                                <a onClick={changeCountry}>
                                                    <img src="img/arrows.png" id="arrowid"></img>
                                                </a>
                                            </li>

                                            <li className="date">
                                                <img src="img/Coountry.png" alt="Not Found ..." className="image-left" />
                                            </li>

                                            <li className="filter-li">
                                                <Form.Item name="countryDestination" rules={[{
                                                    required: true,
                                                    message: "Please Input this Field !"
                                                }]}>
                                                    <AutoComplete
                                                        style={{
                                                            width: 200,
                                                        }}
                                                        value={formData.countryDestination}
                                                        defaultValue={formData.countryDestination}
                                                        placeholder="City, Port, Country"
                                                        onChange={(e) => {
                                                            HandleChangeSelect(e, "countryDestination");
                                                            searchCountries(e);
                                                            displayDestination(e);
                                                        }}
                                                    />
                                                </Form.Item>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-6">
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <ul className="date-ul">
                                            <li className="date">
                                                <img src="img/Date.png" alt="Not Found ..." className="image-left" />
                                            </li>
                                            <li className="date-li">
                                                <div className="datePicker ant-select-selection">
                                                    <DatePicker style={{ width: 135 }} defaultValue={moment(new Date(), dateFormat)} format={dateFormat}
                                                        onChange={HandleChangeDatePicker}
                                                    />
                                                </div>
                                            </li>

                                            <li className="date-li">
                                                <div className="SelectOptions">
                                                    <Select style={{ width: 180 }}
                                                        key={selectedImage}
                                                        defaultValue={DefaultValueOfSelect}
                                                        onChange={(e) => {
                                                            HandleChangeSelect(e, "selectImg");
                                                        }}
                                                    >
                                                        {optionsData?.value?.map((v, i) => {
                                                            return (
                                                                <Option key={v.name} style={{ fontWeight: "bold" }}>
                                                                    <img src={v.img} alt="Not Found ..." style={{ width: "36px" }} />
                                                                    &nbsp; &nbsp; &nbsp; {v.name}
                                                                </Option>
                                                            )
                                                        })}
                                                    </Select>
                                                </div>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-2">
                                <div className="panel panel-default" id="panelsearsh">
                                    <div className="panel-body">
                                        <Form.Item>
                                            <button className="Button_Search">
                                                <img id="searchicon" src="img/loop.png" alt="Not Found ..." />
                                            </button>
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>

                            {/* Add Display Country & Display Ports and Map Here not in the last div !!!!*/}
                            <div className="CountriesSourceComponents">
                                {displayComponentsSource.displayCountry && (
                                    <Countries formData={formData}
                                        resultCountries={resultCountries}
                                        loading={loading}
                                        displayComponentsSource={displayComponentsSource}
                                        setdisplayComponentsSource={setdisplayComponentsSource}
                                        setformData={setformData}
                                        searchPorts={searchPorts}
                                    />
                                )}
                                {displayComponentsSource.displayAirPorts && (
                                    <AirPort formData={formData}
                                        resultPorts={resultPorts}
                                        latlng={latlng}
                                        setlatlng={setlatlng}
                                        loading={loading}
                                        displayComponentsSource={displayComponentsSource}
                                        setdisplayComponentsSource={setdisplayComponentsSource}
                                        setformData={setformData}
                                    />
                                )}
                            </div>
                            <div className="MapViewSource">
                                {displayComponentsSource.displayMapPort && (
                                    <MapPort
                                        resultPorts={resultPorts}
                                        latlng={latlng}
                                    />
                                )}
                            </div>

                            <div className="CountriesDestinationComponents">
                                {displayComponentsDestination.displayCountry && (
                                    <CountriesDestination formData={formData}
                                        resultCountries={resultCountries}
                                        loading={loading}
                                        displayComponentsDestination={displayComponentsDestination}
                                        setdisplayComponentsDestination={setdisplayComponentsDestination}
                                        setformData={setformData}
                                        searchPorts={searchPorts}
                                    />
                                )}
                                {displayComponentsDestination.displayAirPorts && (
                                    <AirPortDestination formData={formData}
                                        resultPorts={resultPorts}
                                        latlng={latlng}
                                        setlatlng={setlatlng}
                                        loading={loading}
                                        displayComponentsDestination={displayComponentsDestination}
                                        setdisplayComponentsDestination={setdisplayComponentsDestination}
                                        setformData={setformData}
                                    />
                                )}
                            </div>
                            <div className="MapViewDestination">
                                {displayComponentsDestination.displayMapPort && (
                                    <MapPortDestination
                                        resultPorts={resultPorts}
                                        latlng={latlng}
                                    />
                                )}
                            </div>
                        </Form>
                    </div>
                </div>
            </div >
        </OutsideClickHandler >
    )
}
export default Filter;