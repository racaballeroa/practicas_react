import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './example.js';
import Imagen from './imagin.js';
/*para hacer referencia de unaetiqueta creada es importante llamar la etiqueta
y su componente y de que archivo lo estamos hacinedo*/

// la clase App se extiende a Componente y componente es:
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Example estaAbierto={false} />
        <Imagen/>
          {/*en el ejempolo que pusiste en clase fue de la siguiente manera:
          <p>{ 'La multiplicación de:'} ${ this.props.primero } {'y'}
          ${ this.props.segundo } {'es:'}</p>
          pusiste un $ en cada props y eso lo pinto y en tu ejemplo no,
          eso por qué es?*/}
          <p>{`El multiplicación de ${this.props.primero} y ${this.props.segundo} es:`}</p>
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
