import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const ContextFilter = createContext();

export const ContextProvider = ({ children }) => {

  //Api to consume LogisticsExplorer Api In Filter Page : / & /logistics-explorer
  const [ DistanceandtimeParams, setDistanceandtimeParams ] = useState({
    latFrom: '',
    lngFrom: '',
    latTo: '',
    lngTo: '',
    type: '',
    moyenTransport: ''
  });

  //DatePicker In Filter Page : /
  const [Date, setDate] = useState({
    datePicker: ""
  })

  //User Logged In : Page user info & navbar
  const [formUser, setformUser] = useState({});

  const ApiUrl = 'http://localhost:9000/api/user/auth';
  const access_token = localStorage.getItem('access_token');

  axios.interceptors.request.use(
    (config) => {
      // Do something before request is sent
      config.headers.authorization = `Bearer ${access_token}`;
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    axios.get(`${ApiUrl}/userinfo`)
    .then(res => {
      setformUser(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])
  
  return (
    <ContextFilter.Provider
      value={{
        DistanceandtimeParams, setDistanceandtimeParams,
        Date, setDate,
      }}
    >
      {children}
    </ContextFilter.Provider>
  );
};