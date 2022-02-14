import React, { useContext } from 'react';
import { ContextUser } from '../../contexts/ContextUser';
import '../Container-Tracking/ContainerTrackingMain.css';
import Navbar from '../Navbar';
import ImageDistanceTime from './ImageDistanceTime';
import FilterDistanceTime from './FilterDistanceTime/FilterDistanceTime';
import DistanceTimeResult from './DistanceTimeResult/DistanceTimeResult';

const DistanceTimeMain = () => {
    const context = useContext(ContextUser);

    return (
        <>
            <Navbar formUser={context.formUser} setformUser={context.setformUser} />
            <div>
                <div className="container">
                    <ImageDistanceTime />
                </div>
                <div className="filter_distance_time">
                    <FilterDistanceTime />
                </div> 
                <div className="container">
                    <DistanceTimeResult />
                </div>
            </div>
        </>
    );
}

export default DistanceTimeMain;