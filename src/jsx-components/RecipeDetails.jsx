import React from "react";

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <img
          src={recipe.image !== "N/A" ? recipe.image : "https://via.placeholder.com/400"}
          alt={recipe.title}
        />
        <div className="main-infos">
          <h3>{recipe.title}</h3>
          <div className="tags-infos">
            {recipe.vegetarian ? (
              <div className="tag-vegetarian">
                Vegetarian
              </div>
            ) : (
              ""
            )}
            {recipe.veryHealthy ? (
              <div className="tag-healthy">
                Healthy
              </div>
            ) : (
              ""
            )}
            {recipe.sustainable ? (
              <div className="tag-sustainable">
                Sustainable
              </div>
            ) : (
              ""
            )}
            <div className="tag-sustainable"></div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="card-description"></div>
        <div className="card-button">
          <a className="primary-button">Search</a>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
