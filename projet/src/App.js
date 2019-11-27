import React, { Component } from 'react';
import './App.css';
import './API';
import 'bootstrap/dist/css/bootstrap.min.css'
import PieWidget from './components/PieWidget'
import BarWidget from './components/BarWidget'
import ProfilSideBar from './components/ProfilSideBar'
import Header from './components/Header'
import Objects from './components/Objects'
import Users from './components/Users'
import { Progress } from 'reactstrap'
import Todo from './components/Todo'
import TableWidget from './components/TableWidget'

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
        <Header />
        <div className="container-fluid">
          <div className="row">
            <ProfilSideBar />
            <main role="main" class="col-md-9 col-lg-10 px-4 ml-sm-auto">
              <div className="row">
                <div className="col-3">
                  <Users />
                </div>
                <div className="col-3">
                  <Objects />
                </div>
                <div className="col-6">
                  <div className="card">
                    <h5 className="card-title text-center">Progression</h5>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-3">
                          <p className="align-middle">Casque</p>
                        </div>
                        <div className="col-9">
                          <Progress value="25" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-3">
                          <p>Smartphone</p>
                        </div>
                        <div className="col-9">
                          <Progress color="success" value={50} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <PieWidget />
                </div>
                <div className="col-8">
                  <BarWidget />
                </div>
              </div>
              <div className="row">
                <div className="col-3">
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
                <div className="col-9">
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
