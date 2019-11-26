import React, { Component } from 'react';

export default class Todo extends Component {
    render() {
        return (
            <div className="todoListMain">
             <div className="header">
              <form onSubmit={this.props.addItem}>
                <input placeholder="Tache" />
                <button className="btn" type="submit">Ajouter</button>
              </form>
            </div>
          </div>
        )
    }
}
