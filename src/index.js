import React from 'react';
import ReactDOM from 'react-dom';

//new component. this should produce some HTML

const App = () => {
	return <div> Hola!</div>
}

//generate HTML and put it on the page (the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
