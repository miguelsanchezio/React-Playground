import React, { PureComponent } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import wClass from '../hoc/wClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);

    console.log('[App.js] Inside constructor()', props);

    this.state = {
      persons: [
        { id: 1, name: 'Miguel', age: 24 },
        { id: 2, name: 'Ana', age: 23 },
        { id: 3, name: 'Yesi', age: 28 },      
      ],
      otherState: 'Other state.',
      showPeople: false,
      toggleClicked: 0,
      authenticated: false
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons || nextState.showPeople !== this.state.showPeople;
	// 	// return true;
	// }

  componentWillUpdate(nextProps, nextState) {
		console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[UPDATE App.js] Inside getDerivedStateFromProps()', nextProps, prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate()');
  }

  componentDidUpdate() {
		console.log('[UPDATE App.js] Inside componentDidUpdate()');
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
    this.setState((prevState, props) => {
      return {
        showPeople: !doesShow,
        toggleClicked: prevState.toggleClicked + 1 
      }
    });
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {
    console.log('[App.js] Inside render()');

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
      <React.Fragment>
        <button onClick={() => {this.setState({showPeople: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPeople={this.state.showPeople}
          persons={this.state.persons}
          login={this.loginHandler}
          clicked={this.togglePeopleHander}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </React.Fragment>
    );
  }
}

export default wClass(App, classes.App);
