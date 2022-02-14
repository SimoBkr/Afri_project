import React from 'react';
import './ShipSchedulesMain.css';

function ImageShipSchedules() {

    return (
        <>
            <div>
                <h1 className="shipping_text_title">Shipping {`>`} Ship Schedules</h1>
            </div>
            <div className="feat-boxed" >
                <div className="card text-white ImageLogistics">
                    <img src="/img/ship-schedules.jpg" class="card-img ship-schedules-image" alt="..." />
                    <div class="card-img-overlay">
                        <div className="col-5 col-md-6 col-lg-5 item">
                            <ul class="row center justify-content">
                                <li>
                                    <img src="/img/ship.png" className="icon_ship_schedules" width="55px" />
                                </li>
                                <li>
                                    <h3 className="ship_schedules_text">Ship Schedules</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageShipSchedules;