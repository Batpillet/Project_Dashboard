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
import Todo from './components/Todo'
import TableWidget from './components/TableWidget'
import ProgressBars from './components/Progress'

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
                  <Users />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                  <Objects />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <ProgressBars />
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
                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                  <div className="card shadow">
                    <div className="card-body">
                      <h5 className="card-title text-center">Todo List</h5>
                      <Todo
                        addItem={this.addItem}
                        inputElement={this.inputElement}
                        handleInput={this.handleInput}
                        currentItem={this.state.currentItem}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-6 col-sm-12 col-12">
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
