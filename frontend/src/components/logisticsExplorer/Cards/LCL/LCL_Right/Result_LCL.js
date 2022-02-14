import React, { useState, useContext } from 'react'
import 'antd/dist/antd.css';
import { Collapse } from 'react-collapse';
import { Popover } from 'antd';
import { ContextLogistics } from '../../../../../contexts/ContextLogistics';
import data from './dataLCL.json';
import Type_Cheaper from '../../Type_Cheaper';
import SubmitRequest from '../../SubmitRequest';
import RequestQuote from '../../RequestQuote';
import Map from './MapViewLCL/Map';
import Tariff from './Tariff';

function Result_LCL() {

    const context_logistics = useContext(ContextLogistics);

    const [activeButton, setActiveButton] = useState(null);
    const [request_quote, setrequest_quote] = useState(true);
    const [form_request, setform_request] = useState(false);
    const [selecteD, setselecteD] = useState(0);
    const onChangeButton = (v) => {
        setselecteD(v);
    }

    const SommeBookNow = (shipment) => {
        return (context_logistics.tarifLCL.PickUpPrice + context_logistics.tarifLCL.PortOfOriginPrice + context_logistics.tarifLCL.PortOfDischargePrice
            + context_logistics.tarifLCL.DeliveryPrice + shipment.oceanFreight.price);
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
                            <button className="buttoninbox" onClick={() => context_logistics.setVisible(true)}>${SommeBookNow(shipment)}<br />Book Now</button>
                            <div>
                                <p className="textinbox1">{shipment.cityFrom.name}</p>
                                <p className="textinbox2">{shipment.cityTo.name}</p>
                                <p className="transit_time_days">{shipment.oceanFreight.transitTime}</p>
                                <div style={{ marginLeft: "120px" }}>
                                    {context_logistics.servicesLCL.PickUp && !context_logistics.servicesLCL.Delivery &&
                                        <>
                                            <img src="/img/PickUp.png" className="image_PickUp_true" width="25px" />
                                            <img src="/img/Ocean_Freight.png" className="image_Ocean_true" width="20px" />
                                        </>
                                    }
                                    {!context_logistics.servicesLCL.PickUp && !context_logistics.servicesLCL.Delivery &&
                                        <>
                                            <img src="/img/Ocean_Freight.png" className="image_Ocean_Del_Pic_false" width="20px" />
                                        </>
                                    }
                                    {context_logistics.servicesLCL.Delivery && !context_logistics.servicesLCL.PickUp &&
                                        <>
                                            <img src="/img/PickUp.png" className="image_PickUpRight_true" width="25px" />
                                            <img src="/img/Ocean_Freight.png" className="image_OceanFreight_true" width="20px" />
                                        </>
                                    }
                                    {context_logistics.servicesLCL.PickUp && context_logistics.servicesLCL.Delivery &&
                                        <>
                                            <img src="/img/PickUp.png" className="img2" width="25px" />
                                            <img src="/img/Ocean_Freight.png" className="img3" width="20px" />
                                            <img src="/img/PickUp.png" className="image_pickUp_delivery" width="25px" />
                                        </>
                                    }
                                </div>
                            </div>
                            <Popover content={<div>{shipment.cityFrom.name}</div>} title="Pick Up" overlayStyle={{ width: "165px" }}>
                                <span className={context_logistics.tarifLCL.PickUp ? "dot1 cursor-pointer" : "dot1_false cursor-pointer"}
                                    onClick={() => {
                                        context_logistics.settarifLCL({
                                            ...context_logistics.tarifLCL,
                                            PickUp: !context_logistics.tarifLCL.PickUp,
                                            PortOfOrigin: !context_logistics.tarifLCL.PortOfOrigin
                                        })
                                    }}>
                                </span>
                            </Popover>
                            <hr className={context_logistics.tarifLCL.PickUp ? "customhr2" : "customhr2_false"} />

                            <div>
                                <Popover content={<div>{shipment.portFrom.name}</div>} title="Port Of Origin" overlayStyle={{ width: "165px" }}>
                                    <span className={context_logistics.tarifLCL.PickUp ? "dot2 checkbox-disabled" : "dot2_false cursor-pointer" &&
                                        context_logistics.tarifLCL.PickUp === false && context_logistics.tarifLCL.PortOfOrigin ? "dot2 cursor-pointer" : "dot2_false cursor-pointer"}
                                        onClick={() => {
                                            if (context_logistics.tarifLCL.PickUp === false) {
                                                context_logistics.settarifLCL({
                                                    ...context_logistics.tarifLCL,
                                                    PortOfOrigin: !context_logistics.tarifLCL.PortOfOrigin
                                                })
                                            }
                                        }}>
                                    </span>
                                </Popover>

                                <hr className="customhr3" />

                                <Popover content={<div>{shipment.portFrom.name}</div>} title="Port Of Discharge" overlayStyle={{ width: "165px" }}>
                                    <span className={context_logistics.servicesLCL.Delivery ? "dot3 checkbox-disabled" : "dot3_false cursor-pointer" &&
                                        context_logistics.servicesLCL.Delivery === false && context_logistics.servicesLCL.PortOfDischarge ? "dot3 cursor-pointer" : "dot3_false cursor-pointer"}
                                        onClick={() => {
                                            if (context_logistics.servicesLCL.Delivery === false) {
                                                context_logistics.setservicesLCL({
                                                    ...context_logistics.servicesLCL,
                                                    PortOfDischarge: !context_logistics.servicesLCL.PortOfDischarge
                                                })
                                            }
                                        }}>
                                    </span>
                                </Popover>

                            </div>
                            <div>
                                <hr className={context_logistics.servicesLCL.Delivery ? "customhr4" : "customhr4_false"} />
                                <Popover content={<div>{shipment.cityTo.name}</div>} title="Delivery" >
                                    <span className={context_logistics.servicesLCL.Delivery ? "dot4 cursor-pointer" : "dot4_false cursor-pointer"}
                                        onClick={() => {
                                            context_logistics.setservicesLCL({
                                                ...context_logistics.servicesLCL,
                                                Delivery: !context_logistics.servicesLCL.Delivery,
                                                PortOfDischarge: !context_logistics.servicesLCL.PortOfDischarge
                                            })
                                        }}>
                                    </span>
                                </Popover>
                            </div>
                            <div>
                                <p className="textinbox3">{shipment.portFrom.code}</p>
                                <p className="textinbox4">{shipment.portTo.code}</p>
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
                                                            if (activeButton === index) context_logistics.settarifLCL({
                                                                ...context_logistics.tarifLCL,
                                                                PickUp: false,
                                                                PickUpPrice: 0,
                                                                PortOfOrigin: false,
                                                                PortOfOriginPrice: 0,
                                                                OceanFreight: true,
                                                                PortOfDischarge: false,
                                                                PortOfDischargePrice: 0,
                                                                Delivery: false,
                                                                DeliveryPrice: 0,
                                                            })
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
                                                            {selecteD === 0 ? <Tariff shipment={shipment} /> : <Map shipment={shipment}/>}
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

export default Result_LCL;