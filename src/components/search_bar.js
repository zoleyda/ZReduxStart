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
			<div className="search-bar">
				<input 
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;