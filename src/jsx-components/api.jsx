const API_URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=fbd1846e5ce84d15baad81209408f201";

const getRecipes = async (title) => {
  try {
    const response = await fetch(`${API_URL}&query=${title}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(`Fetch error: ${error.message}`);
  }
}

export default getRecipes;
