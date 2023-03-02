import React from "react";

const RecipeDetails = ({ recipe }) => {

  const { image, title, veryHealthy, sustainable, sourceUrl, vegetarian} = recipe
  
  return (
    <div className="card-container">
      <div className="card-header">
        <img
          src={image !== "N/A" ? image : "https://via.placeholder.com/400"}
          alt={title}
        />
        <div className="main-infos">
          <h3>{title}</h3>
          <div className="tags-infos">
            {vegetarian ? (
              <div className="tag">
                <img src="../images/checkmark.png" alt='vegetarian tag'/>
                <p>Vegetarian</p>
              </div>
            ) : (
              ""
            )}
            {veryHealthy ? (
              <div className="tag">
                <img src="../images/checkmark.png" alt='tag'/>
                <p>Healthy</p>
              </div>
            ) : (
              ""
            )}
            {sustainable ? (
              <div className="tag">
                <img src="../images/checkmark.png" alt='tag'/>
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
          <a  href={sourceUrl} className="primary-button">View recipe</a>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
