import React from 'react';
import logo from './logo.svg';
import { Collapse, } from 'reactstrap';

class Imagen extends React.Component{
  constructor (props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
    
  render() {
    return (
      <div className="Imagen">
      <img src={logo} className="App-logo" alt="logo" onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} img="true">
      </Collapse>
      </div>
    );
  }
}

export default Imagen;
