import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import './Authentification.css';
import axios from 'axios';

const SignIn = () => {

    const history = useHistory();

    const onFinish = (values) => {

        axios.post("http://localhost:9000/api/user/auth/sign-in", {
            email: values.email,
            password: values.password
        })
            .then(res => {
                localStorage.setItem('access_token', res.data.access_token);
                message.success(`You are Successfully Authenticated`, 4);
                history.push("/user-info");

            })
            .catch(err => {
                message.warning(`Error Of Authentication ${err.response.data.message}`, 4);
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
                            <h2 className="Sign">Sign In</h2>
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

                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password placeholder="Password" className="password-field" />
                            </Form.Item>

                            <Link to="/forgot-password" style={{ marginLeft: "400px", marginBottom: "0px" }}>Forgot Password ?</Link>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" className="btnSign solid" htmlType="submit">
                                    Login
                                </Button>
                            </Form.Item>
                            <div style={{ marginLeft: "180px" }}>
                                <p className="social-text-sign">Or Sign In With Social Platforms</p>
                                <div className="social-media-sign">
                                    <a href="#" className="social-icon-sign-facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="social-icon-sign-google">
                                        <i className="fab fa-google"></i>
                                    </a>
                                </div>
                            </div>
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
                            <Link to="sign-up">
                                <button className="btnSign transparent" id="sign-up-btn">Sign Up</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default SignIn;

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
        offset: 11,
        span: 8,
    },
};
