import React, { useEffect, useState } from 'react';
import '../DistanceTimeMain.css';
import ReactApexChart from 'react-apexcharts';

function TransitTimeDetail(props) {

    const { dataDetail, setshowChart } = props;

    const [chartDetail, setchartDetail] = useState({
        series: [{
            data: dataDetail.map(values => {return values[1]})
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
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
                categories: dataDetail.map(name => { return name[0] }) 
            }
        },
    })

    return (

        <>
            <button type="button" className="btn btn-warning" onClick={() => setshowChart(true)}> Back</button>
            <div id="chart">
                    <ReactApexChart options={chartDetail.options} series={chartDetail.series} type="bar" height={700} />
            </div>
        </>
    )
}

export default TransitTimeDetail;