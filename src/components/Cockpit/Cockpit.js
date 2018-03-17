import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const Cockpit = props => {
  const assignedClasses = [];

  let btnClass = classes.Button;
  if(props.showPeople) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if(props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return(
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>I'm a React Application.</p>
      <button
        className={btnClass}
        onClick={props.clicked}>
        Toggle People
      </button>
    </Aux>
  )
};

export default Cockpit;