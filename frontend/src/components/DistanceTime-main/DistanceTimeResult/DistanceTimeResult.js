import React from 'react';
import '../DistanceTimeMain.css';
import TransitTime from './TransitTime';
import MapComponent from './Map_DistanceTime/Map';

function DistanceTimeResult() {

    return (
        <section>
            <div className="container result_map_flex">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="Distance_Result">
                        <TransitTime />
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="Map_Distance_Result">
                        <MapComponent />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DistanceTimeResult;