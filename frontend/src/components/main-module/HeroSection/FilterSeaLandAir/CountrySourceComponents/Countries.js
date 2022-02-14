import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Spin } from 'antd';

function Countries(props) {

    const { resultCountries, setformData, formData, loading, setdisplayComponentsSource, displayComponentsSource, searchPorts } = props;

    const hideCountryShowPorts = () => {
        setdisplayComponentsSource({
            ...displayComponentsSource,
            displayCountry: false,
            displayAirPorts: true
        })
    }

    return (
        <Scrollbars style={{ height: "314px", borderRadius: "10px" }}>
            <Spin spinning={loading} >
                {resultCountries.map((result, index) => {
                    return (
                        <div 
                            className="card card-body card-border-none" 
                            key={index} 
                            onClick={() => {
                                hideCountryShowPorts();
                                setformData({ ...formData, countrySource: result.city });
                                searchPorts(result);
                            }} 
                            >
                            <div className="listGroup">
                                <span className={result.country !== "USA" 
                                ? 
                                `flag-icon flag-icon-${result.counrty_code}`
                                :
                                'flag-icon flag-icon-us'}></span>
                                <div>
                                    <p className="font-weight-bold mb-0 ml-2">{" " + result.city}</p>
                                    <p className="font-weight-normal mt-0 ml-2 mb-0">{" " + result.city + " , " + result.country}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Spin>
        </Scrollbars >
    );
}
export default Countries;