import React, { Component } from 'react'

export default class Users extends Component {
    render() {
        return (
            <div className="card">
                <h5 className="card-title text-center">Utilisateurs</h5>
                <div className="card-body" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Nombre : 50</li>
                        <li class="list-group-item">Pays preferé : Italie</li>
                    </ul>
                </div>
            </div>
        )
    }
}
