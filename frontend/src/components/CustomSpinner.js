import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

const CustomSpinner = ({ children }) => (
  <Spin indicator={antIcon} size="large">
    {children}
  </Spin>
);

export default CustomSpinner;
