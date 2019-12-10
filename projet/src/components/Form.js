import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label for="Localisation">Localisation : </label>
                    <input type="Localisation" className="form-control" id='Localisation'></input>
                </div>
                <div className='form-group'>
                    <label for='Number'>Nombre de personnes dans la maison : </label>
                    <input type="Number" className="form-control" id="Number"></input>
                </div>
                <div className='form-group'>
                    <label for="Size">Taille de la maison : </label>
                    <input type="Size" className="form-control" id="Size"></input>
                </div>
                <div>
                    Taille de la maison<br />
                    <select>
                        <option value="" selected>selectionner...</option>
                        <option value="1">Petit</option>
                        <option value="2">Moyen</option>
                        <option value="3">Grand</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Valider</button>
            </form>
        )
    }
}
