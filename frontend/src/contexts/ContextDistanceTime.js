import React, { createContext, useState } from "react";
import axios from 'axios';

export const ContextDistanceTime = createContext();

export const ContextDistanceTimeProvider = ({ children }) => {

    const [selectedImage, setSelectedImage] = useState("Sea");
    const [displayPortOfOrigin, setdisplayPortOfOrigin] = useState(false);
    const [displayPortOfDestination, setdisplayPortOfDestination] = useState(false);
    const [loading, setloading] = useState(false);
    const [resultPorts, setresultPorts] = useState([]);
    const [formDistanceTime, setformDistanceTime] = useState({
        PortOfOrigin: "",
        PortOfDestination: "",
        AverageSpeed: 13
    });
    const searchPorts = (e) => {
        setloading(true);
        axios.get(`http://localhost:9000/api/countryauto/get?name=${e}`)
            .then(res => {
                setresultPorts(res.data);
                setloading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <ContextDistanceTime.Provider
            value={{
                selectedImage, setSelectedImage,
                displayPortOfOrigin, setdisplayPortOfOrigin,
                displayPortOfDestination, setdisplayPortOfDestination,
                formDistanceTime, setformDistanceTime,
                resultPorts, setresultPorts,
                searchPorts, loading
            }}
        >
            {children}
        </ContextDistanceTime.Provider>
    );
};