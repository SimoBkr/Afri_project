import React, { useContext } from 'react';
import { ContextUser } from '../../contexts/ContextUser';
import Navbar from '../Navbar';
import ImageShipSchedules from './ImageShipSchedules';
import FilterShipSchedules from './FilterShipSchedules/FilterShipSchedules';
import ShipSchedulesResult from './ShipSchedulesResult/ShipSchedulesResult';

const ShipSchedulesMain = () => {
    const context = useContext(ContextUser);

    return (
        <>
            <Navbar formUser={context.formUser} setformUser={context.setformUser} />
            <div>
                <div className="container">
                    <ImageShipSchedules />
                </div>
                <div className="filter_container_tracking">
                    <FilterShipSchedules />
                </div>
                <div className="container ship_schedules_result">
                    <ShipSchedulesResult />
                </div>
            </div>
        </>
    );
}

export default ShipSchedulesMain;