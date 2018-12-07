import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          // en el ejempolo que pusiste en clase fue de la siguiente manera:
          // <p>{ 'La multiplicación de:'} ${ this.props.primero } {'y'}  ${ this.props.segundo } {'es:'}</p>
          // pusiste un $ en cada props y eso lo pinto y en tu ejemplo no, eso por qué es?
          <p>{ 'La multiplicación de:'} { this.props.primero } {'y'}  { this.props.segundo } {'es:'}</p>
          <p>{ this.props.primero * this.props.segundo }</p>
          <p>{ this.props.mensaje }</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
