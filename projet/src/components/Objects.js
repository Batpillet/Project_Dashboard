import React, { Component } from 'react'
import axios from 'axios'

export default class Objects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listSensor : [],
            number : [],
            humidity : [],
            temperature : [],
            airPollution : [],
            MaxType : "",
            NumType : ""
        }



    }

    componentDidMount(){
        axios.get('http://localhost:3030/measures/Humi')
        .then(response => {
            this.setState({humidity : response.data});
            console.log(this.state.humidity);
        });
        axios.get('http://localhost:3030/measures/Temp')
        .then(response => {
            this.setState({temperature : response.data});
            console.log(this.state.temperature);
        });
        axios.get('http://localhost:3030/measures/AirP')
        .then(response => {
            this.setState({airPollution : response.data});
            console.log(this.state.airPollution);
        });

        axios.get('http://localhost:3030/sensors')
        .then(response => {
            this.setState({number : response.data});
            console.log(this.state.number);
        });

        if(this.state.humidity.numHumi < this.state.temperature.numTemp)
        {
            if(this.state.temperature.numTemp < this.state.airPollution.numAirP)
            {
                this.setState({MaxType : this.state.airPollution.numAirP});
                this.setState({NumType : "AirPollution"});
            }
            else
            {
                this.setState({MaxType : this.state.temperature.numTemp});
                this.setState({NumType : "Temperature"});
            }
        }
        else if(this.state.humidity.numHumi < this.state.airPollution.numAirP)
        {
            this.setState({MaxType : this.state.airPollution.numAirP});
            this.setState({NumType : "AirPollution"});
        }
        else
        {
            this.setState({MaxType : this.state.humidity.numHumi});
            this.setState({NumType : "Humidity"});
        }
    }


    render() {
        return (
            <div className="card shadow">
                <h5 className="card-title text-center">Objets connectés</h5>
                <div className="card-body" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Nombre : {this.state.number.numSensors}</li>
                        <li class="list-group-item">Type preferé : {this.state.NumType}({this.state.MaxType})</li>
                    </ul>
                </div>
            </div>
        )
    }
}
