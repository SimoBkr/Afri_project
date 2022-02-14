import React, { useState } from 'react';
import './UserInfo.css';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const ChangePassword = () => {

    const onFinish = (values) => {
        axios.put("http://localhost:9000/api/user/auth/changepassword", 
        {
            email: values.email,
            oldpassword: values.oldpassword,
            newpassword: values.newpassword,
            confirmpassword: values.confirmpassword
        })
        .then(res =>{
            console.log(res.data);
            message.success(`${res.data.message}`,3)
        })
        .catch(err => {
            message.warning(`${err.response.data.message}`, 3);
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log(" Error of Fetching data 'Change Password' ", errorInfo);
    };

    return (
        <div className="card-body">
            <p className="text-left font-weight-bold h4">Change Password</p>
            <br /><br />
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
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
                    <Input placeholder="E-mail" className="password-field" />
                </Form.Item>

                <Form.Item
                    name="oldpassword"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your old password',
                        },
                    ]}
                >
                    <Input.Password placeholder="Old Password" className="password-field" />
                </Form.Item>

                <Form.Item
                    name="newpassword"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please input your new password',
                        },
                    ]}
                >
                    <Input.Password placeholder="New Password" className="password-field" />
                </Form.Item>

                <Form.Item
                    name="confirmpassword"
                    dependencies={["newpassword"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please Confirm your new password',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("newpassword") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    "Your password and confirmation password do not match. "
                                )
                            }
                        })
                    ]}
                >
                    <Input.Password placeholder="Confirm Password" className="password-field" />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" className="btnSign solid">
                        Change Password
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default ChangePassword;


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 24,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 16,
    },
};
