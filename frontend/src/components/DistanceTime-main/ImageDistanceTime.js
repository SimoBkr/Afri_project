import React from 'react';
import './DistanceTimeMain.css';

function ImageDistanceTime() {

    return (
        <>
            <div className="Ship">
                <h1>Shipping {`>`} Distance And Time</h1>
            </div>
            <div className="feat-boxed" >
                <div className="card text-white ImageLogistics">
                    <img src="/img/container-tracking.jpg" class="card-img distance_time_image" alt="..." />
                    <div class="card-img-overlay">
                        <div className="col-5 col-md-6 col-lg-5 item">
                            <ul class="row center justify-content">
                                <li>
                                    <img src="/img/Distance.png" className="imgposition" width="55px" />
                                </li>
                                <li>
                                    <h3 className="name">{"Distance & Time"}</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageDistanceTime;