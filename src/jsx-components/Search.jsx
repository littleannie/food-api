import React from 'react';
import { useState, useEffect } from 'react';

import RecipeCard from './RecipeCard';

const API_URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=fbd1846e5ce84d15baad81209408f201"

const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const searchRecipes = async (title) => {
    const response = await fetch(`${API_URL}&query=${title}`);
    const data = await response.json();
    setRecipes(data.results);
  }

  useEffect(() => {
    searchRecipes(searchValue)
  }, []);

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
          <button class='primary-button' onClick={(e) => searchRecipes(searchValue)}>
            Search
          </button>
        </div>
        <div>
        <p>{recipes.length}</p>
        </div>
        <div className='cards'>
          { recipes?.length > 0
            ? recipes.map((recipe) => (
              <RecipeCard recipe={recipe} />
            )) : (
              <p>No recipes found</p>
            )

          }
        </div>

      </div>
    );
}

export default Search;
