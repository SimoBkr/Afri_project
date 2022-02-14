import React, { useContext } from 'react';
import '../ShipSchedulesMain';
import { Menu, Slider, Checkbox } from 'antd';
import { ContextShip } from '../../../contexts/ContextShip';

function Menu_Left() {

    const { SubMenu } = Menu;
    const context_ship = useContext(ContextShip);

    const handleClick = (e) => {
        console.log('click ', e);
    };

    const marks_departure = {
        0: <div className="first_date">0 Jul 2021</div>,
        100: <div className="last_date">20 Jul 2021</div>
    }

    const marks_arrival = {
        0: <div className="first_date">0 Jul 2021</div>,
        100: <div className="last_date">20 Jul 2021</div>
    }

    const marks_transit_time = {
        0: <div className="first_date">24 days</div>,
        100: <div className="last_date">42 days</div>
    }

    const handleChangeTransshipments = (evt) => {
        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        context_ship.settransshipments({
            ...context_ship.transshipments,
            [evt.target.name]: value ? evt.target.value : ""
        })
    }
    
    const handleChangeOdessa = (evt) => {
        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        context_ship.setformShip({
            ...context_ship.formShip,
            [evt.target.name]: value ? evt.target.value : ""
        })
    }

    return (
        <div className="Menu_Ship_Left">
            <Menu
                onClick={handleClick}
                style={{
                    width: 330,
                    backgroundColor: "white",
                    boxShadow: "0 10px 30px rgba(0,0,0,.3)",
                    borderRadius: "10px"
                }}
                mode="inline"
            >
                <SubMenu key="sub1" title={<div className="Title_Services_Left">Transshipments</div>}>
                    <div className="sub1_checkbox_direct">
                        <div className="form-check">
                            <input className="form-check-input checkbox_sub1" type="checkbox" name="direct" id="Direct1" value="Direct"
                                onChange={handleChangeTransshipments} checked={context_ship.transshipments.direct === "Direct"} />
                            <label className="form-check-label" for="Direct1">
                                Direct
                            </label>
                        </div>
                    </div>
                    <div className="sub1_checkbox_direct">
                        <div className="form-check">
                            <input className="form-check-input checkbox_sub1" type="checkbox" name="OneTransshipment" id="OneTransshipment1" value="1 transshipment"
                                onChange={handleChangeTransshipments} checked={context_ship.transshipments.OneTransshipment === "1 transshipment"} />
                            <label className="form-check-label" for="OneTransshipment1">
                                1 transshipment
                            </label>
                        </div>
                    </div>
                    <div className="sub1_checkbox_direct">
                        <div className="form-check">
                            <input className="form-check-input checkbox_sub1" type="checkbox" name="TwoAndMoreTransshipment" id="TwoAndMoreTransshipment1" value="2 and more transshipments"
                                onChange={handleChangeTransshipments} checked={context_ship.transshipments.TwoAndMoreTransshipment === "2 and more transshipments"} />
                            <label className="form-check-label" for="TwoAndMoreTransshipment">
                                2 and more transshipments
                            </label>
                        </div>
                    </div>
                </SubMenu>
                <hr className="hr_shipping_lines_left" />
                <SubMenu key="sub2" title={<div className="Title_Services_Left">Shipping lines</div>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                <hr className="hr_shipping_lines_left" />
                <SubMenu key="sub3" title={<div className="Title_Services_Left">Departure</div>}>
                    <div className="submenu_slider">
                        <Slider range marks={marks_departure} defaultValue={[0, 50]} className="slider_departure" />
                    </div>
                </SubMenu>
                <hr className="hr_shipping_lines_left" />
                <SubMenu key="sub4" title={<div className="Title_Services_Left">Arrival</div>}>
                    <div className="submenu_slider">
                        <Slider range marks={marks_arrival} defaultValue={[0, 50]} className="slider_departure" />
                    </div>
                </SubMenu>
                <hr className="hr_shipping_lines_left" />
                <SubMenu key="sub5" title={<div className="Title_Services_Left">Transit time</div>}>
                    <div className="submenu_slider">
                        <Slider range marks={marks_transit_time} defaultValue={[0, 50]} className="slider_departure" />
                    </div>
                </SubMenu>
                <hr className="hr_shipping_lines_left" />
                <SubMenu key="sub6" title={<div className="Title_Services_Left">Ports of loading</div>}>
                    <div className="sub1_checkbox_direct">
                        <div className="form-check">
                            <input className="form-check-input checkbox_sub1" type="checkbox" name="portOfDeparture" id="Direct1" 
                            value={context_ship.formShip.portOfDeparture} onChange={handleChangeOdessa} checked={context_ship.formShip.portOfDeparture === "Odessa"} />
                            <label className="form-check-label" for="Direct1">
                                Odessa
                            </label>
                        </div>
                    </div>
                </SubMenu>
                <hr className="hr_shipping_lines_left" />
                <SubMenu key="sub7" title={<div className="Title_Services_Left">Ports of discharge</div>}>
                    <div className="sub1_checkbox_direct">
                        <div className="form-check">
                            <input className="form-check-input checkbox_sub1" type="checkbox" name="direct" id="Direct1" value="Direct"
                                onChange={handleChangeTransshipments} checked={context_ship.transshipments.direct === "Direct"} />
                            <label className="form-check-label" for="Direct1">
                                AAHRUS
                            </label>
                        </div>
                    </div>
                    <div className="sub1_checkbox_direct">
                        <div className="form-check">
                            <input className="form-check-input checkbox_sub1" type="checkbox" name="direct" id="Direct1" value="Direct"
                                onChange={handleChangeTransshipments} checked={context_ship.transshipments.direct === "Direct"} />
                            <label className="form-check-label" for="Direct1">
                                FREDERICIA
                            </label>
                        </div>
                    </div>
                    <div className="sub1_checkbox_direct">
                        <div className="form-check">
                            <input className="form-check-input checkbox_sub1" type="checkbox" name="direct" id="Direct1" value="Direct"
                                onChange={handleChangeTransshipments} checked={context_ship.transshipments.direct === "Direct"} />
                            <label className="form-check-label" for="Direct1">
                                Taulov
                            </label>
                        </div>
                    </div>
                </SubMenu>
                <hr className="hr_shipping_lines_left" />
                <SubMenu key="sub8" title={<div className="Title_Services_Left">Services</div>}>
                    <Menu.Item key="21">Option 17</Menu.Item>
                    <Menu.Item key="22">Option 18</Menu.Item>
                    <Menu.Item key="23">Option 19</Menu.Item>
                    <Menu.Item key="24">Option 20</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    )
}

export default Menu_Left;