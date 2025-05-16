import React, { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis } from 'recharts';

// const datas = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },];

const ResultsChart = () => {

    const [resultData, setResultData] = useState([]);

    useEffect(() => {
        fetch('marksData.json').then(res => res.json()).then(data => setResultData(data));
    }, [])

    // console.log(resultData);

    return (
        <div className='border'>
            <LineChart width={800} height={400} data={resultData}>
                <XAxis dataKey='name' />
                <YAxis dataKey='' />
                <Line dataKey="marks.math" />
                <Line type="monogram" dataKey="marks.chemistry" stroke='blueviolet' className='duration-1090'/>
            </LineChart>
        </div>
    )
}

export default ResultsChart