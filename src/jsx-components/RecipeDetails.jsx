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
                <img src="../images/vegetarian.png" alt='vegetarian tag'/>
                <p>Vegetarian</p>
              </div>
            ) : (
              ""
            )}
            {recipe.veryHealthy ? (
              <div className="tag-healthy">
                <img src="../images/vegetarian.png" alt='vegetarian tag'/>
                <p>Healthy</p>
              </div>
            ) : (
              ""
            )}
            {recipe.sustainable ? (
              <div className="tag-sustainable">
                <img src="../images/vegetarian.png" alt='vegetarian tag'/>
                <p>Sustainable</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="card-button">
          <a  href={recipe.sourceUrl} className="primary-button">View recipe</a>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
