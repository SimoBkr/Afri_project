import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import '../../../ExplorerSection.css';

function BookNow() {

    return (
        <>
            <Card title={<p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "0px" }}>Contact Information</p>} type="inner">
                <Form
                    name="basic"
                    className="contact_information"
                    layout="inline"
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        name="phonre"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <Input placeholder="+442070486438" style={{ width: "400px", marginTop: "20px", height: "40px" }} />
                    </Form.Item>

                    <Form.Item
                        name="product_name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your product name!',
                            },
                        ]}
                    >
                        <Input placeholder="Product Name" style={{ width: "400px", marginTop: "20px", height: "40px" }} />
                    </Form.Item>

                    <Form.Item
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your description!',
                            },
                        ]}
                    >
                        <Input.TextArea placeholder="IMO Cargo, Temperature control, OG, Overweight, FlexiTank etc." style={{ width: "816px", marginTop: "20px", height: "115px" }} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="btnSign solid" style={{ marginLeft: "310px" }}>
                            Book Now
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </>
    )
}

export default BookNow;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};