import Navbar from './jsx-components/Navbar';
import Search from './jsx-components/Search';
import './stylesheets/index.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Search />
      <img src='./images/logo.png' alt='logo' />
    </div>
  );
}

export default App;
