import React, { Component } from 'react'
import logo from './photos/profil.png'


export default class ProfilSideBar extends Component {

    render() {
        return (
            <nav className="col-lg-2 d-none d-xl-block sidebar shadow">
                <div className="sidebar-sticky">
                    <div className="card shadow mt-2" style={{ background: "#BBCBE1" }}>
                        <h5 className="card-title text-center" style={{ background: "#BBCBE1", color: '#3E6597' }}>Profil</h5>
                        <div className="card-body" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item" style={{ background: "#BBCBE1", color: '#3E6597' }}><img className="center" src={logo} alt="Logo" /></li>
                                <li className="list-group-item" style={{ background: "#BBCBE1", color: '#3E6597' }}><h6 className="text-center">PILLET</h6></li>
                                <li className="list-group-item" style={{ background: "#BBCBE1", color: '#3E6597' }}><h6 className="text-center">Baptiste</h6></li>
                                <li className="list-group-item" style={{ background: "#BBCBE1", color: '#3E6597' }}><h6 className="text-center">131 rue saint charles</h6></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
