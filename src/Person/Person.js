import React from 'react';

const Person = (props) => {
  return (
		<div>
			<p onClick={props.click}>I'm a {props.name} and I am {props.age} years old.</p>
			<p>{props.children}</p>
			<input onChange={props.changed} type="text" value={props.name}/>
		</div>
	)
}

export default Person;