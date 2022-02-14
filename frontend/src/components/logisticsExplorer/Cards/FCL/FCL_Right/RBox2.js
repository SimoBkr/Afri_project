import React, { useState, useContext } from 'react'
import 'antd/dist/antd.css';
import { Collapse } from 'react-collapse';
import Tariff from './Tariff'
import { Popover } from 'antd';
import { ContextLogistics } from '../../../../../contexts/ContextLogistics';
import ModalBook from './ModalBook/ModalBook';
import Map from './MapView/Map';
import data from './dataFCL.json';
import Type_Cheaper from '../../Type_Cheaper';
import SubmitRequest from '../../SubmitRequest';
import RequestQuote from '../../RequestQuote';

function RBox2() {

  const context_logistics = useContext(ContextLogistics);

  const [activeButton, setActiveButton] = useState(null);
  const [request_quote, setrequest_quote] = useState(true);
  const [form_request, setform_request] = useState(false);
  const [selecteD, setselecteD] = useState(0);
  const onChangeButton = (v) => {
    setselecteD(v);
  }

  const SommeBookNow = (shipment) => {
    return (context_logistics.stateTariff.PickUpPrice + context_logistics.stateTariff.PortOfOriginPrice + context_logistics.stateTariff.PortOfDischargePrice
      + context_logistics.stateTariff.DeliveryPrice + shipment.freight[0].price);
  }

  return (
    <>
      <Type_Cheaper />
      {data.data.shipment.map((shipment, index) => {
        return (
          <section className="box2" key={index}>
            <div>
              <div>
                <img src={shipment.freight[0].logo} className="img1" />
                <p className="HAPAG">{shipment.freight[0].shippingLine}</p>
              </div>
              <hr className="customhr1" />
              <hr className="vr" />
              <p className="textinbox01">VALID</p>
              <p className="textinbox001" >ID</p>
              <p className="textinbox0">{shipment.freight[0].validTo}<br /> {shipment.shipmentId}</p>
              <button className="buttoninbox" onClick={() => context_logistics.setVisible(true)}>${SommeBookNow(shipment)}<br />Book Now</button>
              <ModalBook shipment={shipment} />
              <div>
                <p className="textinbox1">{shipment.cityFrom.name}</p>
                <p className="textinbox2">{shipment.cityTo.name}</p>
                <p className="transit_time_days">{shipment.freight[0].transitTime}</p>
                <div style={{ marginLeft: "120px" }}>
                  {context_logistics.stateBoxLeft.PickUp && !context_logistics.stateBoxLeft.Delivery &&
                    <>
                      <img src={context_logistics.stateBoxLeft.PickUpOption === "Truck" ? "/img/PickUp.png" : "/img/Rail.png"} className="image_PickUp_true" width="25px" />
                      <img src="/img/Ocean_Freight.png" className="image_Ocean_true" width="20px" />
                    </>
                  }
                  {!context_logistics.stateBoxLeft.PickUp && !context_logistics.stateBoxLeft.Delivery &&
                    <>
                      <img src="/img/Ocean_Freight.png" className="image_Ocean_Del_Pic_false" width="20px" />
                    </>
                  }
                  {context_logistics.stateBoxLeft.Delivery && !context_logistics.stateBoxLeft.PickUp &&
                    <>
                      <img src={context_logistics.stateBoxLeft.DeliveryOption === "Truck" ? "/img/PickUp.png" : "/img/Rail.png"} className="image_PickUpRight_true" width="25px" />
                      <img src="/img/Ocean_Freight.png" className="image_OceanFreight_true" width="20px" />
                    </>
                  }
                  {context_logistics.stateBoxLeft.PickUp && context_logistics.stateBoxLeft.Delivery &&
                    <>
                      <img src={context_logistics.stateBoxLeft.PickUpOption === "Truck" ? "/img/PickUp.png" : "/img/Rail.png"} className="img2" width="25px" />
                      <img src="/img/Ocean_Freight.png" className="img3" width="20px" />
                      <img src={context_logistics.stateBoxLeft.DeliveryOption === "Truck" ? "/img/PickUp.png" : "/img/Rail.png"} className="image_pickUp_delivery" width="25px" />
                    </>
                  }
                </div>
              </div>
              {
                context_logistics.stateBoxLeft.PickUp &&
                <div>
                  <Popover content={<div>{shipment.cityFrom.name}</div>} title="Pick Up" overlayStyle={{ width: "165px" }}>
                    <span className="dot1 cursor-pointer"
                      onClick={() => { context_logistics.setStateBoxLeft({ ...context_logistics.stateBoxLeft, PickUp: false, PortOfOrigin: false }) }}>
                    </span>
                  </Popover>
                  <hr className="customhr2" />
                </div>
              }
              {
                !context_logistics.stateBoxLeft.PickUp &&
                <div>
                  <Popover content={<div>{shipment.cityFrom.name}</div>} title="Pick Up" overlayStyle={{ width: "165px" }}>
                    <span className="dot1_false cursor-pointer"
                      onClick={() => { context_logistics.setStateBoxLeft({ ...context_logistics.stateBoxLeft, PickUp: true, PortOfOrigin: true }) }}>
                    </span>
                  </Popover>
                  <hr className="customhr2_false" />
                </div>
              }
              <div>
                {context_logistics.stateBoxLeft.PortOfOrigin &&
                  <>
                    {context_logistics.stateBoxLeft.PickUp &&
                      <>
                        <Popover content={<div>{shipment.portFrom.name}</div>} title="Port Of Origin" overlayStyle={{ width: "165px" }}>
                          <span className="dot2 checkbox-disabled"></span>
                        </Popover>
                      </>
                    }
                    {!context_logistics.stateBoxLeft.PickUp &&
                      <>
                        <Popover content={<div>{shipment.portFrom.name}</div>} title="Port Of Origin" overlayStyle={{ width: "165px" }}>
                          <span className="dot2 cursor-pointer" onClick={() => { context_logistics.setStateBoxLeft({ ...context_logistics.stateBoxLeft, PortOfOrigin: false }) }}></span>
                        </Popover>
                      </>
                    }
                  </>
                }
                {!context_logistics.stateBoxLeft.PortOfOrigin &&
                  <>
                    <Popover content={<div>{shipment.portFrom.name}</div>} title="Port Of Origin" overlayStyle={{ width: "165px" }}>
                      <span className="dot2_false cursor-pointer"
                        onClick={() => { context_logistics.setStateBoxLeft({ ...context_logistics.stateBoxLeft, PortOfOrigin: true }) }}>
                      </span>
                    </Popover>
                  </>
                }
                <hr className="customhr3" />
                {context_logistics.stateBoxLeft.PortOfDischarge &&
                  <>
                    {context_logistics.stateBoxLeft.Delivery &&
                      <>
                        <Popover content={<div>{shipment.portTo.name}</div>} title="Port Of Discharge" overlayStyle={{ width: "165px" }}>
                          <span className="dot3 checkbox-disabled"></span>
                        </Popover>
                      </>
                    }
                    {!context_logistics.stateBoxLeft.Delivery &&
                      <>
                        <Popover content={<div>{shipment.portTo.name}</div>} title="Port Of Discharge" overlayStyle={{ width: "165px" }}>
                          <span className="dot3 cursor-pointer" onClick={() => { context_logistics.setStateBoxLeft({ ...context_logistics.stateBoxLeft, PortOfDischarge: false }) }}></span>
                        </Popover>
                      </>
                    }
                  </>
                }
                {!context_logistics.stateBoxLeft.PortOfDischarge &&
                  <>
                    <Popover content={<div>{shipment.portTo.name}</div>} title="Port Of Discharge" overlayStyle={{ width: "165px" }}>
                      <span className="dot3_false cursor-pointer"
                        onClick={() => { context_logistics.setStateBoxLeft({ ...context_logistics.stateBoxLeft, PortOfDischarge: true }) }}>
                      </span>
                    </Popover>
                  </>
                }
              </div>
              {
                context_logistics.stateBoxLeft.Delivery &&
                <div>
                  <hr className="customhr4" />
                  <Popover content={<div>{shipment.cityTo.name}</div>} title="Delivery" >
                    <span className="dot4 cursor-pointer"
                      onClick={() => { context_logistics.setStateBoxLeft({ ...context_logistics.stateBoxLeft, Delivery: false, PortOfDischarge: false }) }}>
                    </span>
                  </Popover>
                </div>
              }
              {
                !context_logistics.stateBoxLeft.Delivery &&
                <div>
                  <hr className="customhr4_false" />
                  <Popover content={<div>{shipment.cityTo.name}</div>} title="Delivery" overlayStyle={{ width: "165px" }}>
                    <span className="dot4_false cursor-pointer"
                      onClick={() => { context_logistics.setStateBoxLeft({ ...context_logistics.stateBoxLeft, Delivery: true, PortOfDischarge: true }) }}></span>
                  </Popover>
                </div>
              }
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
                              if (activeButton === index) context_logistics.setstateTariff({
                                ...context_logistics.stateTariff,
                                PickUp: false,
                                PickUpPrice: 0,
                                PickUpOption: "Truck",
                                PortOfOrigin: false,
                                PortOfOriginPrice: 0,
                                OceanFreight: true,
                                PortOfDischarge: false,
                                PortOfDischargePrice: 0,
                                Delivery: false,
                                DeliveryPrice: 0,
                                DeliveryOption: "Truck"
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
                              {selecteD === 0 ? <Tariff shipment={shipment} /> : <Map shipment={shipment} />}
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

export default RBox2;