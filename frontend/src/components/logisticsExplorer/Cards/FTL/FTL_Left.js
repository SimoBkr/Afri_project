import React, { useContext } from 'react';
import { Slider, InputNumber, Row, Col, Select } from 'antd';
import '../ExplorerSection.css'
import { ContextLogistics } from '../../../../contexts/ContextLogistics';

function FTL_Left() {

    const { Option } = Select;
    const context_logistics = useContext(ContextLogistics);

    const onChangeVolume = (value) => {
        context_logistics.setvolumeFTL(value);
    }

    const handleChangeSelect = (value) => {
        console.log(`selected ${value}`);
    }

    return (
        <div className="Container">
            <h3 className="name">Total Shipment</h3>
            <hr className="hr2tr" />
            <div style={{ display: "flex" }}>
                <p className="weight_volume_text_lcl">Volume</p>
                <InputNumber
                    min={1}
                    max={120}
                    style={{ margin: '0 10px', width: '55px', height: '30px',borderRadius: '0' }}
                    value={context_logistics.volumeFTL}
                    onChange={onChangeVolume}
                />
                <Select defaultValue="m&sup3;" style={{ width: 80 }} onChange={handleChangeSelect}>
                    <Option value="m&sup3;">m&sup3;</Option>
                </Select>
            </div>


            <div>
                <Row>
                    <Col span={22}>
                        <Slider
                            min={1}
                            max={120}
                            style={{marginLeft: "20px"}}
                            onChange={onChangeVolume}
                            value={typeof context_logistics.volumeFTL === 'number' ? context_logistics.volumeFTL : 0}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default FTL_Left;