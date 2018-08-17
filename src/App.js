import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> It is Moh , Hey </h1>
        <p>Hello Another paraghraph</p>
        <Person />
        
      </div>
      

      
    );

   // return  React.createElement('div',{className:'App'},React.createElement('h1',null,'It is Moh I\'am , Hey'));
  }
} 

export default App;
