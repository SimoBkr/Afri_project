import React, { useContext, useState } from 'react'
import { ContextLogistics } from '../../../../../contexts/ContextLogistics'
import '../../ExplorerSection.css'

const Tarif_FTL = ({ shipment }) => {

    const context = useContext(ContextLogistics);
    const [btnPrice, setbtnPrice] = useState({
        btnPrice_Rail: false,
    })

    return (
        <div>
            <div className="formcheck custminp smallcard input-group-prepend" style={{ "height": "40px" }} >
                <input className="custcheckbox form-check-input checkbox-disabled" type="checkbox" name="Rail" checked />
                <img src="/img/Rail.png" className="iconpos" />
                <p className="customText2">Rail</p>
                <p className="price">
                    ${shipment.oceanFreight.price}
                    {btnPrice.btnPrice_Rail ?
                        <button className="btnPrice" style={{ border: "none", fontSize: "15px" }}
                            onClick={() => setbtnPrice({ ...btnPrice, btnPrice_Rail: !btnPrice.btnPrice_Rail })}>&#9650;</button>
                        :
                        <button className="btnPrice" style={{ border: "none", fontSize: "15px" }}
                            onClick={() => setbtnPrice({ ...btnPrice, btnPrice_Rail: !btnPrice.btnPrice_Rail })}>&#9660;</button>
                    }
                </p>
            </div>

            {btnPrice.btnPrice_Rail &&
                <table className="table PickUp_Table">
                    <tbody>
                        <tr>
                            <td>Rail Freight</td>
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

export default Tarif_FTL;