import React, { createContext, useState } from "react";
import axios from 'axios';

export const ContextContainer = createContext();

export const ContextContainerProvider = ({ children }) => {

    const [dataContainer, setdataContainer] = useState({
        data: {
            container: {},
            locations: [{}],
            route: {
                prepol: {},pol: {}, pod: {}, postpod: {}
            },
            vessels: []
        }
    });
    const [loading_container, setloading_container] = useState(true);
    const [containerDetect, setcontainerDetect] = useState({
        container: "",
        autoDetect: "auto"
    })

    const getDataContainer = () => {
        setloading_container(true);
        axios({
            method: "POST",
            url: "http://localhost:9000/api/container/get",
            data: {
                number: containerDetect.container,
                sealine: containerDetect.autoDetect
            },
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
        .then((res) => {
                setdataContainer(res.data);
                setloading_container(false);
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <ContextContainer.Provider
            value={{
                containerDetect, setcontainerDetect,
                getDataContainer, dataContainer,
                loading_container
            }}
        >
            {children}
        </ContextContainer.Provider>
    );
};