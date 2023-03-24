const API_URL_COMPLEX_SEARCH = "https://api.spoonacular.com/recipes/complexSearch?apiKey=9eb62f4dfb734b2eb5868ec8466b89a3";

const getRecipes = async (title) => {
  try {
    const response = await fetch(`${API_URL_COMPLEX_SEARCH}&query=${title}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const recipeDetailRequests = data.results.map((recipe) => {
      const API_URL_RECIPE_DETAIL = `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=9eb62f4dfb734b2eb5868ec8466b89a3`
      return fetch(`${API_URL_RECIPE_DETAIL}`).then(response => response.json());
    });
    const recipeDetails = await Promise.all(recipeDetailRequests);
    return recipeDetails;
  } catch (error) {
    console.error(`Fetch error: ${error.message}`);
  }
}

export default getRecipes;
