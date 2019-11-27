import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Mon Dashboard</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link px-3" href="App.js">Accueil</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
