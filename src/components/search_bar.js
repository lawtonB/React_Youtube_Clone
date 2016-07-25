import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
      super(props);

      //manually initialize state by creating a new object with props, only do this in constructor
      this.state = {searchTerm: ''};
  }

render() {
  return (
      //manipulate state using setState 
      //event handler onChange sets searchTerm to event.target.value
      // value of input: {this.state.searchTerm}
      // by setting value to be controlled by state <input> becomes a "controlled" component
    <div> 
      <input 
      value={this.state.searchTerm}
      onChange={(event) => this.setState({ searchTerm: event.target.value })} />
    </div>
      );  
    }
  }

export default SearchBar;