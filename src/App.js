import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Miguel', age: 24 },
      { name: 'Ana', age: 23 },
      { name: 'Yesi', age: 28 },      
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>   
      </div>
    );
  }
}

export default App;
