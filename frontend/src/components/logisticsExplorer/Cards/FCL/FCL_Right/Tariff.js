import React, { useContext, useState } from 'react'
import { ContextLogistics } from '../../../../../contexts/ContextLogistics'
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

  const SommeFrom = shipment.freight[0].portFeesFrom.reduce((totalFrom, portFrom) => totalFrom + portFrom.price, 0);
  const SommeTo = shipment.freight[0].portFeesTo.reduce((totalTo, portTo) => totalTo + portTo.price, 0);

  const handleChangePickUp = (evt) => {
    const valuePickUp = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
      context.setstateTariff({
        ...context.stateTariff,
        [evt.target.name]: valuePickUp,
        PortOfOrigin: valuePickUp,
        PortOfOriginPrice: valuePickUp ? SommeFrom : 0,
        PickUpPrice: context.stateTariff.PickUpOption === "Truck" ? shipment.freight[0].truckFrom.price : shipment.freight[0].railFrom.price
      })
  }

  const handleChangeDelivery = (evt) => {
    const valuePickUp = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
      context.setstateTariff({
        ...context.stateTariff,
        [evt.target.name]: valuePickUp,
        PortOfDischarge: valuePickUp,
        PortOfDischargePrice: valuePickUp ? SommeTo : 0,
        DeliveryPrice: context.stateTariff.DeliveryOption === "Truck" ? shipment.freight[0].truckTo.price : shipment.freight[0].railTo.price
      })
  }

  const handleChangePickUpRadios = (evt) => {
      context.setstateTariff({
        ...context.stateTariff,
        PickUpOption: evt.target.value,
        PickUpPrice: context.stateTariff.PickUpOption === "Rail" ? shipment.freight[0].truckFrom.price : shipment.freight[0].railFrom.price
      })
  }

  const handleChangeDeliveryRadios = (evt) => {
      context.setstateTariff({
        ...context.stateTariff,
        DeliveryOption: evt.target.value,
        DeliveryPrice: context.stateTariff.DeliveryOption === "Rail" ? shipment.freight[0].truckTo.price : shipment.freight[0].railTo.price
      })
  }

  /* Handle Change Value Price Of Port Of Origin */
  const handleChangePortOfOrigin = (evt) => {
    const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
      context.setstateTariff({
        ...context.stateTariff,
        [evt.target.name]: value,
        PortOfOriginPrice: value ? SommeFrom : 0,
      });
  }

  /* Handle Change Value Price Of Port Of Discharge */
  const handleChangePortOfDischarge = (evt) => {
    const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
      context.setstateTariff({
        ...context.stateTariff,
        [evt.target.name]: value,
        PortOfDischargePrice: value ? SommeTo : 0,
      });
  }

  return (
    <div>
      <div className="formcheck custminp smallcard input-group-prepend" style={{ "height": "40px" }} >
        <input className="custcheckbox form-check-input" type="checkbox" name="PickUp" checked={context.stateTariff.PickUp} onChange={handleChangePickUp} />
        <img src={context.stateTariff.PickUpOption === "Truck" ? "/img/PickUp.png" : "/img/Rail.png"} className="iconpos" />
        <p className="customText2">Pick up</p>
        <p className="price">
          ${context.stateTariff.PickUpPrice}
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
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="truck_pickup" id="truck_pickup1" value="Truck"
                    onChange={handleChangePickUpRadios} checked={context.stateTariff.PickUpOption === "Truck"} />
                  <label className="form-check-label customText3" for="truck_pickup1">Truck</label>
                </div>
              </td>
              <td>{shipment.freight[0].truckFrom.transitTime}</td>
              <td>{shipment.freight[0].truckFrom.distance}</td>
              <td style={{ fontSize: "15px", fontWeight: "bold" }}>${shipment.freight[0].truckFrom.price}</td>
            </tr>

            <tr>
              <td>
                <div className="form-check">
                  <input className="custradio form-check-input" type="radio" name="rail_pickup" id="rail_pickup2" value="Rail"
                    onChange={handleChangePickUpRadios} checked={context.stateTariff.PickUpOption === "Rail"} />
                  <label className="form-check-label customText3" for="rail_pickup2">Rail</label>
                </div>
              </td>
              <td>{shipment.freight[0].railFrom.transitTime}</td>
              <td>{shipment.freight[0].railFrom.distance}</td>
              <td style={{ fontSize: "15px", fontWeight: "bold" }}>${shipment.freight[0].railFrom.price}</td>
            </tr>
          </tbody>
        </table>
      }

      <div className="formcheck custominp smallcard input-group-prepend" style={{ "height": "40px" }}>
        <input class={context.stateTariff.PickUp ? "custcheckbox form-check-input checkbox-disabled" : "custcheckbox form-check-input"} type="checkbox" name="PortOfOrigin"
          checked={context.stateTariff.PortOfOrigin} onChange={handleChangePortOfOrigin} disabled={context.stateTariff.PickUp} />
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
              <th scope="col">{shipment.freight[0].containerCode}</th>
            </tr>
          </thead>
          <tbody>
            {shipment.freight[0].portFeesFrom.map((result, index) => {
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
        <input class="custcheckbox form-check-input checkbox-disabled" type="checkbox" name="OceanFreight" checked={context.stateTariff.OceanFreight} disabled />
        <img src="/img/Ocean_Freight.png" className="iconpos" />
        <div style={{ display: "flex" }}>
          <p className="customText2">Ocean Freight <i></i></p>
        </div>
        <p className="price">
          ${shipment.freight[0].price}
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
                  <label className="form-check-label customText3">{shipment.freight[0].containerType}</label>
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td style={{ fontSize: "15px", fontWeight: "bold" }}>${shipment.freight[0].price}</td>
            </tr>
          </tbody>
        </table>
      }

      <div className="formcheck custominp smallcard input-group-prepend" style={{ "height": "40px" }}>
        <input className={context.stateTariff.Delivery ? "custcheckbox form-check-input checkbox-disabled" : "custcheckbox form-check-input"} type="checkbox" name="PortOfDischarge"
          checked={context.stateTariff.PortOfDischarge} onChange={handleChangePortOfDischarge} disabled={context.stateTariff.Delivery} />
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
              <th scope="col">{shipment.freight[0].containerCode}</th>
            </tr>
          </thead>
          <tbody>
            {shipment.freight[0].portFeesTo.map((result, index) => {
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
        <input className="custcheckbox form-check-input" type="checkbox" name="Delivery" checked={context.stateTariff.Delivery} onChange={handleChangeDelivery} />
        <img src={context.stateTariff.DeliveryOption === "Truck" ? "/img/PickUp.png" : "/img/Rail.png"} className="iconpos" />
        <p className="customText2">Delivery</p>
        <p className="price">
          ${context.stateTariff.DeliveryPrice}
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
              <td>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="truck_delivery" id="truck_delivery1" value="Truck"
                    onChange={handleChangeDeliveryRadios} checked={context.stateTariff.DeliveryOption === "Truck"} />
                  <label className="form-check-label customText3" for="truck_delivery1">Truck</label>
                </div>
              </td>
              <td>{shipment.freight[0].truckTo.transitTime}</td>
              <td>{shipment.freight[0].truckTo.distance}</td>
              <td style={{ fontSize: "15px", fontWeight: "bold" }}>${shipment.freight[0].truckTo.price}</td>
            </tr>

            <tr>
              <td>
                <div className="form-check">
                  <input className="custradio form-check-input" type="radio" name="rail_delivery" id="rail_delivery2" value="Rail"
                    onChange={handleChangeDeliveryRadios} checked={context.stateTariff.DeliveryOption === "Rail"} />
                  <label className="form-check-label customText3" for="rail_delivery2">Rail</label>
                </div>
              </td>
              <td>{shipment.freight[0].railTo.transitTime}</td>
              <td>{shipment.freight[0].railTo.distance}</td>
              <td style={{ fontSize: "15px", fontWeight: "bold" }}>${shipment.freight[0].railTo.price}</td>
            </tr>
          </tbody>
        </table>
      }

    </div>
  )
}

export default Tariff;