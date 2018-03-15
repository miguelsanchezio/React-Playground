import React from 'react';
import Radium from 'radium';
import './Person.css';

const Person = (props) => {
	const style = {
		'@media (min-width: 600px)': {
			width: '400px'
		}
	};

  return (
		<div className='Person' style={style}>
			<p onClick={props.click}>I'm a {props.name} and I am {props.age} years old.</p>
			<p>{props.children}</p>
			<input onChange={props.changed} type="text" value={props.name}/>
		</div>
	)
}

export default Radium(Person);