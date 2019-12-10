import React, { Component } from 'react'
import axios from 'axios'
import { Pie, PieChart, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

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
  constructor(props) {
    super(props)
    this.state = {
        listSensor : [],
        dataPie : []
    }



}

componentDidMount(){
    axios.get('http://localhost:3030/measures/Humi')
    .then(response => {
        this.setState({dataPie : {0 : response.data}});
        console.log(this.state.dataPie);
    });
    axios.get('http://localhost:3030/measures/Temp')
    .then(response => {
        this.setState({dataPie : {1 : response.data}});
        console.log(this.state.dataPie);
    });
    axios.get('http://localhost:3030/measures/AirP')
    .then(response => {
        this.setState({dataPie : {2 : response.data}});
        console.log(this.state.dataPie);
    });
}

    render() {
        return (
            <div className="card shadow">
                <h5 className="card-title text-center">Nombre d'objets</h5>
                <div className="card-body" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                <ResponsiveContainer width="99%" aspect={1.33}>
                    <PieChart width={730} height={250}>
                        <Pie data={this.state.dataPie} dataKey="value" nameKey="name" outerRadius={80} fill="#82ca7d" label/>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
                </div>
            </div>
        ) 
    }
}
