import React from 'react';
import { useState } from 'react';

import RecipeCard from './RecipeCard';
import RecipeDetails from './RecipeDetails';

const API_URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=fbd1846e5ce84d15baad81209408f201"
const API_URL_2 = "https://api.spoonacular.com/recipes/random?apiKey=fbd1846e5ce84d15baad81209408f201";

const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isShuffleClicked, setIsShuffleClicked] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);


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

  const handleSearchClick = (e) => {
    e.preventDefault();
    setIsShuffleClicked(false);
    setIsSearchClicked(true);
    searchRecipes(searchValue);
  };

  const handleShuffleClick = (e) => {
    e.preventDefault();
    setIsSearchClicked(false);
    setIsShuffleClicked(true);
    searchRecipe();
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
          <button className='primary-button' onClick={handleShuffleClick}>
            Shuffle
          </button>
        </div>
          { recipes?.length === 0 && (isShuffleClicked || isSearchClicked) ? (
            <div className='no-result'>
              <h3>Sorry, no result found...</h3>
              <img className='no-result-img' src='../images/illustration.png' alt='logo' />
            </div>
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
