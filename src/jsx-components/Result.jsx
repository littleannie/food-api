import React from 'react';
import RecipeCard from './RecipeCard';
import RecipeDetails from './RecipeDetails';

const Result = ( { recipes }) => {
  return (
      <div>
        { recipes.length > 0 ? 
          (
          <div className="cards">
            {recipes.map((recipe) => <RecipeDetails recipe={recipe} />)}
          </div>
         ) : (
        <div className='no-result'>
          <h3>Sorry, no result found...</h3>
          <img className='no-result-img' src='../images/illustration.png' alt='logo' />
        </div>
        )}
      </div>
  )
}

export default Result;
