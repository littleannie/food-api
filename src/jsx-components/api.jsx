const API_URL_COMPLEX_SEARCH = "https://api.spoonacular.com/recipes/complexSearch?apiKey=fbd1846e5ce84d15baad81209408f201";

const getRecipes = async (title) => {
  try {
    const response = await fetch(`${API_URL_COMPLEX_SEARCH}&query=${title}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const recipeDetailRequests = data.results.map((recipe) => {
      const API_URL_RECIPE_DETAIL = `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=fbd1846e5ce84d15baad81209408f201`
      return fetch(`${API_URL_RECIPE_DETAIL}`).then(response => response.json());
    });
    const recipeDetails = await Promise.all(recipeDetailRequests);
    return recipeDetails;
  } catch (error) {
    console.error(`Fetch error: ${error.message}`);
  }
}

export default getRecipes;

