import React from 'react';
import '../ShipSchedulesMain';
import Menu_Left from './Menu_Left';
import Ship_Schedules from './Ship_Schedules';

function ShipSchedulesResult() {

    return (
        <section>
            <div className="container shipping_lines_result">
                <div className="col-12 col-md-6 col-lg-4">
                    <Menu_Left />
                </div>
                <div className="col-12 col-md-6 col-lg-9" style={{marginLeft: "-25px"}}>
                    <Ship_Schedules />
                </div>
            </div>
        </section>
    )
}

export default ShipSchedulesResult;