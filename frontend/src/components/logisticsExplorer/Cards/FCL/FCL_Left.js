import React, { useState, useCallback, useContext } from 'react';
import '../ExplorerSection.css'
import { Collapse } from 'react-collapse'
import { ContextLogistics } from '../../../../contexts/ContextLogistics';

function FCL_Left() {

    const context = useContext(ContextLogistics);
    const accessibilityIds = {
        checkbox: 'accessible-marker-example1',
        button: 'accessible-marker-example2'
    };
    const [isButtonCollapseOpen1, setIsButtonCollapseOpen1] = useState(false);
    const [isButtonCollapseOpen2, setIsButtonCollapseOpen2] = useState(false);

    const onClick1 = useCallback(
        () => setIsButtonCollapseOpen1(!isButtonCollapseOpen1),
        [isButtonCollapseOpen1]
    );

    const onClick2 = useCallback(
        () => setIsButtonCollapseOpen2(!isButtonCollapseOpen2),
        [isButtonCollapseOpen2]
    );

    function increment(e) {
        context.setStateBoxLeft({
            ...context.stateBoxLeft,
            [e.target.name]: parseInt(e.target.value) + 1
        })
    }
    function decrement(e) {
        if (parseInt(e.target.value) > 0) {
            context.setStateBoxLeft({
                ...context.stateBoxLeft,
                [e.target.name]: parseInt(e.target.value) - 1
            })
        }
    }

    const handleChangeTypesOfContainers = (evt) => {
        context.setStateBoxLeft({
            ...context.stateBoxLeft,
            TypesOfContainers: evt.target.value
        })
    }

    const handleChangePickUp = (evt) => {
        const valuePickUp = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        context.setStateBoxLeft({
            ...context.stateBoxLeft,
            [evt.target.name]: valuePickUp,
            PortOfOrigin: valuePickUp
        })
        context.setstateTariff({
            ...context.stateTariff,
            [evt.target.name]: valuePickUp,
            PortOfOrigin: valuePickUp
        })
    }

    const handleChangeDelivery = (evt) => {
        const valuePickUp = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        context.setStateBoxLeft({
            ...context.stateBoxLeft,
            [evt.target.name]: valuePickUp,
            PortOfDischarge: valuePickUp
        })
        context.setstateTariff({
            ...context.stateTariff,
            [evt.target.name]: valuePickUp,
            PortOfDischarge: valuePickUp
        })
    }

    const handleChangePickUpRadios = (evt) => {
        context.setStateBoxLeft({
            ...context.stateBoxLeft,
            PickUpOption: evt.target.value
        })
        context.setstateTariff({
            ...context.stateTariff,
            PickUpOption: evt.target.value
        })
    }

    const handleChangeDeliveryRadios = (evt) => {
        context.setStateBoxLeft({
            ...context.stateBoxLeft,
            DeliveryOption: evt.target.value
        })
        context.setstateTariff({
            ...context.stateTariff,
            DeliveryOption: evt.target.value
        })
    }

    const handleChange = (evt) => {
        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        context.setStateBoxLeft({ 
            ...context.stateBoxLeft, 
            [evt.target.name]: value 
        });
        context.setstateTariff({
            ...context.stateTariff,
            [evt.target.name]: value        
        })
    }

    return (
        <div className="Container">
            <h3 className="name">Types of containers</h3>
            <hr className="hr2tr" />
            <div className="custominp input-group-prepend">
                <div class="form-check marginLeft">
                    <input class="form-check-input" type="radio" name="Standard1" id="Standard11" value="ST20" onChange={handleChangeTypesOfContainers} 
                    checked={context.stateBoxLeft.TypesOfContainers === "ST20"} />
                    <label class="form-check-label text_typesOfContainers" for="Standard11">
                        20° Standard
                    </label>
                </div>
                <button className="custombtn input-group-text" name="ST20" value={context.stateBoxLeft.ST20} onClick={(e) => { increment(e) }}>+</button>
                <output type="text" class="Border form-control">{context.stateBoxLeft.ST20}</output>
                <button className="custombtn input-group-text" name="ST20" value={context.stateBoxLeft.ST20} onClick={(e) => { decrement(e) }}>-</button>
            </div>
            <div className="custominp input-group-prepend">
                <div class="form-check marginLeft">
                    <input class="form-check-input" type="radio" name="Standard2" id="Standard21" value="ST40" onChange={handleChangeTypesOfContainers} 
                    checked={context.stateBoxLeft.TypesOfContainers === "ST40"} />
                    <label class="form-check-label text_typesOfContainers" for="Standard21">
                        40° Standard
                    </label>
                </div>
                <button className="custombtn input-group-text" name="ST40" value={context.stateBoxLeft.ST40} onClick={(e) => { increment(e) }}>+</button>
                <output type="text" class="Border form-control">{context.stateBoxLeft.ST40}</output>
                <button className="custombtn input-group-text" name="ST40" value={context.stateBoxLeft.ST40} onClick={(e) => { decrement(e) }}>-</button>
            </div>
            <div className="custominp input-group-prepend">
                <div class="form-check marginLeft">
                    <input class="form-check-input" type="radio" name="HighCube1" id="HighCube11" value="HQ40" onChange={handleChangeTypesOfContainers} 
                    checked={context.stateBoxLeft.TypesOfContainers === "HQ40"} />
                    <label class="form-check-label text_typesOfContainers" for="HighCube11">
                        40° High Cube
                    </label>
                </div>
                <button className="custombtn input-group-text" name="HQ40" value={context.stateBoxLeft.HQ40} onClick={(e) => { increment(e) }}>+</button>
                <output type="text" class="Border form-control">{context.stateBoxLeft.HQ40}</output>
                <button className="custombtn input-group-text" name="HQ40" value={context.stateBoxLeft.HQ40} onClick={(e) => { decrement(e) }}>-</button>
            </div>
            <div className="custominp input-group-prepend">
                <div class="form-check marginLeft">
                    <input class="form-check-input" type="radio" name="Refrigerated1" id="Refrigerated11" value="RF20" onChange={handleChangeTypesOfContainers} 
                    checked={context.stateBoxLeft.TypesOfContainers === "RF20"} />
                    <label class="form-check-label text_typesOfContainers" for="Refrigerated11">
                        20° Refrigerated
                    </label>
                </div>
                <button className="custombtn input-group-text" name="RF20" value={context.stateBoxLeft.RF20} onClick={(e) => { increment(e) }}>+</button>
                <output type="text" class="Border form-control">{context.stateBoxLeft.RF20}</output>
                <button className="custombtn input-group-text" name="RF20" value={context.stateBoxLeft.RF20} onClick={(e) => { decrement(e) }}>-</button>
            </div>
            <div className="custominp input-group-prepend">
                <div class="form-check marginLeft">
                    <input class="form-check-input" type="radio" name="Refrigerated2" id="Refrigerated21" value="RF40" onChange={handleChangeTypesOfContainers} 
                    checked={context.stateBoxLeft.TypesOfContainers === "RF40"} />
                    <label class="form-check-label text_typesOfContainers" for="Refrigerated21">
                        40° Refrigerated
                    </label>
                </div>
                <button className="custombtn input-group-text" name="RF40" value={context.stateBoxLeft.RF40} onClick={(e) => { increment(e) }}>+</button>
                <output type="text" class="Border form-control">{context.stateBoxLeft.RF40}</output>
                <button className="custombtn input-group-text" name="RF40" value={context.stateBoxLeft.RF40} onClick={(e) => { decrement(e) }}>-</button>
            </div>
            <div className="custominp input-group-prepend">
                <div class="form-check marginLeft">
                    <input class="form-check-input" type="radio" name="HighCube2" id="HighCube21" value="HQ45" onChange={handleChangeTypesOfContainers} 
                    checked={context.stateBoxLeft.TypesOfContainers === "HQ45"} />
                    <label class="form-check-label text_typesOfContainers" for="HighCube21">
                        45° High Cube
                    </label>
                </div>
                <button className="custombtn input-group-text" name="HQ45" value={context.stateBoxLeft.HQ45} onClick={(e) => { increment(e) }}>+</button>
                <output type="text" class="Border form-control">{context.stateBoxLeft.HQ45}</output>
                <button className="custombtn input-group-text" name="HQ45" value={context.stateBoxLeft.HQ45} onClick={(e) => { decrement(e) }}>-</button>
            </div>
            <div>
                <h3 className="name">Included Services</h3>
                <hr className="hr2tr" />
                <div className="formcheck custominp input-group-prepend">
                    <img src={context.stateBoxLeft.PickUpOption === "Truck" ? "/img/PickUp.png" : "/img/Rail.png"} className="d-table-cell" />
                    <p className="customText3 p">Pick up</p>
                    <input className="form-check-input customcheck" type="checkbox" name="PickUp"
                        checked={context.stateBoxLeft.PickUp} onChange={handleChangePickUp}></input>

                    {isButtonCollapseOpen1 ?
                        <button className="ClickToHaveRadioButtons_PickUp" aria-controls={accessibilityIds.button}
                            aria-expanded={isButtonCollapseOpen1} onClick={onClick1} type="button">&#9650;</button>
                        :
                        <button className="ClickToHaveRadioButtons_PickUp" aria-controls={accessibilityIds.button}
                            aria-expanded={isButtonCollapseOpen1} onClick={onClick1} type="button">&#9660;</button>
                    }
                </div>
                <Collapse
                    isOpened={isButtonCollapseOpen1}>
                    <div className="radioboxes" id={accessibilityIds.button}>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="truck_pickup_boxleft" id="truck_pickup_boxleft1" value="Truck"
                                onChange={handleChangePickUpRadios} checked={context.stateBoxLeft.PickUpOption === "Truck"} />
                            <label className="form-check-label customText3" for="truck_pickup_boxleft1">Truck</label>
                        </div>
                        <div className="form-check">
                            <input className="custradio form-check-input" type="radio" name="rail_pickup_boxleft" id="rail_pickup_boxleft2" value="Rail"
                                onChange={handleChangePickUpRadios} checked={context.stateBoxLeft.PickUpOption === "Rail"} />
                            <label className="form-check-label customText3" for="rail_pickup_boxleft2">Rail</label>
                        </div>
                    </div>
                </Collapse>
            </div>
            <div className="formcheck custominp1 input-group-prepend">
                <img src="/img/Port.png" className="d-table-cell" />
                <p className="customText3 p">Port Of Origin</p>
                <input className={context.stateBoxLeft.PickUp ? "customcheck form-check-input checkbox-disabled" : "customcheck form-check-input"} type="checkbox" name="PortOfOrigin"
                    checked={context.stateBoxLeft.PortOfOrigin} onChange={handleChange} disabled={context.stateBoxLeft.PickUp}></input>
            </div>
            <div className="formcheck custominp input-group-prepend">
                <img src="/img/Ocean_Freight.png" className="d-table-cell" />
                <p className="customText3 p">Ocean Freight</p>
                <input className="customcheck form-check-input checkbox-disabled" type="checkbox" name="OceanFreight"
                    checked={context.stateBoxLeft.OceanFreight} onChange={handleChange} disabled ></input>
            </div>
            <div className="formcheck custominp input-group-prepend">
                <img src="/img/Port.png" className="d-table-cell" />
                <p className="customText3 p">Port Of Discharge</p>
                <input className={context.stateBoxLeft.Delivery ? "customcheck form-check-input checkbox-disabled" : "customcheck form-check-input"} type="checkbox" name="PortOfDischarge"
                    checked={context.stateBoxLeft.PortOfDischarge} onChange={handleChange} disabled={context.stateBoxLeft.Delivery}></input>
            </div>
            <div className="formcheck custominp input-group-prepend">
                <img src={context.stateBoxLeft.DeliveryOption === "Truck" ? "/img/PickUp.png" : "/img/Rail.png"} class="d-table-cell" />
                <p className="customText3 p">Delivery</p>
                <input className="form-check-input customcheck" type="checkbox" name="Delivery"
                    checked={context.stateBoxLeft.Delivery} onChange={handleChangeDelivery} ></input>
                {isButtonCollapseOpen2 ?
                    <button className="ClickToHaveRadioButtons_Delivery" aria-controls={accessibilityIds.button}
                        aria-expanded={isButtonCollapseOpen2} onClick={onClick2} type="button">&#9650;</button>
                    :
                    <button className="ClickToHaveRadioButtons_Delivery" aria-controls={accessibilityIds.button}
                        aria-expanded={isButtonCollapseOpen2} onClick={onClick2} type="button">&#9660;</button>
                }
            </div>
            <Collapse
                isOpened={isButtonCollapseOpen2}>
                <div className="radioboxes" id={accessibilityIds.button}>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="truck_delivery_boxright" id="truck_delivery_boxright1" value="Truck"
                            onChange={handleChangeDeliveryRadios} checked={context.stateBoxLeft.DeliveryOption === "Truck"} />
                        <label className="form-check-label customText3" for="truck_delivery_boxright1">Truck</label>
                    </div>
                    <div className="form-check">
                        <input className="custradio form-check-input" type="radio" name="rail_delivery_boxright" id="rail_delivery_boxright2" value="Rail"
                            onChange={handleChangeDeliveryRadios} checked={context.stateBoxLeft.DeliveryOption === "Rail"} />
                        <label className="form-check-label customText3" for="rail_delivery_boxright2">Rail</label>
                    </div>
                </div>
            </Collapse>
            <h3 className="name">Shipping Line</h3>
            <hr className="hr2tr" />
            <div className="formcheck custominp input-group-prepend">
                <p className="customText p">CMDU</p>
                <input className="customcheck form-check-input" type="checkbox" name="CMDU" checked={context.stateBoxLeft.CMDU} onChange={handleChange} ></input>
            </div>
            <div className="formcheck custominp input-group-prepend">
                <p className="customText p">HAPAG LLOYD</p>
                <input className="customcheck form-check-input" type="checkbox" name="HAPAGLLOYD" checked={context.stateBoxLeft.HAPAGLLOYD} onChange={handleChange} ></input>
            </div>

        </div>
    )
}

export default FCL_Left;