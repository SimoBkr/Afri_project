import React, { createContext, useState } from "react";

export const ContextLogistics = createContext();

export const ContextLogisticsProvider = ({ children }) => {

    // Show Modal for booking now => Logistics Explorer 
    const [visible, setVisible] = useState(false);
    const [weightLCL, setweightLCL] = useState(1);
    const [volumeLCL, setvolumeLCL] = useState(1);
    const [volumeFTL, setvolumeFTL] = useState(1);
    const [weightLTL, setweightLTL] = useState(1);
    const [volumeLTL, setvolumeLTL] = useState(1);
 
    const [stateBoxLeft, setStateBoxLeft] = useState({
        ST20: 0,
        ST40: 0,
        HQ40: 0,
        RF20: 0,
        RF40: 0,
        HQ45: 0,
        TypesOfContainers: "ST20",
        PickUp: false,
        PickUpOption: "Truck",
        PortOfOrigin: false,
        OceanFreight: true,
        PortOfDischarge: false,
        Delivery: false,
        DeliveryOption: "Truck",
        CMDU: false,
        HAPAGLLOYD: false
    });

    const [stateFWL, setstateFWL] = useState({
        TypesOfContainers: "ST20",
    })

    const [stateTariff, setstateTariff] = useState({
        PickUp: false,
        PickUpPrice: 0,
        PickUpOption: "Truck",
        PortOfOrigin: false,
        PortOfOriginPrice: 0,
        OceanFreight: true,
        PortOfDischarge: false,
        PortOfDischargePrice: 0,
        Delivery: false,
        DeliveryPrice: 0,
        DeliveryOption: "Truck"
    })

    const [servicesLCL, setservicesLCL] = useState({
        weight: 0,
        volume: 0,
        PickUp: false,
        PickUpPrice: 0,
        PortOfOrigin: false,
        PortOfOriginPrice: 0,
        OceanFreight: true,
        PortOfDischarge: false,
        PortOfDischargePrice: 0,
        Delivery: false,
        DeliveryPrice: 0,
    })

    const [tarifLCL, settarifLCL] = useState({
        PickUp: false,
        PickUpPrice: 0,
        PortOfOrigin: false,
        PortOfOriginPrice: 0,
        OceanFreight: true,
        PortOfDischarge: false,
        PortOfDischargePrice: 0,
        Delivery: false,
        DeliveryPrice: 0,
    })

    return (
        <ContextLogistics.Provider
            value={{
                weightLCL, setweightLCL,
                volumeLCL, setvolumeLCL,
                weightLTL, setweightLTL,
                volumeLTL, setvolumeLTL,
                volumeFTL, setvolumeFTL,
                servicesLCL, setservicesLCL,
                stateFWL, setstateFWL,
                tarifLCL, settarifLCL,
                stateBoxLeft, setStateBoxLeft, stateTariff, setstateTariff,
                visible, setVisible,
            }}
        >
            {children}
        </ContextLogistics.Provider>
    );
};