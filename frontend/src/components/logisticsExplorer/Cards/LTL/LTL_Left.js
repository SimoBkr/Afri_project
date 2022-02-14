import React, { useContext } from 'react';
import { Slider, InputNumber, Row, Col, Select } from 'antd';
import '../ExplorerSection.css'
import { ContextLogistics } from '../../../../contexts/ContextLogistics';

function LTL_Left() {

    const { Option } = Select;
    const context_logistics = useContext(ContextLogistics);

    const onChangeWeight = (value) => {
        context_logistics.setweightLTL(value);
    }

    const onChangeVolume = (value) => {
        context_logistics.setvolumeLTL(value);
    }

    const handleChangeSelect = (value) => {
        console.log(`selected ${value}`);
    }

    return (
        <div className="Container">
            <h3 className="name">Total Shipment</h3>
            <hr className="hr2tr" />
            <div style={{ display: "flex" }}>
                <p className="weight_volume_text_lcl">Weight</p>
                <InputNumber
                    min={1}
                    max={15}
                    style={{ margin: '0 10px', width: '55px', height: '30px', borderRadius: '0' }}
                    value={context_logistics.volumeLTL}
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
                            style={{ marginLeft: "20px" }}
                            onChange={onChangeWeight}
                            value={typeof context_logistics.volumeLTL === 'number' ? context_logistics.volumeLTL : 0}
                        />
                    </Col>
                </Row>
            </div>

            <div style={{ display: "flex" }}>
                <p className="weight_volume_text_lcl">Volume</p>
                <InputNumber
                    min={1}
                    max={120}
                    style={{ margin: '0 10px', width: '55px', height: '30px', borderRadius: '0' }}
                    value={context_logistics.volumeLTL}
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
                            max={120}
                            style={{ marginLeft: "20px" }}
                            onChange={onChangeVolume}
                            value={typeof context_logistics.volumeLTL === 'number' ? context_logistics.volumeLTL : 0}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default LTL_Left;