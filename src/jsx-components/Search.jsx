import React from 'react';
import { useState, useEffect } from 'react';

import RecipeCard from './RecipeCard';

const API_URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=9eb62f4dfb734b2eb5868ec8466b89a3"

const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const searchRecipes = async () => {
    const response = await fetch(`${API_URL}&query=${searchValue}`);
    const data = await response.json();
    setRecipes(data.results);
  }

  useEffect(() => {
    searchRecipes(searchValue)
  }, []);

    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          />
        <button onClick={(e) => searchRecipes(searchValue)}>
          Search
        </button>

        { recipes?.length > 0
          ? recipes.map((recipe) => (
            <RecipeCard recipe={recipe} />
          )) : (
            <p>No recipes found</p>
          )

        }

      </div>
    );
}

export default Search;
