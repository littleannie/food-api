import React from 'react';
import { useState } from 'react';
import getRecipes from './api';
import CardSkeleton from './CardSkeleton';

import RecipeCard from './RecipeCard'

const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [clicked, setClicked] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const searchRecipes = async (title) => {
    const results = await getRecipes(title);
    setRecipes(results);
    setIsloading(false);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (searchValue.trim() !== '') {
      searchRecipes(searchValue);
      setIsloading(true);
    } else {
      setRecipes([]);
      setIsloading(false);
    }
    setSearchValue('');
    setClicked(true);
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
        </div>
        <div className="results-container">
        {isLoading && <CardSkeleton cards={4}/>}
        {clicked && !isLoading && recipes.length > 0 && (
          recipes.map((recipe) =>
            <RecipeCard recipe={recipe} key={recipe.id} />
          )
      )}
        </div>
      {clicked && !isLoading && recipes.length === 0 && (
        <div className='no-result'>
          <h3>Sorry, no result found...</h3>
          <img className='no-result-img' src='../images/illustration.png' alt='logo' />
        </div>
      )}
      </div>
    );
}

export default Search;
