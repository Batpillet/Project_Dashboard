import React, { Component } from 'react'

export default class Users extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        fetch('http://localhost:3030/users/5ddb94c6fc13ae640c000014')
          .then(response => response.json())
          .then(data => this.setState({ data }));
          console.log(`this is location ${this.data}, this is number of people in here ${this.data}`)

      }

    render() {
        return (
            <div className="card shadow firstRow">
                <h5 className="card-title text-center">Utilisateurs</h5>
                <div className="card-body" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Nombre : </li>
                        <li class="list-group-item">Pays preferé : </li>
                    </ul>
                </div>
            </div>
        )
    }
}
