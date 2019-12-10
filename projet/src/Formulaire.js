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
                <div className="row justify-content-center mt-4 ml-2 mr-2">
                    <div className='col-lg-4'>
                        <Form/>
                    </div>
                </div>
            </div>
        )
    }
}
