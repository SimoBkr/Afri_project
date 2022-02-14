import React, { useState, useContext } from 'react'
import 'antd/dist/antd.css';
import { Collapse } from 'react-collapse';
import { Popover } from 'antd';
import { ContextLogistics } from '../../../../../contexts/ContextLogistics';
import { ContextFilter } from '../../../../../contexts/ContextFilter';
import data from '../../LCL/LCL_Right/dataLCL.json';
import Type_Cheaper from '../../Type_Cheaper';
import SubmitRequest from '../../SubmitRequest';
import RequestQuote from '../../RequestQuote';
import Tarif_LTL from './Tarif_LTL';
import Map from './MapViewLTL/Map';

function Result_LTL() {

    const context_logistics = useContext(ContextLogistics);
    const context_filter = useContext(ContextFilter);

    const [activeButton, setActiveButton] = useState(null);
    const [request_quote, setrequest_quote] = useState(true);
    const [form_request, setform_request] = useState(false);
    const [selecteD, setselecteD] = useState(0);
    const onChangeButton = (v) => {
        setselecteD(v);
    }

    return (
        <>
            <Type_Cheaper />
            {data.data.shipment.map((shipment, index) => {
                return (
                    <section className="box2" key={index}>
                        <div>
                            <div>
                                <img src={shipment.oceanFreight.logo} className="img1" />
                                <p className="HAPAG">{shipment.oceanFreight.shippingLine === null ? "ECU" : shipment.oceanFreight.shippingLine}</p>
                            </div>
                            <hr className="customhr1" />
                            <hr className="vr" />
                            <p className="textinbox01">VALID</p>
                            <p className="textinbox001" >ID</p>
                            <p className="textinbox0">{shipment.oceanFreight.validTo}<br /> {shipment.shipmentId}</p>
                            <button className="buttoninbox" onClick={() => context_logistics.setVisible(true)}>${shipment.oceanFreight.price}<br />Book Now</button>
                            <div>
                                <p className="textinbox1">{shipment.cityFrom.name}</p>
                                <p className="textinbox2">{shipment.cityTo.name}</p>
                                <p className="transit_time_days">{shipment.oceanFreight.transitTime}</p>
                                <div style={{ marginLeft: "120px" }}>
                                    <img src="/img/PickUp.png" className="image_truck_land" width="20px" />
                                </div>
                            </div>

                            <Popover content={<div>{shipment.cityFrom.name}</div>} title="Port Of" overlayStyle={{ width: "165px" }}>
                                <span className="color_land_left checkbox-disabled">
                                </span>
                            </Popover>
                            <hr className="hr_land" />

                            <div>
                                <Popover content={<div>{shipment.cityTo.name}</div>} title="Port Of" overlayStyle={{ width: "165px" }}>
                                    <span className="color_land_right checkbox-disabled"></span>
                                </Popover>
                            </div>
                            <div>
                                <div className="accessible">
                                    <ul>
                                        <li>
                                            <div>
                                                <div className="config">
                                                    <button
                                                        aria-controls="collapseExample"
                                                        data-toggle="collapse"
                                                        aria-expanded="false"
                                                        onClick={(event) => {
                                                            setActiveButton(activeButton === index ? null : index)
                                                        }}
                                                        type="button" className="custdrop">
                                                        {activeButton === index ? <div style={{ color: "#fec537" }}>&#9650;</div> : <div>&#9660;</div>}
                                                    </button>
                                                </div>
                                                <Collapse
                                                    isOpened={activeButton === index}>
                                                    <div className="test5">
                                                        <div className="btn-group TarifMapButtons" role="group" aria-label="Basic example">
                                                            <button
                                                                type="button"
                                                                className={(selecteD === 0 ? "btn navbtn btn-primary" : "btn navbtn btn-outline-primary btncolor")}
                                                                onClick={() => {
                                                                    onChangeButton(0);
                                                                }}
                                                            >
                                                                Tariff
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className={(selecteD === 1 ? "btn navbtn btn-primary" : "btn navbtn btn-outline-primary btncolor")}
                                                                onClick={() => {
                                                                    onChangeButton(1);
                                                                }}
                                                            >
                                                                Map
                                                            </button>
                                                        </div>

                                                        <div>
                                                            {selecteD === 0 ? <Tarif_LTL shipment={shipment} /> : <Map  shipment={shipment} />}
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section >
                )
            })}

            <div className="push">
                {request_quote === true &&
                    <div className="box_SubmitRequest">
                        <SubmitRequest setrequest_quote={setrequest_quote} setform_request={setform_request} />
                    </div>
                }
                {form_request === true &&
                    <div className="box_RequestQuote">
                        <RequestQuote />
                    </div>
                }
            </div>
        </>
    )
}

export default Result_LTL;