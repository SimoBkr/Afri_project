
import React, { useState } from 'react'
import FilterCountry from './FilterContainer/FilterCountry';
import Filter from './FilterSeaLandAir/Filter';
import '../Main.css';

function HeroSection() {

    const [selecteD, setselecteD] = useState(0);

    const onChangeButton = (v) => {
        setselecteD(v);
    }
    
    return (

        <div className="hero-container">
            <img src="/img/Worldc.png" className="image img-fluid" />
            <p>SHIPPING TO AND FROM ANYWHERE IN THE WORLD</p>
            <h1>FIND THE BEST FREIGHT QUOTE</h1>
            <div className="hero-btns">
                <button
                    className={(selecteD  === 0 ? "btn btn-primary" : "btn btn-outline-primary" )}
                    style={{marginRight: "10px"}}
                    onClick={() => {
                        onChangeButton(0);
                    }}
                >
                    Freight Quotes
                </button>
                <button
                    className={(selecteD  === 1 ? "btn btn-primary" : "btn btn-outline-primary" )}
                    onClick={() => {
                        onChangeButton(1);
                    }}
                >
                    Tracking System
                </button>
            </div>
            <div>
                {selecteD === 0 ? <Filter /> : <FilterCountry />}
            </div>
        </div>
    )
}

export default HeroSection;