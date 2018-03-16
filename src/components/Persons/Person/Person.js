import React, { Component } from 'react';
import classes from './Person.css'
import './Person.css';

class Person extends Component {
	render() {
		return (
			<div className={classes.Person}>
				<p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old.</p>
				<p>{this.props.children}</p>
				<input onChange={this.props.changed} type="text" value={this.props.name}/>
			</div>
		)
	}
}

export default Person;