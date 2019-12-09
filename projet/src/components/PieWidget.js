import React, { Component } from 'react'
import { Pie, PieChart, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
  ];

export default class PieWidget extends Component {
    render() {
        return (
            <div className="card shadow">
                <h5 className="card-title text-center">Nombre d'objets</h5>
                <div className="card-body" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                    <PieChart width={730} height={250}>
                        <Pie data={data02} dataKey="value" nameKey="name" outerRadius={80} fill="#82ca7d" label/>
                    </PieChart>
                </div>
            </div>
        )
    }
}
