import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const ContextUser = createContext();

export const ContextUserProvider = ({ children }) => {

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

  useEffect(async () => {
    await axios.get(`${ApiUrl}/userinfo`)
      .then(res => {
        setformUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  function isLoggedIn() {
    if (localStorage.getItem('access_token')) {
      return true;
    }
    return false;
  }



  return (
    <ContextUser.Provider
      value={{
        formUser, setformUser,
        isLoggedIn
      }}
    >
      {children}
    </ContextUser.Provider>
  );
};