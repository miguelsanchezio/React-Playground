import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <Person name="Miguel" age="24"/>
        <Person name="Ana" age="23">My Hobbies: Racing</Person>
        <Person name="Steph" age="25"/>        
      </div>
    );
  }
}

export default App;
