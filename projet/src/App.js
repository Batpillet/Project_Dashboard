import React, { Component } from 'react';
import './App.css';
import './API';
import Todo from './components/Todo.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Pie, PieChart, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { Container, Row, Col, Nav } from 'reactstrap';
import logo from './photos/profil.png'

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

const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]


class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: { text: '', key: '' },
    }

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
      <body>
        <nav className="navbar navbar-dark bg-dark shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Mon Dashboard</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link px-3" href="App.js">Accueil</a>
            </li>
          </ul>
        </nav>
        <div className="container-fluid">
          <div className="row">
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
            <main role="main" class="col-md-9 col-lg-10 px-4 ml-sm-auto">
              <div className="row">
                <div className="col-12">
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
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="card">
                  <h3 className="text-center">Objets connectés</h3>
                    <div className="card-body" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                      <PieChart width={730} height={250}>
                        <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                        <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                      </PieChart>
                    </div>
                  </div>
                </div>
                <div className="col-8">
                  <div className="card">
                    <h3 className="text-center">Nombre d'utilisateurs par pays</h3>
                    <div className="card-body" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                      <BarChart width={730} height={250} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                      </BarChart>
                    </div>
                  </div>
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
