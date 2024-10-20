import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';

const LineChart = () => {
    const [values, setValues] = useState([])
    const { totalCount, stateCount, loading } = useSelector((state) => state.covidState);

    
    useEffect(() => {
        if (!loading && stateCount) {
           
            setValues([stateCount?.data.deaths, stateCount?.data.recovered, stateCount?.data.activeCases, stateCount?.data.totalCases]);
        } else {
            setValues([totalCount?.deaths, totalCount?.recovered, totalCount?.activeCases, totalCount?.totalCases]);
        }
    }, [loading, totalCount, stateCount]);

    var trace2 = {
        x: ['deaths','recovered','activeCases','totalCases'],
        y: values,
        mode: 'lines+markers',
        name: 'Scatter + Lines'
      };
      var data = [  trace2 ];
      var layout = {
        title:stateCount?.name?stateCount?.name:"India"
      };
    return (
        <Plot
            data={data}
            layout={layout}
        />
    )
}

export default LineChart
