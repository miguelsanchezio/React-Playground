import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css'
import wClass from '../../../hoc/wClass';

class Person extends Component {
  constructor(props) {
    super(props);

    console.log('[Person.js] Inside constructor()', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
	}
	
	componentWillReceiveProps(nextProps) {
		console.log('[UPDATE Person.js] Inside componentWillReceiveProps()', nextProps);
	}

  render() {
		console.log('[Person.js] Inside render()');
		
		return (
			<React.Fragment>
				<p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old.</p>
				<p>{this.props.children}</p>
				<input onChange={this.props.changed} type="text" value={this.props.name}/>
			</React.Fragment>
		)
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
}

export default wClass(Person, classes.Person);