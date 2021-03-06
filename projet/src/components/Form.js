import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {location: '', personsInHouse: '', houseSize: ''};
    
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({location: event.target.location});
        this.setState({personsInHouse: event.target.personsInHouse});
        this.setState({houseSize: event.target.houseSize});
    }
    
    render() {
        return (
            <form className="form-horizontal" action="http://localhost:3030/user" method="post">
                <div className="form-group">
                    <label for="location">Localisation : </label>
                    <input type="text" className="form-control" id='location' name='location' required location={this.state.location} onChange={this.handlechange}></input>
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
