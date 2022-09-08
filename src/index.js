import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBMb63U6H7qYpvR3pEKV_C-rUtI-YUZ9_w';

// Create component that produces some HTML
const App = () => { //different way of declaring a function 
    return (
    <div>
        <SearchBar/>
    </div>
    ); // JSX looks like html and it can not be interpreted by the browser
}

//Take this comnponent's generated html and put it in the page (in the DOM).

ReactDOM.render(<App/>, document.querySelector('.container'));