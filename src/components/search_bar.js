import React, { Component } from "react";  // from react also import the attribute Component

class SearchBar extends Component {
    constructor (props) { 
        super(props);

        this.state = { term: ''}; // record a property called 'term'. 
        //Only in the constructor we manipulate our state like this, instead we use this.setState.
    }
    
    
    render () { //every class must have a render method
        return(
            <div>
                <input onChange={event => this.setState({ term: event.target.value })} />
            </div>
            
        ); // The component automatically re-renders 
    }


}

export default SearchBar;