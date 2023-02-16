import React from 'react';
import './App.css';

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    );
  }
}

export default Search;
