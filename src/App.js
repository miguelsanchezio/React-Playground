import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Miguel', age: 24 },
      { name: 'Ana', age: 23 },
      { name: 'Yesi', age: 28 },      
    ],
    otherState: 'Other state.',
    showPeople: false
  }

  nameChangedHandler = e => {
    this.setState({
      persons: [
        { id: 1, name: 'Miguel', age: 24 },
        { id: 2, name: e.target.value, age: 23 },
        { id: 3, name: 'Old Lady', age: 28 }
      ]
    });
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePeopleHander = () => {
    const doesShow = this.state.showPeople;
    this.setState({ showPeople: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid orange',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPeople) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} />
          })}
        </div>
      );
    };

    return (
      <div className="App">
        <h1>Hi.</h1>
        <p>I'm a React Application.</p>
        <button style={style} onClick={this.togglePeopleHander}>Toggle People</button>
        {persons}
      </div>
    );
  }
}

export default App;
