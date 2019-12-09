import React, { Component } from 'react'
import logo from './photos/profil.png'


export default class ProfilSideBar extends Component {
    constructor(props){
        super(props); 
    }

    render() {
        return (
            <nav className="col-lg-2 d-none d-xl-block sidebar shadow">
                <div className="sidebar-sticky">
                    <div className="card shadow mt-2" style={{ background: "#BBCBE1" }}>
                        <h5 className="card-title text-center" style={{ background: "#BBCBE1", color: '#3E6597' }}><b>Profil</b></h5>
                        <div className="card-body" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item" style={{ background: "#BBCBE1", color: '#3E6597' }}><img className="center" src={logo} alt="Logo" /></li>
                                <li className="list-group-item" style={{ background: "#BBCBE1", color: '#3E6597' }}><h6 className="text-center"><b>Identifiant</b></h6><h6 className='text-center'>{this.props.infos.id}</h6></li>
                                <li className="list-group-item" style={{ background: "#BBCBE1", color: '#3E6597' }}><h6 className="text-center"><b>Pays</b></h6><h6 className='text-center'>{this.props.infos.country}</h6></li>
                                <li className="list-group-item" style={{ background: "#BBCBE1", color: '#3E6597' }}><h6 className="text-center"><b>Nombre d'habitants</b></h6><h6 className='text-center'>{this.props.infos.number}</h6></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
