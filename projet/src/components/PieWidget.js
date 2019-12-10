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
      var myData = [];
        for(var x in response.data){
        myData.push({name: 'Maisons avec '+ x + ' habitants', value: response.data[x]})
      }  
      this.setState({dataPie : {0 : response.data}});
        console.log(this.state.dataPie);
    });
    axios.get('http://localhost:3030/measures/Temp')
    .then(response => {
      var myData = [];
        for(var x in response.data){
        myData.push({name: 'Maisons avec '+ x + ' habitants', value: response.data[x]})
      }  
      this.setState({dataPie : {1 : response.data}});
        console.log(this.state.dataPie);
    });
    axios.get('http://localhost:3030/measures/AirP')
    .then(response => {
      var myData = [];
        for(var x in response.data){
        myData.push({name: 'Maisons avec '+ x + ' habitants', value: response.data[x]})
      }
      this.setState({dataPie : {2 : response.data}});
        console.log(this.state.dataPie);
    });

    axios.get('http://localhost:3000/users/personsInHouse')
        .then(response => {
            var myData = [];
            for(var x in response.data){
              myData.push({name: 'Maisons avec '+ x + ' habitants', value: response.data[x]})
            }
            this.setState({dataPie: myData});
        });
}

    render() {
        return (
            <div className="card shadow secondRow">
                <h5 className="card-title text-center">Nombre d'objets</h5>
                <div className="card-body" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                <ResponsiveContainer width="100%" aspect={1.33}>
                    <PieChart width={730} height={250}>
<<<<<<< HEAD
                        <Pie data={data02} dataKey="value" nameKey="name" fill="#82ca7d" label/>
=======
                        <Pie data={this.state.dataPie} dataKey="value" nameKey="name" outerRadius={80} fill="#82ca7d" label/>
>>>>>>> DataLink
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
                </div>
            </div>
        ) 
    }
}
