import React, { Component } from 'react';

import classes from './App.css';

import Person from './Person/Person';



class App extends Component {
    state = {
      persons:[
        {id:'dafd2',name:'Moh',age:28},
        {id:'tfdbv5',name:'sara',age:26},
        {id:'ropkf8',name:'Lara',age:23}
      ],
      otherState:'some other value',
      showPersons: false
    }

    

     nameChange = (event,id) => {
        const personIndex = this.state.persons.findIndex(p => {
          return p.id === id;
        });

        const person = { 
          ...this.state.persons[personIndex]
        };

       // const person = Object.assign({},this.state.persons[personIndex]);

       person.name = event.target.value;

       const persons = [...this.state.persons];
       persons[personIndex] = person;

        this.setState({persons:persons});
     }


     deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons;
      const persons = [...this.state.persons]
       persons.splice(personIndex,1);
       this.setState({persons : persons});
     }

     togglePersonsHandler = () => {

        const doesShow = this.state.showPersons ;
        this.setState({showPersons: !doesShow});
     }


  render() {
    
    let persons = null;
    let btnClass = '';

    if(this.state.showPersons) {
        persons = (
          <div>
                {this.state.persons.map((person , index) => {
                  return <Person 
                            click={() => this.deletePersonHandler(index)}
                            name={person.name} 
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChange(event ,person.id)} />
                })}
                {/* <Person 
                  name={this.state.persons[0].name} 
                  age={this.state.persons[0].age}
                  click = {this.switchHand.bind(this,'HAmada!!!')} 
                  changed = {this.nameChange}>My Hobbies: Racing</Person>

                <Person 
                  name={this.state.persons[1].name} 
                  age={this.state.persons[1].age}></Person>

                <Person
                  name={this.state.persons[2].name} 
                  age={this.state.persons[2].age}></Person> */}

           </div> 

        );
       
        btnClass = classes.Red;
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classess = ['red']
    }

    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold); //classess = ['red','bold']
    }


    return (
      
          <div className={classes.App}>
            <h1> It is Moh , Hey </h1>
            <p className={assignedClasses.join(' ')}>Hello Another paraghraph</p>

            
            {/* <button 
              style = {style}
              onClick={() => this.switchHand('HAmada')}>Switch Name</button> */}

              <button 
              className={btnClass}
              onClick={this.togglePersonsHandler}>Toggle Persons</button>

              {persons}

          </div>
          
    );

   // return  React.createElement('div',{className:'App'},React.createElement('h1',null,'It is Moh I\'am , Hey'));
  }
} 

export default App;
