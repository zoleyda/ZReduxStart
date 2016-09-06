import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCzn9TQMeTSAXGCICvVJkl7oCIwYtm37BI';

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
