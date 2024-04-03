import ReactDOM from 'react-dom/client';

import React, { Component } from 'react'

class A extends Component {

  constructor(){
    super();
    //state is a javascript obj which can hold some data
    this.state={name:'ravindra',surname:'jadeja',address:'kerala'} //state initialization
  }
  render() {
    //updating the existing state
    this.setState(
      {
        ...this.state, //this ... is spread operator introduced in ES6
        name:'msd'
      }
    );
    return (<>
      <h1>OK BYE {this.props.name} {this.props.surname} {this.props.children}</h1>
      <h1>OK BYE {this.state.name} {this.state.surname} {this.state.address}</h1>      
      </>)
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<A name='anil' surname='dollar'>Athgarh</A>);
