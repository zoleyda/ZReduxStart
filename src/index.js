import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCzn9TQMeTSAXGCICvVJkl7oCIwYtm37BI';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
	console.log(data);
});

//new component. this should produce some HTML

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

//generate HTML and put it on the page (the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
