import React, { createContext, useState } from "react";

export const ContextShip = createContext();

export const ContextShipProvider = ({ children }) => {

    const [formShip, setformShip] = useState({
        portOfDeparture: "",
        portOfArrival : "",
        dateOfShip: "",
        selectWeeks: "1"
    }) 

    let DataShippingLines = [
        { name:"MAEU", value: false},
        { name:"MSCU", value: false},
        { name:"ZIMU", value: false},
        { name:"SEJJ", value: false},
        { name:"CMDU", value: false},
        { name:"APLU", value: false},
        { name:"ANNU", value: false},
        { name:"11DX", value: false},
        { name:"ARKU", value: false},
        { name:"22AA", value: false},
        { name:"COSU", value: false},
        { name:"SKLU", value: false},
        { name:"ONEY", value: false},
        { name:"YMLU", value: false},
        { name:"OOLU", value: false},
        { name:"SUDU", value: false},
        { name:"HLCU", value: false},
        { name:"PCIU", value: false},
        { name:"TRKU", value: false},
        { name:"EGLV", value: false},
        { name:"HDMU", value: false},
        { name:"FESO", value: false},
        { name:"ADMU", value: false},
        { name:"MATS", value: false},
        { name:"13DF", value: false},
        { name:"KMTU", value: false},
        { name:"GLSU", value: false},
        { name:"SMLM", value: false},
        { name:"12AT", value: false},
        { name:"REGU", value: false},
        { name:"ESPU", value: false},
        { name:"ESPU", value: false},
    ]

    const [shippingLinesDiv, setshippingLinesDiv] = useState(false);
    const [plannedCalls, setplannedCalls] = useState("Departure");
    const [showAlternativeOptions, setshowAlternativeOptions] = useState(false);
    const [shippingLines, setshippingLines] = useState(DataShippingLines);
    const [shippingLinesAll, setshippingLinesAll] = useState({
        name:"ALL", 
        value: false
    })

    const [transshipments, settransshipments] = useState({
        direct: "",
        OneTransshipment: "",
        TwoAndMoreTransshipment: ""
    })

    return (
        <ContextShip.Provider
            value={{
                formShip, setformShip,
                shippingLinesDiv, setshippingLinesDiv,
                plannedCalls, setplannedCalls,
                showAlternativeOptions, setshowAlternativeOptions,
                shippingLines, setshippingLines,
                shippingLinesAll, setshippingLinesAll,
                transshipments, settransshipments
            }}
        >
            {children}
        </ContextShip.Provider>
    );
};