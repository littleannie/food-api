import Navbar from './jsx-components/Navbar';
import Search from './jsx-components/Search';
import './stylesheets/index.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Search />
    </div>
  );
}

export default App;
