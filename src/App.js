import Navbar from './jsx-components/Navbar';
import Search from './jsx-components/Search';
import './stylesheets/index.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className='main-container'>
        <div className='container-content'>
          <h1 className='title'>Find your meal for tonight!</h1>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default App;
