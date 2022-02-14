import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, MailOutlined, UserSwitchOutlined, PhoneOutlined } from '@ant-design/icons';
import './Authentification.css';
import axios from 'axios';

const SignUp = () => {

    const [formUser, setformUser] = useState({});

    const onFinish = (values) => {

        const data = {
            firstname: values.firstname,
            lastname: values.lastname,
            phonenumber: values.phone,
            username: values.username,
            email: values.email,
            password: values.password
        }

        axios.post("http://localhost:9000/api/user/auth/sign-up", data)
            .then(res => {
                console.log(res.data);
                setformUser(res.data);
                message.success(`Your TIP account is ${res.data.message}`, 4);
            })
            .catch((err) => {
                console.log(err.response.data);
                setformUser(err.response.data);
                message.warning(`Error d'enregistrement ${err.response.data.message}`, 4);
            })
    }

    const onFinisherror = () => {
        console.log("Error Of sending Data Of Registration");
    }

    return (
        <>
            <div className="pageAuth sign-up-mode">
                <div className="forms-pageAuth">
                    <div className="signup">
                        <Form
                            className="sign-up-form"
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinisherror}
                        >
                            <h2 className="Sign">Sign Up</h2>
                            <Form.Item
                                name="firstname"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your first name',
                                    },
                                    {
                                        pattern: /^[a-zA-Z\s]+$/,
                                        message: 'Please input a valid One'
                                    },
                                ]}
                            >
                                <Input placeholder="Firstname" className="password-field" prefix={<UserSwitchOutlined className="site-form-item-icon" />} />
                            </Form.Item>

                            <Form.Item
                                name="lastname"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your last name',
                                    },
                                    {
                                        pattern: /^[a-zA-Z\s]+$/,
                                        message: 'Please input a valid One'
                                    }
                                ]}
                            >
                                <Input placeholder="Lastname" className="password-field" prefix={<UserSwitchOutlined className="site-form-item-icon" />} />
                            </Form.Item>

                            <Form.Item
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your phone",
                                    },
                                    {
                                        pattern: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                        message: "Please input a valid One"

                                    }
                                ]}
                            >
                                <Input placeholder="Phone Number" className="password-field" prefix={<PhoneOutlined className="site-form-item-icon" />} />
                            </Form.Item>

                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your username",
                                    },
                                    {
                                        pattern: /^[0-9a-zA-Z]/,
                                        message: 'Please input a valid username'
                                    }
                                ]}
                            >
                                <Input placeholder="Username" className="password-field" prefix={<UserOutlined className="site-form-item-icon" />} />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your e-mail",
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
                                        message: 'Please input your password',
                                    },
                                    /* {
                                        pattern: /(?=^.{8,}$)((?=.\\d)|(?=.\\W+))(?![.\\n])(?=.[A-Z])(?=.[a-z]).*$/,
                                        message: 'Please input a valid Password'
                                    },
                                    {
                                        min: 8,
                                        message: 'Password must be at least 8 Characters'
                                    }  */
                                ]}
                            >
                                <Input.Password placeholder="Password" className="password-field" />
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" className="btnSign solid" htmlType="submit">
                                    Create Account
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <img src="/img/sign-up.svg" alt="...Not found" className="sign-up-svg" />
                </div>

                <div className="panels-container-sign">

                    <div className="panel-sign-up right-panel-sign">
                        <div className="content-sign">
                            <h3 className="AfreximBank-sign">Online MarketPlace</h3>
                            <div>
                                <img src="/img/afrexim-logo.png" className="rounded-circle" />
                            </div>
                            <Link to="sign-in">
                                <button className="btnSign transparent" id="sign-in-btn">Sign In</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default SignUp;


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
