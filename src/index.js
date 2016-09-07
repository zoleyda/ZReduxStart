import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCzn9TQMeTSAXGCICvVJkl7oCIwYtm37BI';

//new component. this should produce some HTML
class App extends Component {

	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
			//this.setState({ videos: videos }); same 
		});
	}

	render() {	
		return (
			<div>
				<SearchBar />
				<VideoList />
			</div>
		);
	}
}

//generate HTML and put it on the page (the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
