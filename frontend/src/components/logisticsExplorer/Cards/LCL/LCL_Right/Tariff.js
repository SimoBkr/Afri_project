import React, { useContext, useState } from 'react'
import { ContextLogistics } from '../../../../../contexts/ContextLogistics';
import '../../ExplorerSection.css'

const Tariff = ({ shipment }) => {

    const context = useContext(ContextLogistics);
    const [btnPrice, setbtnPrice] = useState({
        btnPrice_PickUp: false,
        btnPrice_PortOfOrigin: false,
        btnPrice_OceanFreight: false,
        btnPrice_PortOfDischarge: false,
        btnPrice_Delivery: false
    })

    const SommeFrom = shipment.oceanFreight.portFeesFrom.reduce((totalFrom, portFrom) => totalFrom + portFrom.price, 0);
    const SommeTo = shipment.oceanFreight.portFeesTo.reduce((totalTo, portTo) => totalTo + portTo.price, 0);

    const handleChangePickUp = (evt) => {
        const valuePickUp = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        context.settarifLCL({
            ...context.tarifLCL,
            [evt.target.name]: valuePickUp,
            PortOfOrigin: valuePickUp,
            PortOfOriginPrice: valuePickUp ? SommeFrom : 0,
            PickUpPrice: valuePickUp ? shipment.oceanFreight.truckFrom.price : 0
        })
    }

    const handleChangeDelivery = (evt) => {
        const valuePickUp = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        context.settarifLCL({
            ...context.tarifLCL,
            [evt.target.name]: valuePickUp,
            PortOfDischarge: valuePickUp,
            PortOfDischargePrice: valuePickUp ? SommeTo : 0,
            DeliveryPrice: valuePickUp ? shipment.oceanFreight.truckTo.price : 0
        })
    }

    /* Handle Change Value Price Of Port Of Origin */
    const handleChangePortOfOrigin = (evt) => {
        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        context.settarifLCL({
            ...context.tarifLCL,
            [evt.target.name]: value,
            PortOfOriginPrice: value ? SommeFrom : 0,
        });
    }

    /* Handle Change Value Price Of Port Of Discharge */
    const handleChangePortOfDischarge = (evt) => {
        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        context.settarifLCL({
            ...context.tarifLCL,
            [evt.target.name]: value,
            PortOfDischargePrice: value ? SommeTo : 0,
        });
    }

    return (
        <div>
            <div className="formcheck custminp smallcard input-group-prepend" style={{ "height": "40px" }} >
                <input className="custcheckbox form-check-input" type="checkbox" name="PickUp" checked={context.tarifLCL.PickUp} onChange={handleChangePickUp} />
                <img src="/img/PickUp.png" className="iconpos" />
                <p className="customText2">Pick up</p>
                <p className="price">
                    ${shipment.oceanFreight.truckFrom.price}
                    {btnPrice.btnPrice_PickUp ?
                        <button className="btnPrice" style={{ border: "none", fontSize: "15px" }}
                            onClick={() => setbtnPrice({ ...btnPrice, btnPrice_PickUp: !btnPrice.btnPrice_PickUp })}>&#9650;</button>
                        :
                        <button className="btnPrice" style={{ border: "none", fontSize: "15px" }}
                            onClick={() => setbtnPrice({ ...btnPrice, btnPrice_PickUp: !btnPrice.btnPrice_PickUp })}>&#9660;</button>
                    }
                </p>
            </div>

            {btnPrice.btnPrice_PickUp &&
                <table className="table PickUp_Table">
                    <tbody>
                        <tr>
                            <td>Freight</td>
                            <td>{shipment.oceanFreight.truckFrom.transitTime}</td>
                            <td>{shipment.oceanFreight.truckFrom.distance}</td>
                            <td style={{ fontSize: "15px", fontWeight: "bold" }}>${shipment.oceanFreight.truckFrom.price}</td>
                        </tr>
                    </tbody>
                </table>
            }

            <div className="formcheck custominp smallcard input-group-prepend" style={{ "height": "40px" }}>
                <input class={context.tarifLCL.PickUp ? "custcheckbox form-check-input checkbox-disabled" : "custcheckbox form-check-input"} type="checkbox" name="PortOfOrigin"
                    checked={context.tarifLCL.PortOfOrigin} onChange={handleChangePortOfOrigin} disabled={context.tarifLCL.PickUp} />
                <img src="/img/Port.png" className="iconpos" />
                <p className="customText2">Port Of Origin ({shipment.cityFrom.name})</p>
                <p className="price">
                    ${SommeFrom}
                    {btnPrice.btnPrice_PortOfOrigin ?
                        <button className="btnPrice" style={{ border: "none", fontSize: "15px" }}
                            onClick={() => setbtnPrice({ ...btnPrice, btnPrice_PortOfOrigin: !btnPrice.btnPrice_PortOfOrigin })}>&#9650;</button>
                        :
                        <button className="btnPrice" style={{ border: "none", fontSize: "15px" }}
                            onClick={() => setbtnPrice({ ...btnPrice, btnPrice_PortOfOrigin: !btnPrice.btnPrice_PortOfOrigin })}>&#9660;</button>
                    }
                </p>
            </div>

            {btnPrice.btnPrice_PortOfOrigin &&
                <table class="table PickUp_Table">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th scope="col">{shipment.oceanFreight.containerCode}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shipment.oceanFreight.portFeesFrom.map((result, index) => {
                            return (
                                <tr key={index}>
                                    <th><strong>{result.abbr}</strong> - {result.title}</th>
                                    <td></td>
                                    <td></td>
                                    {result.perLot === true && <td>${result.price} / perlot</td>}
                                    {result.perLot === false && <td>${result.price}</td>}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            }

            <div className="formcheck custominp smallcard input-group-prepend" style={{ "height": "40px" }}>
                <input class="custcheckbox form-check-input checkbox-disabled" type="checkbox" name="OceanFreight" checked={context.tarifLCL.OceanFreight} disabled />
                <img src="/img/Ocean_Freight.png" className="iconpos" />
                <div style={{ display: "flex" }}>
                    <p className="customText2">Ocean Freight <i></i></p>
                </div>
                <p className="price">
                    ${shipment.oceanFreight.price}
                    {btnPrice.btnPrice_OceanFreight ?
                        <button className="btnPrice" style={{ border: "none", fontSize: "15px" }}
                            onClick={() => setbtnPrice({ ...btnPrice, btnPrice_OceanFreight: !btnPrice.btnPrice_OceanFreight })}>&#9650;</button>
                        :
                        <button className="btnPrice" style={{ border: "none", fontSize: "15px" }}
                            onClick={() => setbtnPrice({ ...btnPrice, btnPrice_OceanFreight: !btnPrice.btnPrice_OceanFreight })}>&#9660;</button>
                    }
                </p>
            </div>

            {btnPrice.btnPrice_OceanFreight &&
                <table className="table PickUp_Table">
                    <tbody>
                        <tr>
                            <td>
                                <div className="form-check">
                                    <label className="form-check-label customText3">Freight</label>
                                </div>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td style={{ fontSize: "15px", fontWeight: "bold" }}>${shipment.oceanFreight.price}</td>
                        </tr>
                    </tbody>
                </table>
            }

            <div className="formcheck custominp smallcard input-group-prepend" style={{ "height": "40px" }}>
                <input className={context.tarifLCL.Delivery ? "custcheckbox form-check-input checkbox-disabled" : "custcheckbox form-check-input"} type="checkbox" name="PortOfDischarge"
                    checked={context.tarifLCL.PortOfDischarge} onChange={handleChangePortOfDischarge} disabled={context.tarifLCL.Delivery} />
                <img src="/img/Port.png" className="iconpos" />
                <p className="customText2">Port Of Discharge ({shipment.cityTo.name})</p>
                <p className="price">
                    ${SommeTo}
                    {btnPrice.btnPrice_PortOfDischarge ?
                        <button className="btnPrice" style={{ border: "none", fontSize: "15px" }}
                            onClick={() => setbtnPrice({ ...btnPrice, btnPrice_PortOfDischarge: !btnPrice.btnPrice_PortOfDischarge })}>&#9650;</button>
                        :
                        <button className="btnPrice" style={{ border: "none", fontSize: "15px" }}
                            onClick={() => setbtnPrice({ ...btnPrice, btnPrice_PortOfDischarge: !btnPrice.btnPrice_PortOfDischarge })}>&#9660;</button>
                    }
                </p>
            </div>

            {btnPrice.btnPrice_PortOfDischarge &&
                <table class="table PickUp_Table">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th scope="col">{shipment.oceanFreight.containerCode}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shipment.oceanFreight.portFeesTo.map((result, index) => {
                            return (
                                <tr key={index}>
                                    <th><strong>{result.abbr}</strong> - {result.title}</th>
                                    <td></td>
                                    <td></td>
                                    <td>${result.price}{result.perLot && <p>/ per lot</p>}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            }

            <div className="formcheck custominp smallcard input-group-prepend" style={{ "height": "40px" }}>
                <input className="custcheckbox form-check-input" type="checkbox" name="Delivery" checked={context.tarifLCL.Delivery} onChange={handleChangeDelivery} />
                <img src="/img/PickUp.png" className="iconpos" />
                <p className="customText2">Delivery</p>
                <p className="price">
                    ${shipment.oceanFreight.truckTo.price}
                    {btnPrice.btnPrice_Delivery ?
                        <button className="btnPrice" style={{ border: "none", fontSize: "15px" }}
                            onClick={() => setbtnPrice({ ...btnPrice, btnPrice_Delivery: !btnPrice.btnPrice_Delivery })}>&#9650;</button>
                        :
                        <button className="btnPrice" style={{ border: "none", fontSize: "15px" }}
                            onClick={() => setbtnPrice({ ...btnPrice, btnPrice_Delivery: !btnPrice.btnPrice_Delivery })}>&#9660;</button>
                    }
                </p>
            </div>

            {btnPrice.btnPrice_Delivery &&
                <table className="table PickUp_Table">
                    <tbody>
                        <tr>
                            <td>Freight</td>
                            <td>{shipment.oceanFreight.truckTo.transitTime}</td>
                            <td>{shipment.oceanFreight.truckTo.distance}</td>
                            <td style={{ fontSize: "15px", fontWeight: "bold" }}>${shipment.oceanFreight.truckTo.price}</td>
                        </tr>
                    </tbody>
                </table>
            }

        </div>
    )
}

export default Tariff;