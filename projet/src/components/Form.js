import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label for="Nom">Nom de l'objet : </label>
                    <input type="Nom" className="form-control" id='Nom'></input>
                </div>
                <div className='form-group'>
                    <label for='Date'>Date de création : </label>
                    <input type="Date" className="form-control" id="Date"></input>
                </div>
                <div className='form-group'>
                    <label for="location">Dans quelle pièce de la maison ? : </label>
                    <input type="Location" className="form-control" id="Location"></input>
                </div>
            </form>
        )
    }
}
