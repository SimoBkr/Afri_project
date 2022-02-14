import React, { useState } from 'react';
import './ExplorerSection.css'

function Type_Cheaper() {

    const [selecteD, setselecteD] = useState(0);

    const onChangeButton = (v) => {
        setselecteD(v);
    }

    return (
        <>
            <div className="bar">
                <button
                    className={(selecteD === 0 ? "btn btn1 btn-primary" : "btn btn1 btn-outline-primary btncolor")}
                    style={{ marginRight: "10px" }}
                    onClick={() => {
                        onChangeButton(0);
                    }}
                >
                    CHEAPER
                </button>
                <button
                    className={(selecteD === 1 ? "btn btn2 btn-primary" : "btn btn2 btn-outline-primary btncolor")}
                    style={{ marginRight: "10px" }}
                    onClick={() => {
                        onChangeButton(1);
                    }}
                >
                    FASTER
                </button>
                <button
                    className={(selecteD === 2 ? "btn btn3 btn-primary" : "btn btn3 btn-outline-primary btncolor")}
                    onClick={() => {
                        onChangeButton(2);
                    }}
                >
                    OPTIMAL
                </button>
            </div>            
        </>
    )
}


export default Type_Cheaper;