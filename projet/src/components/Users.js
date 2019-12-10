import React, { Component } from 'react'
import axios from 'axios'

export default class Users extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listUser : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3030/user/5ddb94c6fc13ae640c000014')
        .then(response => {
            this.setState({listUser : response.data});
            console.log(this.state.listUser);
        });
    }

    render() {
        return (
            <div className="card shadow firstRow">
                <h5 className="card-title text-center">Utilisateurs</h5>
                <div className="card-body" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Nombre : <p> {this.state.listUser.personsInHouse} </p></li>
                        <li class="list-group-item">Pays preferé : <p> {this.state.listUser.location} </p></li>
                    </ul>
                </div>
            </div>
        )
    }
}
