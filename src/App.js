import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
      persons:[
        {name:'Moh',age:28},
        {name:'sara',age:26},
        {name:'Lara',age:23}
      ],
      otherState:'some other value'
    }

    switchHand = (newName) => {
        // console.log('Was Clicked');
        //DO NOT DO THIS :  this.state.persons[0].name = 'Hamada';
        this.setState({persons:[
          {name:newName,age:27},
          {name:'sara Hellry',age:25},
          {name:'Lara more',age:21}

          ]
       })
     }

     nameChange = (event) => {
        this.setState({persons:[
          {name:'Moh',age:27},
          {name:event.target.value,age:25},
          {name:'Lara more',age:21}

          ]
      })
     }

  render() {
    const style = {
      backgroundColor : 'white',
      font:'inherit',
      border:'1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };


    return (
      <div className="App">
        <h1> It is Moh , Hey </h1>
        <p>Hello Another paraghraph</p>
        <button 
          style = {style}
          onClick={() => this.switchHand('HAmada')}>Switch Name</button>

        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click = {this.switchHand.bind(this,'HAmada!!!')} 
          changed = {this.nameChange}>My Hobbies: Racing</Person>

        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}></Person>

        <Person
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}></Person>
        
      </div>
      

      
    );

   // return  React.createElement('div',{className:'App'},React.createElement('h1',null,'It is Moh I\'am , Hey'));
  }
} 

export default App;
