import React, { useContext } from 'react';
import { Form, Input, Button } from 'antd';
import './ExplorerSection.css';
import { ContextFilter } from '../../../contexts/ContextFilter';

function RequestQuote() {

    const context_user = useContext(ContextFilter);

    return (
        <section>
            <div className="Quick_Request_Text">
                Quick Request
                <hr className="hr_quick_request" />

                <Form
                    name="basic"
                    className="form_request"
                    layout="inline"
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input placeholder="Commdity Name" style={{width: "340px", marginTop: "20px", height: "35px"}}/>
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phone!',
                            },
                        ]}
                    >
                        <Input placeholder="+442070486438" style={{width: "340px", marginTop: "20px", height: "35px"}}/>
                    </Form.Item>

                    <Form.Item
                        name="fullname"
                    >
                        <Input placeholder="Full Name" defaultValue={context_user.formUser.lastname + " " +context_user.formUser.lastname} style={{width: "340px", marginTop: "20px", height: "35px"}} disabled/>
                    </Form.Item>

                    <Form.Item
                        name="email"
                    >
                        <Input placeholder="adresse e-mail" defaultValue={context_user.formUser.email}  style={{width: "340px", marginTop: "20px", height: "35px"}} disabled/>
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
                        <Input.TextArea placeholder="IMO Cargo, Temperature control, OG, Overweight, FlexiTank etc." style={{width: "695px", marginTop: "20px", height: "105px"}}/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="btnSign solid" style={{marginLeft: "250px"}}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </section >
    )
}


export default RequestQuote;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};