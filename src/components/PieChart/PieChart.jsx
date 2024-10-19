import React, { useEffect, useState } from 'react'
import './PieChart.css'
import Plot from 'react-plotly.js'
import { useSelector } from 'react-redux';

const PieChart = () => {
    const [values, setValues] = useState([])
    const { totalCount, stateCount, loading } = useSelector((state) => state.covidState);

    console.log(totalCount);
    
    useEffect(() => {
        if (!loading && stateCount) {
           
            setValues([stateCount?.data.deaths, stateCount?.data.recovered, stateCount?.data.activeCases, stateCount?.data.totalCases]);
        } else {
            setValues([totalCount?.deaths, totalCount?.recovered, totalCount?.activeCases, totalCount?.totalCases]);
        }
    }, [loading, totalCount, stateCount]);

    var data = [
        {
            values,
            labels: ["Deaths", "Recovered", "ActiveCases", "TotalCases"],
            type: "pie",
        },
    ];
    return (
        <Plot
            data={data}
            layout={{ title: 'Favourite Colours In A Class' }}
        />
    )
}

export default PieChart
