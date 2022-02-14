import React, { useContext, useState } from 'react'
import { ContextLogistics } from '../../../../../contexts/ContextLogistics'
import '../../ExplorerSection.css'

const Tarif_LTL = ({ shipment }) => {

    const context = useContext(ContextLogistics);
    const [btnPrice, setbtnPrice] = useState({
        btnPrice_Truck: false,
    })

    return (
        <div>
            <div className="formcheck custminp smallcard input-group-prepend" style={{ "height": "40px" }} >
                <input className="custcheckbox form-check-input checkbox-disabled" type="checkbox" name="PickUp" checked />
                <img src="/img/PickUp.png" className="iconpos" />
                <p className="customText2">Truck</p>
                <p className="price">
                    ${shipment.oceanFreight.price}
                    {btnPrice.btnPrice_PickUp ?
                        <button className="btnPrice" style={{ border: "none", fontSize: "15px" }}
                            onClick={() => setbtnPrice({ ...btnPrice, btnPrice_Truck: !btnPrice.btnPrice_Truck })}>&#9650;</button>
                        :
                        <button className="btnPrice" style={{ border: "none", fontSize: "15px" }}
                            onClick={() => setbtnPrice({ ...btnPrice, btnPrice_Truck: !btnPrice.btnPrice_Truck })}>&#9660;</button>
                    }
                </p>
            </div>

            {btnPrice.btnPrice_Truck &&
                <table className="table PickUp_Table">
                    <tbody>
                        <tr>
                            <td>Truck Freight</td>
                            <td>{shipment.oceanFreight.truckFrom.transitTime}</td>
                            <td>{shipment.oceanFreight.truckFrom.distance}</td>
                            <td style={{ fontSize: "15px", fontWeight: "bold" }}>${shipment.oceanFreight.price}</td>
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Tarif_LTL;