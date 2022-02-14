import React from 'react';

function ImageContainerTracking() {

    return (
        <>
            <div className="Ship">
                <h1>Shipping {`>`} Container Tracking</h1>
            </div>
            <div className="feat-boxed" >
                <div className="card text-white ImageLogistics">
                    <img src="/img/container-tracking.jpg" class="card-img container_tracking_image" alt="..." />
                    <div class="card-img-overlay">
                        <div className="col-5 col-md-6 col-lg-5 item">
                            <ul class="row center justify-content">
                                <li>
                                    <img src="/img/container.png" className="imgposition" width="55px" />
                                </li>
                                <li>
                                    <h3 className="name">Container Tracking</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageContainerTracking;