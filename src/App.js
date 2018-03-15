import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Miguel', age: 24 },
      { id: 2, name: 'Ana', age: 23 },
      { id: 3, name: 'Yesi', age: 28 },      
    ],
    otherState: 'Other state.',
    showPeople: false
  }

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
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
              changed={e => this.nameChangedHandler(e, person.id)}
              key={person.id} />
          })}
        </div>
      );

      style.backgroundColor = 'orangered';
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
