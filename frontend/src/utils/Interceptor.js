import axios from "axios";
import { getAuthInfo } from "./index";
import { isEmpty } from "./validator";
import Env from "../env";

axios.defaults.baseURL = Env.apiLink;
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

/* // Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const access_token = getAuthInfo();
    if (!isEmpty(access_token)) {
      config.headers.Authorization = `Bearer ${access_token}`;
      config.withCredentials = false;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
); */

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const authInfo = getAuthInfo();
    if (!isEmpty(authInfo)) {
      const { access_token } = authInfo;
      config.headers.Authorization = `Bearer ${access_token}`;
      config.withCredentials = false;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // if (error.response) {
    //     const code = error.response.status;
    //     // if (code === 401) removeJWT();
    //     openNotification('error', errorResponseHandler(error));
    // }
    return Promise.reject(error);
  }
);
