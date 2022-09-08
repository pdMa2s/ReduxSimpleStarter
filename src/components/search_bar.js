import React, { Component } from "react";  // from react also import the attribute Component

class SearchBar extends Component {
    constructor (props) { 
        super(props);

        this.state = { term: ''}; // record a property called 'term'
    }
    
    
    render () { //every class must have a render method
        return <input onChange={(event) => console.log(event.target.value)} />; // any input element emit a change event
    }


}

export default SearchBar;