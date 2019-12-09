import React, { Component } from 'react'

export default class Objects extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="card shadow">
                <h5 className="card-title text-center">Objets connectés</h5>
                <div className="card-body" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Nombre : {this.props.nombre}</li>
                        <li class="list-group-item">Type preferé : {this.props.type}</li>
                    </ul>
                </div>
            </div>
        )
    }
}
