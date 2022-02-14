import React, { useContext } from 'react';
import '../../../ExplorerSection.css';
import { Modal, Card, Col, Row } from 'antd';
import { ContextLogistics } from '../../../../../../contexts/ContextLogistics';
import Questions from './Questions';
import BookNow from './BookNow';
import { ContextFilter } from '../../../../../../contexts/ContextFilter';

function ModalBook({shipment}) {

    const context_logistics = useContext(ContextLogistics);
    const context_filter = useContext(ContextFilter);
    
    return (
        <>
            <Modal
                title="SHIPMENT INFORMATION"
                style={{ height: "500px" }}
                centered
                visible={context_logistics.visible}
                onOk={() => context_logistics.setVisible(false)}
                onCancel={() => context_logistics.setVisible(false)}
                width={1000}
            >
                <div className="site-card-wrapper">
                    <Row gutter={24}>
                        <Col span={12}>
                            <Card title="DEPARTURE" bordered={false}>{shipment.cityFrom.name}</Card>
                        </Col>
                        <Col span={12}>
                            <Card title="ARRIVAL" bordered={false}>{shipment.cityTo.name}</Card>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Card title="READY TO LOAD" bordered={false}>{context_filter.Date.datePicker}</Card>
                        </Col>
                        <Col span={12}>
                            <Card title="TYPE OF DELIVERY" bordered={false}>FCL</Card>
                        </Col>
                    </Row>
                    <Row gutter={12}>
                        <Col span={12}>
                            <Card title="CARGO DETAILS" bordered={false}>
                                {shipment.freight[0].containerType}
                                <button type="button" className="btn btn-light button_plus_modal">+</button>
                                <output>1</output>
                                <button type="button" className="btn btn-light button_plus_modal">-</button>
                            </Card>
                        </Col>
                    </Row>
                </div>

                <div className="alert alert-dark mb-1" role="alert">
                    <Row gutter={24}>
                        <Col span={18}>Pick Up</Col>
                        <Col span={2}>USD</Col>
                        <Col span={2}>{shipment.freight[0].truckFrom.price}</Col>
                    </Row>
                </div>

                <div className="alert alert-dark mb-1" role="alert">
                    <Row gutter={24}>
                        <Col span={18}>Port Of Origin</Col>
                    </Row>
                </div>

                <div className="alert alert-light mb-1" role="alert">
                {shipment.freight[0].portFeesFrom.map((result, index) => {
                    return (
                    <Row gutter={24} key={index}>
                        <Col span={4}>{result.abbr}</Col>
                        <Col span={14}>{result.title}</Col>
                        <Col span={2}>USD</Col>
                        {result.perLot === true && <Col span={2}>{result.price} / perlot</Col>}
                        {result.perLot === false && <Col span={2}>{result.price}</Col>}
                    </Row>
                    )
                })}
                </div>

                <div className="alert alert-dark mb-1" role="alert">
                    <Row gutter={24}>
                        <Col span={18}>Ocean Freight</Col>
                        <Col span={2}>USD</Col>
                        <Col span={2}>{shipment.freight[0].price}</Col>
                    </Row>
                </div>

                <div className="alert alert-dark mb-1" role="alert">
                    <Row gutter={24}>
                        <Col span={18}>Port Of discharge</Col>
                    </Row>
                </div>

                <div className="alert alert-light mb-1" role="alert">
                {shipment.freight[0].portFeesTo.map((result, index) => {
                    return (
                    <Row gutter={24} key={index}>
                        <Col span={4}>{result.abbr}</Col>
                        <Col span={14}>{result.title}</Col>
                        <Col span={2}>USD</Col>
                        {result.perLot === true && <Col span={2}>{result.price} / perlot</Col>}
                        {result.perLot === false && <Col span={2}>{result.price}</Col>}
                    </Row>
                    )
                })}
                </div>

                <div className="alert alert-dark mb-1" role="alert">
                    <Row gutter={24}>
                        <Col span={18}>Delivery</Col>
                        <Col span={2}>USD</Col>
                        <Col span={2}>{shipment.freight[0].truckTo.price}</Col>
                    </Row>
                </div>

                <div className="alert alert-light mb-1" role="alert">
                    <Row gutter={24}>
                        <Col span={18}></Col>
                        <Col span={2} style={{ fontSize: "18px" }}>Total :</Col>
                        <Col span={4} style={{ color: "#2265d9", fontSize: "40px" }}>~ $ {shipment.freight[0].price}</Col>
                    </Row>
                </div>

                <br />
                <Questions />
                <br />
                <BookNow />
                <br />
            </Modal>
        </>
    )
}

export default ModalBook;