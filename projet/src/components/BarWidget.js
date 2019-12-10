import React, { Component } from 'react'
import axios from 'axios'
import { Pie, PieChart, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

const data = [
    {
      "name": "France",
      "uv": 4000
    },
    {
      "name": "Espagne",
      "uv": 3000
    },
    {
      "name": "Royaume-Uni",
      "uv": 2000
    },
    {
      "name": "Italie",
      "uv": 2780
    },
    {
      "name": "Etats-Unis",
      "uv": 2780
    },
    {
      "name": "Japon",
      "uv": 2780
    }
  ]
  

export default class BarWidget extends Component {
  constructor(props) {
    super(props)
    this.state = {
        listSensor : [],
        dataPie : [
          
        ]
    }
  }

    componentDidMount(){
      axios.get('http://localhost:3030/user/country/china')
      .then(response => {
        this.setState({
          dataPie: [
            ...this.state.dataPie,
            { name: Object.keys(response.data)[0], value: Object.values(response.data)[0]}
          ]
        });
      });
      axios.get('http://localhost:3030/user/country/greece') 
      .then(response => {
        this.setState({
          dataPie: [
            ...this.state.dataPie,
            { name: Object.keys(response.data)[0], value: Object.values(response.data)[0]}
          ]
        });
      });
      axios.get('http://localhost:3030/user/country/poland')
      .then(response => {
        this.setState({
          dataPie: [
            ...this.state.dataPie,
            { name: Object.keys(response.data)[0], value: Object.values(response.data)[0]}
          ]
        });
      });

      axios.get('http://localhost:3030/user/country/russia')
      .then(response => {
        this.setState({
          dataPie: [
            ...this.state.dataPie,
            { name: Object.keys(response.data)[0], value: Object.values(response.data)[0]}
          ]
        });
      });

      axios.get('http://localhost:3030/user/country/italy')
      .then(response => {
        this.setState({
          dataPie: [
            ...this.state.dataPie,
            { name: Object.keys(response.data)[0], value: Object.values(response.data)[0]}
          ]
        });
      });

      axios.get('http://localhost:3030/user/country/morocco')
      .then(response => {
        this.setState({
          dataPie: [
            ...this.state.dataPie,
            { name: Object.keys(response.data)[0], value: Object.values(response.data)[0]}
          ]
        });
      });
      axios.get('http://localhost:3030/user/country/japan')
      .then(response => {
        this.setState({
          dataPie: [
            ...this.state.dataPie,
            { name: Object.keys(response.data)[0], value: Object.values(response.data)[0]}
          ]
        });
      });
  }


    render() {
        return (
            <div className="card shadow secondRow">
                <h5 className="card-title text-center">Nombre d'utilisateurs par pays</h5>
                <div className="card-body" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                <ResponsiveContainer width="99%" aspect={3}>
                    <BarChart width={730} height={250} data={this.state.dataPie}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
            </div>
        )
    }
}
