import React, { Component } from 'react';
import './App.css';
import './API';
import Todo from './components/Todo.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import PieWidget from './components/PieWidget'
import BarWidget from './components/BarWidget'
import ProfilSideBar from './components/ProfilSideBar'
import Header from './components/Header'

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
        <Header/>
        <div className="container-fluid">
          <div className="row">
            <ProfilSideBar />
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
                  <PieWidget />
                </div>
                <div className="col-8">
                  <BarWidget />
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
