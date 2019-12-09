import React, { Component } from 'react'
import { Pie, PieChart, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

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
    render() {
        return (
            <div className="card shadow">
                <h5 className="card-title text-center">Nombre d'utilisateurs par pays</h5>
                <div className="card-body" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                    <BarChart width={730} height={250} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="uv" fill="#8884d8" />
                    </BarChart>
                </div>
            </div>
        )
    }
}
