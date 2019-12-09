import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";


export default class Header extends Component {
    constructor(props){
        super(props); 
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Mon Dashboard</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to={this.props.lien}><a className="nav-link px-3" href="App.js">{this.props.nom}</a></Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
