import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

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
    let persons = null;

    if(this.state.showPeople) {
      persons = 
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
    };

    

    return (
      <div className={classes.App}>
        <Cockpit showPeople={this.state.showPeople} persons={this.state.persons} clicked={this.togglePeopleHander}/>
        {persons}
      </div>
    );
  }
}

export default App;
