import Search from './Search';
import RecipeCard from './RecipeCard';
import './App.css';

const recipe1 = {
  Title: 'Sandwich Thon',
  Type: 'Main Course',
  Poster: 'N/A'
}

function App() {
  return (
    <div className="app">
      <h1>React App</h1>
      <Search />
      <RecipeCard recipe={recipe1} />
    </div>
  );
}

export default App;
