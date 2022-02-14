import { isEmpty, parseString } from "./validator";
import { notification } from "antd";
import { v4 as uuid } from "uuid";
import Env from "../env";

export const camelCaseToNormal = (value) =>
  value.replace(/([A-Z])/g, " $1").replace(/^./, (str2) => str2.toUpperCase());

export const asyncHandler = (fn) => (formData, params) =>
  Promise.resolve(fn(formData, params));

export const errorResponseHandler = (err) => {
  return err.response &&
    err.response.data &&
    err.response.data.message &&
    !isEmpty(err.response.data.message)
    ? err.response.data.message
    : "Sorry, something went wrong. Please try again later.";
};

/* export const getAuthInfo = () => localStorage.getItem('access_token');
 */export const getAuthInfo = () => parseString(localStorage.getItem("auth_info"));


export const getImagePath = (imagePath) => `${Env.publicUrl}/${imagePath}`;

export const removeAuthInfo = () =>
  !isEmpty(getAuthInfo()) && localStorage.removeItem("auth_info");

export const checkResponse = (res) =>
  res && res.status === 200 && res.data && !isEmpty(res.data);

export const formatDataTable = (header, data) => {
  let columns = [];
  header.forEach((value) => {
    columns.push({
      dataIndex: value,
      title: value,
    });
  });
  let resultData = [];
  data.forEach((value) => {
    resultData.push({
      ...value,
      id: uuid(),
    });
  });
  return { columns, resultData };
};

export const openNotification = (type, message) => {
  notification[type]({
    message,
  });
};

export const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

export const layout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

export const buttonLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 8, offset: 8 },
  },
};
