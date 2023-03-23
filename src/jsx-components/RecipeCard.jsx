import React from 'react';

const RecipeCard = ({ recipe }) => {

  const { image, title } = recipe

    return (
      <div className="recipe">
        <div>
          <img src={image !== 'N/A' ? image : 'https://via.placeholder.com/400'} alt={title} />
          <h3>{title}</h3>
        </div>
      </div>
    )
  }

export default RecipeCard;
