import React, { useContext, useState } from 'react';
import data from './container.json';
import moment from 'moment';
import ContainerDetail from './ContainerDetail';
import '../ContainerTrackingMain.css'
import { ContextContainer } from '../../../contexts/ContextContainer';

function ContainerResult() {

    const context_container = useContext(ContextContainer);
    const [stateShowContainerResult, setstateShowContainerResult] = useState({
        container: true,
        details: false
    })

    const VoirDetails = () => {
        setstateShowContainerResult({
            container: false,
            details: true
        })
    }

    console.log(context_container.dataContainer);

    return (
        <div className="Container">
            <h3 className="container_result_label">Container Result</h3>
            <hr className="container_result_hr" />
            {stateShowContainerResult.container &&
                <div className="rectangle_jaune_result">
                    <div className="ImageFCL_APZU_Safmarine">
                        <img src="img/FCL.png" alt="Not Found ..." className="image_left_container" />
                        <div className="APZU_Safmarine">
                            <p className="APZU">{context_container.dataContainer.data.container.number}</p>
                            <p className="safmarine">{context_container.dataContainer.data.container.iso_code}</p>
                        </div>
                    </div>

                    <hr className="APZU_hr" />

                    <ul className="timeline_root">
                        <li className="timeline_root_item">
                            <div className="timeline_root_div">
                                <p className="timeline_root_div_text">{context_container.dataContainer.data.locations[context_container.dataContainer.data.locations.length - 1].name + ", " + context_container.dataContainer.data.locations[context_container.dataContainer.data.locations.length - 1].country_code}</p>
                                <p className="timeline_root_div_text_date">
                                    {moment(context_container.dataContainer.data.route.postpod.date).format("MM-DD-YYYY")}
                                </p>
                            </div>
                            <div className="timeline_root_icon_hr">
                                <span className="circle_source"></span>
                                <span className="icon_diliang_source"></span>
                                <span className="hr_diliang"></span>
                            </div>
                        </li>
                        <li className="timeline_root_item">
                            <div className="timeline_root_div">
                                <p className="timeline_root_div_text">{context_container.dataContainer.data.locations[0].name + ", " + context_container.dataContainer.data.locations[0].country_code}</p>
                                <p className="timeline_root_div_text_date">
                                    {moment(context_container.dataContainer.data.route.prepol.date).format("MM-DD-YYYY")}
                                </p>
                            </div>
                            <div className="timeline_root_icon_hr">
                                <span className="icon_diliang"><img src="/img/boat.png" className="boat_image" /></span>
                            </div>
                        </li>
                    </ul>

                    <button type="button" className="btn btn-warning text-white voir_details" onClick={VoirDetails}>
                        Voir details
                    </button>
                </div>
            }

            {stateShowContainerResult.details &&
                <div>
                     <ContainerDetail />
                </div>
            }
        </div>
    )
}

export default ContainerResult;