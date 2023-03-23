import React from 'react';
import { useState } from 'react';
import getRecipes from './api';

import Result from './Result'

const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const searchRecipes = async (title) => {
    const results = await getRecipes(title);
    setRecipes(results);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (searchValue.trim() !== '') {
      searchRecipes(searchValue);
    } else {
      setRecipes([])
    }
    setSearchValue('');
  };

    return (
      <div className="search">
        <div className='search-form'>
          <input
            className='input'
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            />
          <button className='primary-button'
                  onClick={handleSearchClick}>
            Search
          </button>
          <Result recipes={recipes} />
        </div>
      </div>
    );
}

export default Search;
