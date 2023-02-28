import React from 'react';

const RecipeCard = ({ recipe }) => {

    return (
      <div className="recipe">
        <div>
          <h3>{recipe.title}</h3>
          <img src={recipe.image !== 'N/A' ? recipe.image : 'https://via.placeholder.com/400'} alt={recipe.title} />
        </div>
      </div>
    )
  }

export default RecipeCard;
