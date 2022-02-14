import React, { useState, useEffect } from 'react';
import '../DistanceTimeMain.css';
import ReactApexChart from 'react-apexcharts';
import { Card } from 'antd';
import data from './distance_api.json';
import TransitTimeDetail from './TransitTimeDetail';

function TransitTime() {

    const [dataDetail, setdataDetail] = useState([
        ["HLXU1222581", 11],
        ["HLXU1137263", 1],
        ["HLXU3479054", 3],
        ["UACU5582283", 0],
        ["TLLU2565189", 4],
        ["HLXU3466648", 1]
    ]);

    const [showChart, setshowChart] = useState(true);
    const [chart, setchart] = useState({
        series: [{
            data: data.transit_time_chart.drilldown.sort((a, b) => a.y > b.y ? 1 : -1).map((days, index) => { return days.y })
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                events: {
                    dataPointSelection: (event, chartContext, config) => {
                        setshowChart(false);
                        var click = data.transit_time_chart.drilldown.filter(data => data.name === chart.options.xaxis.categories[config.dataPointIndex]).map(data => { return data.data });
                        console.log(click[0]);
                        setdataDetail(click[0]);
                    }
                }
            },
            colors: ['#fec537'],
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    horizontal: true,
                },
            },
            dataLabels: {
                enabled: true
            },
            xaxis: {
                categories: data.transit_time_chart.drilldown.map(days => { return days.name }),
            }
        },
    })

    return (
        <div className="Container">
            <h3 className="transit_time_label">Transit Time</h3>
            <hr className="transit_time_hr" />

            <div id="chart">
                {showChart ?
                    <ReactApexChart options={chart.options} series={chart.series} type="bar" style={{ height: "100%" }} />
                    :
                    <TransitTimeDetail dataDetail={dataDetail} setshowChart={setshowChart} />
                }
            </div>

            <h3 className="distance_time_label">Distance And Time</h3>
            <hr className="distance_time_hr" />

            <ul className="timeline_root_detail">
                <li className="timeline_root_item_detail">
                    <div className="timeline_root_icon_hr_detail">
                        <span className="icon_diliang_detail"></span>

                        <span className="hr_diliang_detail"></span>
                    </div>
                    <div className="timeline_root_div_detail">
                        <Card size="small" style={{ backgroundColor: "#F3F4ED" }} title={<p className="text_container_tracking">{data.road_from.name}</p>} className="Card_Container_Tracking">
                            <div className="line_height_p">
                                <p>{(data.road_from.distance / 1.609).toFixed(2) + " mi, (" + data.road_from.distance + " km)"} </p>
                                <p>Transit Time : {data.road_from.transit_time_days + " " + data.road_from.transit_time_seconds + " sec"}</p>
                                <p>Average Speed : {(parseFloat(data.road_from.speed) / 1.609).toFixed(2) + " mp/h, (" + parseFloat(data.road_from.speed) + " km/h)"} </p>
                            </div>
                        </Card>
                    </div>
                </li>
                <li className="timeline_root_item_detail">
                    <div className="timeline_root_icon_hr_detail">
                        <span className="icon_diliang_detail"></span>

                        <span className="hr_diliang_detail"></span>
                    </div>
                    <div className="timeline_root_div_detail">
                        <Card size="small" style={{ backgroundColor: "#F3F4ED" }} title={<p className="text_container_tracking">{data.sea.from_name}</p>} className="Card_Container_Tracking">
                            <div className="line_height_p">
                                <p>{(data.sea.dist / 1.609).toFixed(2) + " mi, (" + data.sea.dist + " km)"} </p>
                                <p>Transit Time : {data.sea.transit_time_days + " " + data.sea.transit_time_seconds + " sec"}</p>
                                <p>Average Speed : {(parseFloat(data.sea.speed) / 1.609).toFixed(2) + " mp/h, (" + parseFloat(data.sea.speed) + " km/h)"} </p>
                            </div>
                        </Card>
                    </div>
                </li>
                <li className="timeline_root_item_detail">
                    <div className="timeline_root_icon_hr_detail">
                        <span className="icon_diliang_detail"></span>
                    </div>
                    <div className="timeline_root_div_detail">
                        <Card size="small" style={{ backgroundColor: "#F3F4ED" }} title={<p className="text_container_tracking">{data.road_to.name}</p>} className="Card_Container_Tracking">
                            <div className="line_height_p">
                                <p>{(data.road_to.distance / 1.609).toFixed(2) + " mi, (" + data.road_to.distance + " km)"} </p>
                                <p>Transit Time : {data.road_to.transit_time_days + " " + data.road_to.transit_time_seconds + " sec"}</p>
                                <p>Average Speed : {(parseFloat(data.road_to.speed) / 1.609).toFixed(2) + " mp/h, (" + parseFloat(data.road_to.speed) + " km/h)"} </p>
                            </div>
                        </Card>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default TransitTime;

/* const click = data.transit_time_chart.drilldown.filter(data => data.name === chart.options.xaxis.categories[config.dataPointIndex]).map(data => { return data.data });
 */