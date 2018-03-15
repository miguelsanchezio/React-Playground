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

  switchNameHandler = (newName) => {
    // console.log('Was clicked.');
    // DON'T DO THIS this.state.persons[0].name = 'Mike';
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: 'Banana', age: 23 },
        { name: 'Old Lady', age: 28 }
      ]
    });
  }

  nameChangedHandler = e => {
    this.setState({
      persons: [
        { name: 'Miguel', age: 24 },
        { name: e.target.value, age: 23 },
        { name: 'Old Lady', age: 28 }
      ]
    });
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
    }

    return (
      <div className="App">
        <h1>Hi.</h1>
        <p>I'm a React Application.</p>
        <button style={style} onClick={this.togglePeopleHander}>Toggle People</button>
        { 
          this.state.showPeople ?
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}/>
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Karen')}
                changed={this.nameChangedHandler}
                >My Hobbies: Racing</Person>
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}/>
            </div> : null
        }
      </div>
    );
  }
}

export default App;
