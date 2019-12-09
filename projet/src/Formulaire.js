import React, { Component } from 'react'
import Header from './components/Header'; 
import ProfilSideBar from './components/ProfilSideBar';
import Form from './components/Form'; 

export default class Formulaire extends Component {
    constructor(props){
        super(props); 
    }

    render() {
        return (
            <div>
                <Header nom="Home" lien="/"/>
                <div className="row">
                    <div className='col-lg-4'></div>
                    <div className='col-lg-4 mt-4'>
                        <Form/>
                    </div>
                    <div className='col-lg-4'></div>
                </div>
            </div>
        )
    }
}
