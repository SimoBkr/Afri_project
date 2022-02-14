import React, { useContext } from 'react';
import { ContextUser } from '../../contexts/ContextUser';
import '../Container-Tracking/ContainerTrackingMain.css';
import Navbar from '../Navbar';
import ContainerTrackingResult from './ContainerTrackingResult/ContainerTrackingResult';
import FilterTrackingContainer from './FilterTrackingContainer/FilterTrackingContainer';
import ImageContainerTracking from './ImageContainerTracking';

const ContainerTrackingMain = () => {
    const context = useContext(ContextUser);

    return (
        <>
            <Navbar formUser={context.formUser} setformUser={context.setformUser} />
            <div>
                <div className="container">
                    <ImageContainerTracking />
                </div>
                <div className="filter_container_tracking">
                    <FilterTrackingContainer />
                </div> 
                <div className="container">
                    <ContainerTrackingResult />
                </div>
            </div>
        </>
    );
}

export default ContainerTrackingMain;