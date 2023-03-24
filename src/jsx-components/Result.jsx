import React from 'react';
import RecipeCard from './RecipeCard';

const Result = ( { recipes }) => {
  return (
    <div className="cards">
      {recipes.map((recipe) =>
        <RecipeCard recipe={recipe} key={recipe.id} />
      )}
    </div>
  )
}

export default Result;
