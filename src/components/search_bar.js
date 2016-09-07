import React, { Component } from 'react';

class SearchBar extends Component {

	//inicializando states
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		//this.setState.... for update state...
		return (
			<div>
				<input onChange={event => this.setState({ term: event.target.value })} />
				Value of input: {this.state.term}
			</div>
		);
	}
}

export default SearchBar;