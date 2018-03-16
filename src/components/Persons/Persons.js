import React from 'react';
import Person from './Person/Person'

const Persons = props => props.persons.map((person, index) => {
    return <Person
      click={() => props.clicked(index)}
      name={person.name}
      age={person.age}
      changed={e => props.changed(e, person.id)}
      key={person.id} />
  });

export default Persons;