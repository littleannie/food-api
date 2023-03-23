import React from 'react';
import RecipeCard from './RecipeCard';
import RecipeDetails from './RecipeDetails';

const Result = ( { recipes }) => {
  return (
    <div className="results">
      { recipes.length > 0 ? "coucou" : "not coucou"}
    </div>
  )
}

export default Result;
