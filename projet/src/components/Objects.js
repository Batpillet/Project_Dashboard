import React, { Component } from 'react'

export default class Objects extends Component {
    render() {
        return (
            <div className="card">
                <h5 className="card-title text-center">Objets connectés</h5>
                <div className="card-body" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Nombre : 50</li>
                        <li class="list-group-item">Type preferé : Montre</li>
                    </ul>
                </div>
            </div>
        )
    }
}
