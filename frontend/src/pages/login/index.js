import React from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  Input,
  Layout,
  Row,
  Space,
  Typography,
} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useAuth } from "../../contexts";
import { getImagePath } from "../../utils";

const TitleAnt = Typography.Title;

const Login = ({ history }) => {
  const { loginRequest } = useAuth();

  const onFinish = async (values) => {
    // await loginRequest(values);
    // history.push("/");
  };

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Row type="flex" justify="center" align="middle">
        <Col align="middle" flex="0 0 330px">
          <Row type="flex" justify="center" align="middle">
            <Col style={{ marginTop: 80, marginBottom: 32 }}>
              <Image
                src={getImagePath("img/logo-01.svg")}
                style={{ width: 220 }}
                preview={false}
              />
            </Col>
            <Col>
              <Card bordered={true} style={{ border: "1px solid #f0f0f0" }}>
                <Space>
                  <TitleAnt level={2}>Log in</TitleAnt>
                </Space>
                <Form
                  name="normal_login"
                  className="login-form"
                  onFinish={onFinish}
                  size="large"
                  requiredMark={false}
                >
                  <Form.Item
                    label="E-mail"
                    name="username"
                    labelCol={{ span: 24 }}
                    rules={[
                      {
                        required: true,
                        message: "Please enter an e-mail",
                      },
                      {
                        type: "email",
                        message: "Please enter an valid e-mail",
                      },
                    ]}
                  >
                    <Input prefix={<UserOutlined />} />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    labelCol={{ span: 24 }}
                    rules={[
                      {
                        required: true,
                        message: "Please enter a password",
                      },
                    ]}
                  >
                    <Input prefix={<LockOutlined />} type="password" />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      style={{ width: "100%" }}
                      type="primary"
                      htmlType="button"
                      onClick={() => {
                        history.push("/home");
                      } }
                    >
                      Log in
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default Login;
