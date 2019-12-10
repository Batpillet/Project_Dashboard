import React, { Component } from 'react'
import axios from 'axios'

export default class TableWidget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sensors: [
                // { id: 0, date: "09/12/19", userId: 2, location: "salon" },
                // { id: 1, date: "09/07/19", userId: 2, location: "chambre" }
                {
                    
                }
            ]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3030/sensor')
        .then(response => {
            this.setState({sensors : response.data});
            console.log(this.state.sensors);
        });
    }

    renderTableData() {
        return this.state.sensors.map((sensor, index) => {
            const { _id, creationDate, location, userID } = sensor
            return (
                <tr key={_id}>
                    <td>{_id}</td>
                    <td>{creationDate}</td>
                    <td>{location}</td>
                    <td>{userID}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.sensors[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
        return (
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="Pascal table-responsive table-wrapper-scroll-y my-custom-scrollbar">
                        <table className="table table-bordered table-striped table-sm mb-0">
                            <thead>
                                <tr>
                                    {this.renderTableHeader()}
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
