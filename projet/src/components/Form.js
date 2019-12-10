import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <form className="form-horizontal" action="http://localhost:3030/sensor/add" method="post">
                <div className="form-group">
                    <label for="Localisation">Localisation : </label>
                    <input type="text" className="form-control" id='location' name='location' required></input>
                </div>
                <div className='form-group'>
                    <label for='Number'>Nombre de personnes dans la maison : </label>
                    <input type="number" className="form-control" id="Number" required name="personsInHouse" id="personsInHouse" max="10" min="0"></input>
                </div>
                <div>
                    Taille de la maison<br/>
                    <select className='form-control' id="houseSize" name="houseSize" required>
                        <option value="" selected>selectionner...</option>
                        <option value="Small">Petit</option>
                        <option value="Medium">Moyen</option>
                        <option value="Big">Grand</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary mt-4">Valider</button>
            </form>
        )
    }
}
