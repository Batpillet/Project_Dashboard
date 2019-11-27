import React, { Component } from 'react'
import logo from './photos/profil.png'


export default class ProfilSideBar extends Component {

    render() {
        return (
            <nav className="col-md-2 d-none d-md-block sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a id="dash" class="nav-link" href="#">
                                <h4 className="text-center">Mon profil</h4>
                                <img className="center" src={logo} alt="Logo" />
                                <h6 className="text-center">PILLET</h6>
                                <h6 className="text-center">Baptiste</h6>
                                <h6 className="text-center">131 rue saint charles</h6>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
