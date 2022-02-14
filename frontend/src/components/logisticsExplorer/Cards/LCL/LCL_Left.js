import React, { useContext } from 'react';
import { Slider, InputNumber, Row, Col, Select } from 'antd';
import '../ExplorerSection.css'
import { ContextLogistics } from '../../../../contexts/ContextLogistics';

function LCL_Left() {

    const context_logistics = useContext(ContextLogistics);
    const { Option } = Select;

    const onChangeWeight = (value) => {
        context_logistics.setweightLCL(value);
    }

    const onChangeVolume = (value) => {
        context_logistics.setvolumeLCL(value);
    }

    const handleChangeSelect = (value) => {
        console.log(`selected ${value}`);
    }

    const handleChangePickUp = (evt) => {
        const valuePickUp = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        context_logistics.setservicesLCL({
            ...context_logistics.servicesLCL,
            [evt.target.name]: valuePickUp,
            PortOfOrigin: valuePickUp
        })
    }

    const handleChangeDelivery = (evt) => {
        const valuePickUp = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        context_logistics.setservicesLCL({
            ...context_logistics.servicesLCL,
            [evt.target.name]: valuePickUp,
            PortOfDischarge: valuePickUp
        })
    }

    const handleChange = (evt) => {
        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        context_logistics.setservicesLCL({ 
            ...context_logistics.servicesLCL, 
            [evt.target.name]: value 
        });
    }

    return (
        <div className="Container">
            <h3 className="name">Cargo Details</h3>
            <hr className="hr2tr" />
            <div style={{ display: "flex" }}>
                <p className="weight_volume_text_lcl">Weight</p>
                <InputNumber
                    min={1}
                    max={15}
                    style={{ margin: '0 10px', width: '55px', height: '30px',borderRadius: '0' }}
                    value={context_logistics.weightLCL}
                    onChange={onChangeWeight}
                />
                <Select defaultValue="TON" style={{ width: 80 }} onChange={handleChangeSelect}>
                    <Option value="TON">TON</Option>
                </Select>
            </div>
            <div>
                <Row>
                    <Col span={22}>
                        <Slider
                            min={1}
                            max={15}
                            style={{marginLeft: "20px"}}
                            onChange={onChangeWeight}
                            value={typeof context_logistics.weightLCL === 'number' ? context_logistics.weightLCL : 0}
                        />
                    </Col>
                </Row>
            </div>

            <div style={{ display: "flex", marginTop: "20px" }}>
                <p className="weight_volume_text_lcl">Volume</p>
                <InputNumber
                    min={1}
                    max={15}
                    style={{ margin: '0 10px', width: '55px', height: '30px',borderRadius: '0' }}
                    value={context_logistics.volumeLCL}
                    onChange={onChangeVolume}
                />
                <Select defaultValue="CBM" style={{ width: 80 }} onChange={handleChangeSelect}>
                    <Option value="CBM">CBM</Option>
                </Select>
            </div>
            <div>
                <Row>
                    <Col span={22}>
                        <Slider
                            min={1}
                            max={15}
                            style={{marginLeft: "20px"}}
                            onChange={onChangeVolume}
                            value={typeof context_logistics.volumeLCL === 'number' ? context_logistics.volumeLCL : 0}
                        />
                    </Col>
                </Row>
            </div>

            <div>
                <h3 className="name">Included Services</h3>
                <hr className="hr2tr" />
                <div className="formcheck custominp input-group-prepend">
                    <img src="/img/PickUp.png" className="d-table-cell" />
                    <p className="customText3 p">Pick up</p>
                    <input className="form-check-input customcheck" type="checkbox" name="PickUp"
                        checked={context_logistics.servicesLCL.PickUp} onChange={handleChangePickUp}></input>
                </div>
            </div>
            <div className="formcheck custominp1 input-group-prepend">
                <img src="/img/Port.png" className="d-table-cell" />
                <p className="customText3 p">Port Of Origin</p>
                <input className={context_logistics.servicesLCL.PickUp ? "customcheck form-check-input checkbox-disabled" : "customcheck form-check-input"} type="checkbox" 
                name="PortOfOrigin" checked={context_logistics.servicesLCL.PortOfOrigin} onChange={handleChange} disabled={context_logistics.servicesLCL.PickUp}></input>
            </div>
            <div className="formcheck custominp input-group-prepend">
                <img src="/img/Ocean_Freight.png" className="d-table-cell" />
                <p className="customText3 p">Ocean Freight</p>
                <input className="customcheck form-check-input checkbox-disabled" type="checkbox" name="OceanFreight"
                    checked={context_logistics.servicesLCL.OceanFreight} disabled onChange={handleChange}></input>
            </div>
            <div className="formcheck custominp input-group-prepend">
                <img src="/img/Port.png" className="d-table-cell" />
                <p className="customText3 p">Port Of Discharge</p>
                <input className={context_logistics.servicesLCL.Delivery ? "customcheck form-check-input checkbox-disabled" : "customcheck form-check-input"} type="checkbox" 
                name="PortOfDischarge" checked={context_logistics.servicesLCL.PortOfDischarge} onChange={handleChange} disabled={context_logistics.servicesLCL.Delivery}></input>
            </div>
            <div className="formcheck custominp input-group-prepend">
                <img src="/img/PickUp.png" class="d-table-cell" />
                <p className="customText3 p">Delivery</p>
                <input className="form-check-input customcheck" type="checkbox" name="Delivery"
                    checked={context_logistics.servicesLCL.Delivery} onChange={handleChangeDelivery}></input>
            </div>

        </div>
    )
}

export default LCL_Left;