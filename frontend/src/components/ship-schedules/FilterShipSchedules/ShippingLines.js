import React, { useContext } from 'react';
import '../ShipSchedulesMain.css';
import { Row, Col } from 'antd';
import { ContextShip } from '../../../contexts/ContextShip';
import { Scrollbars } from 'react-custom-scrollbars';

const ShippingLines = () => {

    const context_ship = useContext(ContextShip);

    const handleChangePlannedCalls = (evt) => {
        context_ship.setplannedCalls(evt.target.value)
    }

    const handleChange = (evt) => {
        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        context_ship.setshowAlternativeOptions(value);
    }

    const handleChangeAll = (evt) => {
        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        context_ship.setshippingLinesAll({
            ...context_ship.shippingLinesAll,
            value: value
        });
        let all = [...context_ship.shippingLines];
        if (context_ship.shippingLinesAll.value === true) {
            for (let i = 0; i < all.length; i++) {
                all[i].value = false;
            }
            context_ship.setshippingLines(all);
        }
        else {
            for (let i = 0; i < all.length; i++) {
                all[i].value = true;
            }
            context_ship.setshippingLines(all);
        }
    } 

    const handleChangeShipping = index => e => {
        const true_false = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        let newArray = [...context_ship.shippingLines];
        newArray[index].value = true_false;
        context_ship.setshippingLines(newArray);
    }

    return (
        <div>
            <Row>
                <Col span={12}>
                    <p className="View_Sort_Planned_Calls">View &amp; sort planned calls by:</p>
                    <div className="Space_PlannedCalls_And_Alternative_Options">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="Departure1" value="Departure"
                                onChange={handleChangePlannedCalls} checked={context_ship.plannedCalls === "Departure"} />
                            <label className="form-check-label style_planned_calls" for="Departure1">
                                Departure
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="Arrival1" value="Arrival"
                                onChange={handleChangePlannedCalls} checked={context_ship.plannedCalls === "Arrival"} />
                            <label className="form-check-label style_planned_calls" for="Arrival2">
                                Arrival
                            </label>
                        </div>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="ShowAlternativeOptions" id="showoptions"
                            onChange={handleChange} checked={context_ship.showAlternativeOptions} />
                        <label className="form-check-label style_planned_calls" for="showoptions">
                            Show alternative options
                        </label>
                    </div>

                </Col>
                <Col span={12}>
                    <p className="View_Sort_Planned_Calls">Shipping Lines</p>
                    <Scrollbars style={{ height: "230px" }}>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id={context_ship.shippingLinesAll.name} name={context_ship.shippingLinesAll.name}
                                onChange={handleChangeAll} checked={context_ship.shippingLinesAll.value === true } />
                            <label className="form-check-label style_planned_calls" for="all">
                                {context_ship.shippingLinesAll.name}
                            </label>
                        </div>
                        {context_ship.shippingLines.map((shipping, index) => {
                            return (
                                <div className="form-check" key={index}>
                                    <input className="form-check-input" type="checkbox" id={shipping.name} name={shipping.name}
                                        onChange={handleChangeShipping(index)} checked={shipping.value === true} />
                                    <label className="form-check-label style_planned_calls" for="all">
                                        {shipping.name}
                                    </label>
                                </div>
                            )
                        })}

                    </Scrollbars>
                </Col>
            </Row>
        </div>
    );
}

export default ShippingLines;