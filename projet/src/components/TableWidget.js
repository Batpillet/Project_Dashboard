import React, { Component } from 'react'

export default class TableWidget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sensors: [
                { id: 0, date: "09/12/19", userId: 2, location: "salon" },
                { id: 1, date: "09/07/19", userId: 2, location: "chambre" }
            ]
        }
    }

    renderTableData() {
        return this.state.sensors.map((sensor, index) => {
            const { id, date, userId, location } = sensor
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{date}</td>
                    <td>{userId}</td>
                    <td>{location}</td>
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
            <div className="card shadow">
                <div className="card-body">
                    <div class="table-responsive">
                        <table class="table table-striped table-sm">
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
