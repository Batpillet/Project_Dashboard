import React, { Component } from 'react';
import './App.css';
import './API'; 
import Todo from './components/Todo.js'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Pie, PieChart } from 'recharts';
const data01 = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 300
  },
  {
    "name": "Group D",
    "value": 200
  },
  {
    "name": "Group E",
    "value": 278
  },
  {
    "name": "Group F",
    "value": 189
  }
];
const data02 = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
  {
    "name": "Group C",
    "value": 1398
  },
  {
    "name": "Group D",
    "value": 9800
  },
  {
    "name": "Group E",
    "value": 3908
  },
  {
    "name": "Group F",
    "value": 4800
  }
];


class App extends Component{
  constructor() {
    super()
    this.state={
      items:[], 
      currentItem: {text:'', key:''},
    }
    
  }
  handleInput = e =>{
    console.log('Hello Input')
  }
  addItem = e =>{
    e.preventDefault() //Eviter le rafraichissement de la page lors de l'envoi du form
    console.log('hello world')
  }
    

  render(){
  return (
    <div className="container-fluid">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark row" id="topbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="navbar-brand" href="#">Mon Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="App.js">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="API.js">Ajouter vos objets</a>
            </li>
          </ul>
        </nav>
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="card">
              <div className="card-body">
                <Todo 
                  addItem={this.addItem}
                  inputElement={this.inputElement}
                  handleInput={this.handleInput}
                  currentItem={this.state.currentItem}
                />
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="card">
              <div className="card-body" style={{display: 'inline-flex', justifyContent: 'center'}}>
                  <PieChart width={730} height={250}>
                  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
  }
}

export default App;
