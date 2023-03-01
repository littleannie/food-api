import React from 'react';
import { useState, useEffect } from 'react';

import RecipeCard from './RecipeCard';
import RecipeDetails from './RecipeDetails';

const API_URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=fbd1846e5ce84d15baad81209408f201"
const API_URL_2 = "https://api.spoonacular.com/recipes/random?apiKey=fbd1846e5ce84d15baad81209408f201";

const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const searchRecipe = async () => {
    try {
      const response = await fetch(API_URL_2);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setRecipes(data.recipes);
      setSearchValue('');
    } catch (error) {
      console.error(`Fetch error: ${error.message}`);
    }
  };


  const searchRecipes = async (title) => {
    try {
      const response = await fetch(`${API_URL}&query=${title}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setRecipes(data.results);
    } catch (error) {
      console.error(`Fetch error: ${error.message}`);
    }
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
          <button className='primary-button' onClick={(e) => searchRecipes(searchValue)}>
            Search
          </button>
          <button className='primary-button' onClick={searchRecipe}>
            Shuffle
          </button>
        </div>
          { recipes?.length === 0 ? (
            <p>No recipes found</p>
          ) : recipes?.length === 1 ? (
            <div className='cards'>
              {recipes.map((recipe) => <RecipeDetails recipe={recipe} />)}
            </div>
          ) : (
            <div className='cards'>
              {recipes.map((recipe) => <RecipeCard recipe={recipe} />)}
            </div>
          )
          }
      </div>
    );
}

export default Search;
