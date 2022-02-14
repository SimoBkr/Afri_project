import React from 'react';
import '../logisticsExplorerMain.css';

function ImageLogistics() {

    return (
        <>
            <div className="Ship">
                <h1>Shipping {`>`} Logistics Explorer</h1>
            </div>
            <div className="feat-boxed" >
                <div className="card text-white ImageLogistics">
                    <img src="/img/Logistics_Page.png" class="card-img imageBack" alt="..." />
                    <div class="card-img-overlay">
                        <div className="col-5 col-md-6 col-lg-5 item">
                            <ul class="row center justify-content">
                                <li>
                                    <img src="/img/Logistics.png" className="imgposition" width="55px" />
                                </li>
                                <li>
                                    <h3 className="name">Logistics Explorer</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageLogistics;