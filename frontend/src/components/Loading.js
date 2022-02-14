import React from "react";
import CustomSpinner from "./CustomSpinner";
import { Layout } from "antd";

const Loading = () => (
  <CustomSpinner>
    <Layout style={{ height: "100vh", overflow: "auto" }} />
  </CustomSpinner>
);

export default Loading;
