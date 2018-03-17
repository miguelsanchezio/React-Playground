import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {
  constructor(props) {
    super(props);

    console.log('[Persons.js] Inside constructor()', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('[UPDATE Person.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked;
  //   // return true;
	// }

  componentWillUpdate(nextProps, nextState) {
		console.log('[UPDATE Persons.js] Inside componentWillUpdate()', nextProps, nextState);
	}

  componentDidUpdate() {
		console.log('[UPDATE Persons.js] Inside componentDidUpdate()');
	}

  render() {
    console.log('[Persons.js] Inside render()');

    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        changed={e => this.props.changed(e, person.id)}
        key={person.id} />
    });
  }
}

export default Persons;