import React from 'react';

class Imagen extends React.Component{
  constructor (props) {
    super(props);
    this.toggle = this.toggl.brind(this);
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
      <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Imagen;
