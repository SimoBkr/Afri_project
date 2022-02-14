import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import './Authentification.css';
import axios from 'axios';

const ForgotPassword = () => {

    const onFinish = (values) => {
        axios.post("http://localhost:9000/api/user/auth/sendmail", {
            email: values.email
        })
            .then(res => {
                /*localStorage.setItem('password-token', res.data.token);*/
                message.success(`Verifying your E-mail! The link to reset Password is sent successfully`, 4);
            })
            .catch(err => {
                message.warning(`${err.response.data.message}! Input your valid E-mail to send the Link`, 4);
            })
    }

    const onFinisherror = () => {
        console.log("Error Of sending Data Of Registration");
    }

    return (
        <>
            <div className="pageAuth">
                <div className="forms-pageAuth">
                    <div className="signin">
                        <Form
                            className="sign-in-form"
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinisherror}
                        >
                            <h2 className="Sign" style={{ marginBottom: "20px" }}>Forgot Password</h2>
                            <p style={{ width: "250px", marginLeft: "180px" }}>Enter your email and we will send you a link to reset your password.</p>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your e-mail',
                                    },
                                    {
                                        type: "email",
                                        message: 'Please input a valid e-mail',
                                    },
                                ]}
                            >
                                <Input placeholder="E-mail" className="password-field" prefix={<MailOutlined className="site-form-item-icon" />} />
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" className="btnForgotPassword solid" htmlType="submit">
                                    Send E-mail &amp; Reset Password
                                </Button>
                            </Form.Item>

                            <p className="backToSignIn">Back to <Link to="/sign-in">sign in</Link></p>
                        </Form>
                    </div>
                    <img src="/img/sign-in.svg" alt="...Not found" className="sign-in-svg" />
                </div>



                <div className="panels-container-sign">
                    <div className="panel-sign left-panel-sign">
                        <div className="content-sign">
                            <h3 className="AfreximBank-sign">Online MarketPlace</h3>
                            <div>
                                <img src="/img/afrexim-logo.png" className="rounded-circle" />
                            </div>
                            <Link to="sign-in">
                                <button className="btnSign transparent" id="sign-up-btn">Sign In</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ForgotPassword;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 7,
        span: 8,
    },
};
