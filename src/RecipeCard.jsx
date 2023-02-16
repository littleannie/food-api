import React from 'react';

class RecipeCard extends React.Component {

  render() {

    const { recipe } = this.props;

    return (
      <div className="recipe">
        <div>
          <p>{recipe.Title}</p>
        </div>
        <div>
          <img src={recipe.Poster !== 'N/A' ? recipe.Poster : 'https://via.placeholder.com/400'} alt={recipe.Title} />
        </div>
        <div>
          <span>{recipe.Type}</span>
          <h3>{recipe.Title}</h3>
        </div>
      </div>
    )
  }
}

export default RecipeCard;
