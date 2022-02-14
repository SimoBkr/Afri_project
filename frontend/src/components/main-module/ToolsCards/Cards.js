import React from 'react'
import '../Main.css'

function Cards() {
    return (
        <div className="Cards">
            <section className="features-boxed">
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">ALWAYS IMPROVING</h2>
                        <p className="text-center">TOOLS</p>
                        <hr className="text-center" />
                    </div>
                        <div className="row justify-content-center features">
                            <div className="col-12 col-md-6 col-lg-3 item">
                                <div className="box" id="logistics">
                                    <img src="/img/Logistics.png" className="mb-3" />
                                    <h3 className="name">Logistics Explorer</h3>
                                    <p className="description">The most powerful freight
                                    calculation tool created in the industry. now you can quote your rates to thousands of
                                    customers at any time and get online bookings for fcl, lcl, air, road, rail transport,
                                    and more.
                                    </p>
                                    <a className="learn-more" href="/logistics-explorer"><p>Read more</p></a>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-3 item">
                            <div className="box" id="always">
                                <img src="/img/container.png" className="mb-2" />
                                <h3 className="name">Always available</h3>
                                <p className="description">The most powerful freight
                                calculation tool created in the industry. now you can quote your rates to thousands of
                        customers at any time and get online bookings for fcl, lcl, air, road, rail transport, and more.</p>
                                <a class="learn-more" href="#"><p>Read more</p></a>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 item">
                            <div className="box" id="distance">
                                <img src="/img/Distance.png" className="mb-2" />
                                <h3 className="name">Distance & Time</h3>
                                <p className="description">The most powerful freight
                                calculation tool created in the industry. now you can quote your rates to thousands of
                        customers at any time and get online bookings for fcl, lcl, air, road, rail transport, and more.</p>
                                <a className="learn-more" href="#"><p>Read more</p></a>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 item">
                            <div className="box" id="ship">
                                <img src="/img/ship.png" className="mb-2" />
                                <h3 className="name">Ship Schedules</h3>
                                <p className="description">The most powerful freight
                                calculation tool created in the industry. now you can quote your rates to thousands of
                                customers at any time and get online bookings for fcl, lcl, air, road, rail transport, 
                                and more.
                                </p>
                                <a className="learn-more" href="#"><p>Read more</p></a>
                            </div>
                        </div>
                        </div>
                </div>
            </section>
        </div>
    )
}

export default Cards;