import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCzn9TQMeTSAXGCICvVJkl7oCIwYtm37BI';

//new component. this should produce some HTML
class App extends Component {

	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			seledctedVideo: null
		};

		YTSearch({key: API_KEY, term: 'sweeth4ck'}, (videos) => {
			this.setState({ 
				videos: videos,
				seledctedVideo: videos[0] 
			});
		});
	}

	render() {	
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.seledctedVideo} />
				<VideoList 
				onVideoSelect={seledctedVideo => this.setState({seledctedVideo}) }
				videos={this.state.videos} />
			</div>
		);
	}
}

//generate HTML and put it on the page (the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
