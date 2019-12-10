import React, { Component } from 'react';
import './App.css';
import './API/API_Weather.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import PieWidget from './components/PieWidget'
import BarWidget from './components/BarWidget'
import ProfilSideBar from './components/ProfilSideBar'
import Header from './components/Header'
import Objects from './components/Objects'
import Users from './components/Users'
import TableWidget from './components/TableWidget'
import ProgressBars from './components/Progress'
import Formulaire from './Formulaire'; 
import { BrowserRouter, Route, Link } from "react-router-dom";
import NotFound from './NotFound'; 
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      currentItem: { text: '', key: '' },
      user: [
        {
          id: 0, 
          country: 'France', 
          number: 3
        },
        {
          id: 1, 
          country: 'Espagne', 
          number: 5
        }
      ], 
      sensor: [
        {
          id: 0, 
          creationDate: "04/12/19", 
          location: "Salon"
        }, 
        {
          id: 1, 
          creationDate: "07/08/18", 
          location: "Salle de bain"
        }
      ], 
      measure: [
        {
          id: 0, 
          type: "humidite", 
          creationDate: "15/04/19", 
          value: "10%"
        }, 
        {
          id: 1, 
          type: "temperature", 
          creationDate: "15/09/17", 
          value: "10°C"
        }
      ]
    };
  }
  handleInput = e => {
    console.log('Hello Input')
  }
  addItem = e => {
    e.preventDefault() //Eviter le rafraichissement de la page lors de l'envoi du form
    console.log('hello world')
  }

  render() {
    return (
      <body onload ='start()'>
        <Header nom="Formulaire" lien="/Formulaire"/>
        <div className="container-fluid">
          <div className="row">
            <ProfilSideBar infos={this.state.user[0]}/>
            <main role="main" class="col-xl-10 px-4 ml-sm-auto">
              <div className="row">
                <div className="col-12">
                  <div className="border-bottom pt-3 pb-2">
                    <h4 id="da">Dashboard</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                  <Users nombre='5' pays='France'/>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                  <Objects nombre='28' type='Humidité'/>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <ProgressBars value='95' type1='Humidité' type2='Temperature'/>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <PieWidget />
                </div>
                <div className="col-lg-8 col-md-6">
                  <BarWidget />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <TableWidget />
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    );
  }
}

export default App;
