import React, { useContext } from 'react';
import { Card } from 'antd';
import moment from 'moment';
import { ContextContainer } from '../../../contexts/ContextContainer';

function ContainerDetail() {

    const context_container = useContext(ContextContainer);

    function vessel_name(ev) {
        return context_container.dataContainer.data.vessels.filter(vessel => vessel.id === ev).map(v => { return (v.name) });
    }

    return (
        <div>
            <ul className="timeline_root_detail">
                <li className="timeline_root_item_detail">
                    <div className="timeline_root_icon_hr_detail">
                        <span className="icon_diliang_source_detail">
                            <img src="/img/Coountry.png" className="world_img_detail" />
                        </span>
                        <span className="hr_diliang_detail"></span>
                    </div>
                    <div className="timeline_root_div_detail">
                        <Card size="small" title={<p className="text_container_tracking">{context_container.dataContainer.data.locations[context_container.dataContainer.data.locations.length - 1].name}</p>} className="Card_Container_Tracking">
                            <div className="line_height_p">
                                {context_container.dataContainer.data.container.events.filter(event => event.location === context_container.dataContainer.data.locations[context_container.dataContainer.data.locations.length - 1].id).map((ev, ndx) => {
                                    return (
                                        <>
                                            <p key={ndx}>
                                                {moment(ev.date).format("MM-DD-YYYY") + " - " + ev.description}
                                            </p>
                                            <p>
                                                {ev.vessel === null ?
                                                    <>{" "}</>
                                                    :
                                                    <>-{"(Vessel name: " + vessel_name(ev.vessel) + ")"}</>
                                                }
                                            </p>
                                        </>
                                    );
                                })}
                            </div>
                        </Card>
                    </div>
                </li>

                <li className="timeline_root_item_detail">
                    <div className="timeline_root_icon_hr_detail">
                        <span className="icon_diliang_source_detail">
                            <img src="/img/Coountry.png" className="world_img_detail" />
                        </span>
                        <span className="hr_diliang_detail"></span>
                    </div>
                    <div className="timeline_root_div_detail">
                        <Card size="small" title={<p className="text_container_tracking">{context_container.dataContainer.data.locations[1].name}</p>} className="Card_Container_Tracking">
                            <div className="line_height_p">
                                {context_container.dataContainer.data.container.events.filter(event => event.location === context_container.dataContainer.data.locations[1].id).map((ev, ndx) => {
                                    return (
                                        <>
                                            <p key={ndx}>
                                                {moment(ev.date).format("MM-DD-YYYY") + " - " + ev.description}
                                            </p>
                                            <p>
                                                {ev.vessel === null ?
                                                    <>{" "}</>
                                                    :
                                                    <>-{"(Vessel name: " + vessel_name(ev.vessel) + ")"}</>
                                                }
                                            </p>
                                        </>
                                    );
                                })}
                            </div>
                        </Card>
                    </div>
                </li>
                <li className="timeline_root_item_detail">
                    <div className="timeline_root_icon_hr_detail">
                        <span className="icon_diliang_source_detail">
                            <img src="/img/Coountry.png" className="world_img_detail" />
                        </span>
                    </div>
                    <div className="timeline_root_div_detail">
                        <Card size="small" title={<p className="text_container_tracking">{context_container.dataContainer.data.locations[0].name}</p>} className="Card_Container_Tracking">
                            <div className="line_height_p">
                                {context_container.dataContainer.data.container.events.filter(event => event.location === context_container.dataContainer.data.locations[0].id).map((ev, ndx) => {
                                    return (
                                        <>
                                            <p key={ndx}>
                                                {moment(ev.date).format("MM-DD-YYYY") + " - " + ev.description}
                                            </p>
                                            <p>
                                                {ev.vessel === null ?
                                                    <>{" "}</>
                                                    :
                                                    <>-{"(Vessel name: " + vessel_name(ev.vessel) + ")"}</>
                                                }
                                            </p>
                                        </>
                                    );
                                })}
                            </div>
                        </Card>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ContainerDetail;